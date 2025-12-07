import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// كلمة المرور من متغيرات البيئة
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'CHANGE_THIS_PASSWORD_123!@#';

// Rate limiting بسيط
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 دقيقة
const MAX_REQUESTS = 10; // 10 طلبات كل 15 دقيقة

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Middleware للتحقق من المصادقة
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'غير مصرح' });
  }

  const token = authHeader.substring(7);
  
  if (token !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'كلمة المرور غير صحيحة' });
  }

  next();
};

// Rate limiting middleware
const rateLimit = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return next();
  }

  const record = rateLimitMap.get(ip);
  
  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + RATE_LIMIT_WINDOW;
    return next();
  }

  if (record.count >= MAX_REQUESTS) {
    return res.status(429).json({ error: 'تم تجاوز الحد المسموح من الطلبات' });
  }

  record.count++;
  next();
};

// إعداد multer لرفع الصور
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'public', 'images', 'gallery');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('الملف المرفوع ليس صورة!'), false);
    }
  }
});

// Route: رفع صورة جديدة
app.post('/api/upload-image', rateLimit, authenticate, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'لم يتم رفع أي صورة' });
    }

    const { title, category } = req.body;

    if (!title || !category) {
      // حذف الصورة المرفوعة إذا كانت البيانات ناقصة
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ error: 'العنوان والتصنيف مطلوبان' });
    }

    // قراءة ملف gallery.json الحالي
    const galleryPath = path.join(__dirname, 'public', 'api', 'gallery.json');
    let galleryData = { images: [] };

    if (fs.existsSync(galleryPath)) {
      const fileContent = fs.readFileSync(galleryPath, 'utf8');
      galleryData = JSON.parse(fileContent);
    }

    // إنشاء معرف فريد
    const newId = galleryData.images.length > 0
      ? Math.max(...galleryData.images.map(img => img.id)) + 1
      : 1;

    // إضافة الصورة الجديدة
    const newImage = {
      id: newId,
      src: `/images/gallery/${req.file.filename}`,
      category: category,
      title: title
    };

    galleryData.images.push(newImage);

    // حفظ ملف gallery.json
    fs.writeFileSync(galleryPath, JSON.stringify(galleryData, null, 2), 'utf8');

    res.json({
      success: true,
      message: 'تم رفع الصورة بنجاح',
      image: newImage
    });

  } catch (error) {
    console.error('خطأ في رفع الصورة:', error);
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: 'حدث خطأ أثناء رفع الصورة' });
  }
});

// Route: تحديث قائمة الصور
app.post('/api/update-gallery', rateLimit, authenticate, (req, res) => {
  try {
    const { images } = req.body;

    if (!Array.isArray(images)) {
      return res.status(400).json({ error: 'البيانات غير صحيحة' });
    }

    const galleryPath = path.join(__dirname, 'public', 'api', 'gallery.json');
    const galleryData = { images };

    fs.writeFileSync(galleryPath, JSON.stringify(galleryData, null, 2), 'utf8');

    res.json({
      success: true,
      message: 'تم تحديث المعرض بنجاح'
    });

  } catch (error) {
    console.error('خطأ في تحديث المعرض:', error);
    res.status(500).json({ error: 'حدث خطأ أثناء تحديث المعرض' });
  }
});

// Route: حذف صورة
app.delete('/api/delete-image/:id', rateLimit, authenticate, (req, res) => {
  try {
    const imageId = parseInt(req.params.id);

    const galleryPath = path.join(__dirname, 'public', 'api', 'gallery.json');
    
    if (!fs.existsSync(galleryPath)) {
      return res.status(404).json({ error: 'ملف المعرض غير موجود' });
    }

    const fileContent = fs.readFileSync(galleryPath, 'utf8');
    const galleryData = JSON.parse(fileContent);

    // البحث عن الصورة وحذفها
    const imageIndex = galleryData.images.findIndex(img => img.id === imageId);
    
    if (imageIndex === -1) {
      return res.status(404).json({ error: 'الصورة غير موجودة' });
    }

    const image = galleryData.images[imageIndex];

    // حذف ملف الصورة من السيرفر
    if (image.src && !image.src.startsWith('http')) {
      const imagePath = path.join(__dirname, 'public', image.src);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // حذف الصورة من القائمة
    galleryData.images.splice(imageIndex, 1);

    // حفظ التحديثات
    fs.writeFileSync(galleryPath, JSON.stringify(galleryData, null, 2), 'utf8');

    res.json({
      success: true,
      message: 'تم حذف الصورة بنجاح'
    });

  } catch (error) {
    console.error('خطأ في حذف الصورة:', error);
    res.status(500).json({ error: 'حدث خطأ أثناء حذف الصورة' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📸 Gallery API ready at http://localhost:${PORT}/api`);
});

