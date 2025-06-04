const categories = [
  { id: 'gift', name: 'لوازم کادویی' },
  { id: 'kitchen', name: 'آشپزخانه' },
  { id: 'plastic', name: 'پلاسکو' },
  { id: 'bedroom', name: 'خواب' },
  { id: 'accessory', name: 'اکسسوری' },
  { id: 'electronic', name: 'برقی' },
];

const products = [
  // دسته‌بندی: لوازم کادویی (20 محصول)
  { id: 1, name: "ست کادویی کریستال", category: "gift", price: 450000, discount: 10, description: "ست کادویی لوکس با بسته‌بندی شیک", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 2, name: "جعبه کادویی چوبی", category: "gift", price: 250000, discount: 0, description: "جعبه دست‌ساز با طراحی سنتی", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 3, name: "ست شمع تزئینی", category: "gift", price: 150000, discount: 15, description: "شمع‌های معطر با بسته‌بندی زیبا", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 4, name: "گلدان سرامیکی", category: "gift", price: 300000, discount: 0, description: "گلدان دست‌ساز با لعاب سنتی", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 5, name: "ست لیوان کریستال", category: "gift", price: 600000, discount: 20, description: "لیوان‌های کریستال با جعبه کادویی", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 6, name: "جعبه جواهرات مخملی", category: "gift", price: 200000, discount: 0, description: "جعبه شیک برای جواهرات", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 7, name: "ست ساعت و خودکار", category: "gift", price: 800000, discount: 10, description: "هدیه‌ای لوکس برای مدیران", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 8, name: "آلبوم عکس چوبی", category: "gift", price: 350000, discount: 0, description: "آلبوم با طراحی کلاسیک", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 9, name: "ست عطر مینیاتوری", category: "gift", price: 500000, discount: 15, description: "مجموعه عطرهای کوچک", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 10, name: "تابلو نقاشی کوچک", category: "gift", price: 400000, discount: 0, description: "تابلو دست‌ساز با قاب چوبی", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 11, name: "ست کادویی شکلات", category: "gift", price: 200000, discount: 10, description: "شکلات‌های دست‌ساز با بسته‌بندی شیک", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 12, name: "دفترچه یادداشت چرمی", category: "gift", price: 180000, discount: 0, description: "دفترچه با جلد چرمی", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 13, name: "ست ماگ سرامیکی", category: "gift", price: 250000, discount: 15, description: "ماگ‌های تزئینی با جعبه کادویی", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 14, name: "شمعدان نقره‌ای", category: "gift", price: 700000, discount: 0, description: "شمعدان کلاسیک با طراحی ظریف", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 15, name: "ست کیف و کمربند", category: "gift", price: 900000, discount: 20, description: "ست چرمی مردانه", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 16, name: "جعبه موزیکال", category: "gift", price: 300000, discount: 0, description: "جعبه موزیکال با ملودی کلاسیک", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 17, name: "ست لوازم تحریر", category: "gift", price: 150000, discount: 10, description: "لوازم تحریر با بسته‌بندی زیبا", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 18, name: "تندیس تزئینی", category: "gift", price: 400000, discount: 0, description: "تندیس سرامیکی دست‌ساز", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 19, name: "ست حوله کادویی", category: "gift", price: 350000, discount: 15, description: "حوله‌های نرم با جعبه شیک", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },
  { id: 20, name: "پک لوازم آرایشی", category: "gift", price: 600000, discount: 0, description: "محصولات آرایشی با بسته‌بندی کادویی", image: "https://uploadkon.ir/uploads/ccf004_25IMG-20250604-171323-782.jpg" },

  // دسته‌بندی: آشپزخانه (20 محصول)
  { id: 21, name: "ست قابلمه استیل", category: "kitchen", price: 1500000, discount: 10, description: "قابلمه‌های استیل با کیفیت بالا", image: "https://your-host.com/images/kitchen/product-1.jpg" },
  { id: 22, name: "سرویس قاشق و چنگال", category: "kitchen", price: 800000, discount: 0, description: "ست 24 پارچه استیل", image: "https://your-host.com/images/kitchen/product-2.jpg" },
  { id: 23, name: "کتری و قوری چینی", category: "kitchen", price: 400000, discount: 15, description: "ست کتری و قوری با طراحی سنتی", image: "https://your-host.com/images/kitchen/product-3.jpg" },
  { id: 24, name: "تخته برش چوبی", category: "kitchen", price: 150000, discount: 0, description: "تخته برش مقاوم با طراحی ارگونومیک", image: "https://your-host.com/images/kitchen/product-4.jpg" },
  { id: 25, name: "ست چاقو آشپزخانه", category: "kitchen", price: 500000, discount: 20, description: "چاقوهای تیز با دسته راحت", image: "https://your-host.com/images/kitchen/product-5.jpg" },
  { id: 26, name: "سرویس بشقاب سرامیکی", category: "kitchen", price: 1200000, discount: 0, description: "ست 6 نفره با طراحی مدرن", image: "https://your-host.com/images/kitchen/product-6.jpg" },
  { id: 27, name: "ماشین ظرفشویی رومیزی", category: "kitchen", price: 5000000, discount: 10, description: "ظرفشویی کم‌مصرف با ظرفیت 6 نفر", image: "https://your-host.com/images/kitchen/product-7.jpg" },
  { id: 28, name: "ست کاسه استیل", category: "kitchen", price: 300000, discount: 0, description: "کاسه‌های چندمنظوره با کیفیت", image: "https://your-host.com/images/kitchen/product-8.jpg" },
  { id: 29, name: "مایکروویو 30 لیتری", category: "kitchen", price: 3500000, discount: 15, description: "مایکروویو با قابلیت گریل", image: "https://your-host.com/images/kitchen/product-9.jpg" },
  { id: 30, name: "آبمیوه‌گیری برقی", category: "kitchen", price: 2000000, discount: 0, description: "دستگاه قدرتمند با تیغه استیل", image: "https://your-host.com/images/kitchen/product-10.jpg" },
  { id: 31, name: "ست پارچ و لیوان", category: "kitchen", price: 250000, discount: 10, description: "پارچ و لیوان‌های شیشه‌ای شیک", image: "https://your-host.com/images/kitchen/product-11.jpg" },
  { id: 32, name: "چای‌ساز برقی", category: "kitchen", price: 900000, discount: 0, description: "چای‌ساز با کتری شیشه‌ای", image: "https://your-host.com/images/kitchen/product-12.jpg" },
  { id: 33, name: "ست ادویه‌جات", category: "kitchen", price: 200000, discount: 15, description: "ظروف ادویه با طراحی مدرن", image: "https://your-host.com/images/kitchen/product-13.jpg" },
  { id: 34, name: "فر برقی 40 لیتری", category: "kitchen", price: 4000000, discount: 0, description: "فر با قابلیت پخت چندمنظوره", image: "https://your-host.com/images/kitchen/product-14.jpg" },
  { id: 35, name: "ست ظروف پخت", category: "kitchen", price: 1800000, discount: 20, description: "ظروف نچسب با کیفیت بالا", image: "https://your-host.com/images/kitchen/product-15.jpg" },
  { id: 36, name: "قهوه‌ساز برقی", category: "kitchen", price: 700000, discount: 0, description: "دستگاه قهوه‌ساز با فیلتر دائمی", image: "https://your-host.com/images/kitchen/product-16.jpg" },
  { id: 37, name: "ست کفگیر و ملاقه", category: "kitchen", price: 150000, discount: 10, description: "ابزار آشپزی با دسته مقاوم", image: "https://your-host.com/images/kitchen/product-17.jpg" },
  { id: 38, name: "یخچال کوچک", category: "kitchen", price: 3000000, discount: 0, description: "یخچال مینی مناسب dorm", image: "https://your-host.com/images/kitchen/product-18.jpg" },
  { id: 39, name: "ست سفره پارچه‌ای", category: "kitchen", price: 250000, discount: 15, description: "سفره و دستمال با طراحی زیبا", image: "https://your-host.com/images/kitchen/product-19.jpg" },
  { id: 40, name: "غذاساز چندکاره", category: "kitchen", price: 2500000, discount: 0, description: "دستگاه چندمنظوره آشپزی", image: "https://your-host.com/images/kitchen/product-20.jpg" },

  // دسته‌بندی: پلاسکو (20 محصول)
  { id: 41, name: "ظرف نگهدارنده غذا", category: "plastic", price: 100000, discount: 10, description: "ظرف پلاستیکی با درب محکم", image: "https://your-host.com/images/plastic/product-1.jpg" },
  { id: 42, name: "ست سبد پلاستیکی", category: "plastic", price: 80000, discount: 0, description: "سبدهای چندمنظوره", image: "https://your-host.com/images/plastic/product-2.jpg" },
  { id: 43, name: "جای ادویه پلاستیکی", category: "plastic", price: 120000, discount: 15, description: "ست 6 تایی جای ادویه", image: "https://your-host.com/images/plastic/product-3.jpg" },
  { id: 44, name: "ظرف میوه‌خوری", category: "plastic", price: 150000, discount: 0, description: "ظرف پلاستیکی با طراحی زیبا", image: "https://your-host.com/images/plastic/product-4.jpg" },
  { id: 45, name: "ست سطل زباله", category: "plastic", price: 200000, discount: 20, description: "سطل‌های بازیافت با رنگ‌های متنوع", image: "https://your-host.com/images/plastic/product-5.jpg" },
  { id: 46, name: "جای قاشق و چنگال", category: "plastic", price: 70000, discount: 0, description: "محفظه پلاستیکی برای کارد و چنگال", image: "https://your-host.com/images/plastic/product-6.jpg" },
  { id: 47, name: "ست کاسه پلاستیکی", category: "plastic", price: 100000, discount: 10, description: "کاسه‌های چندسایز", image: "https://your-host.com/images/plastic/product-7.jpg" },
  { id: 48, name: "پارچ پلاستیکی", category: "plastic", price: 60000, discount: 0, description: "پارچ با ظرفیت 2 لیتر", image: "https://your-host.com/images/plastic/product-8.jpg" },
  { id: 49, name: "جای مایع ظرفشویی", category: "plastic", price: 80000, discount: 15, description: "محفظه مایع با پمپ", image: "https://your-host.com/images/plastic/product-9.jpg" },
  { id: 50, name: "سبد لباس پلاستیکی", category: "plastic", price: 150000, discount: 0, description: "سبد مقاوم با ظرفیت بالا", image: "https://your-host.com/images/plastic/product-10.jpg" },
  { id: 51, name: "ست ظروف نگهداری", category: "plastic", price: 200000, discount: 10, description: "ظروف چندسایز با درب", image: "https://your-host.com/images/plastic/product-11.jpg" },
  { id: 52, name: "جای نان پلاستیکی", category: "plastic", price: 100000, discount: 0, description: "محفظه نان با درب کشویی", image: "https://your-host.com/images/plastic/product-12.jpg" },
  { id: 53, name: "ست بشقاب پلاستیکی", category: "plastic", price: 120000, discount: 15, description: "بشقاب‌های نشکن", image: "https://your-host.com/images/plastic/product-13.jpg" },
  { id: 54, name: "جای حبوبات", category: "plastic", price: 90000, discount: 0, description: "ظروف نگهداری حبوبات", image: "https://your-host.com/images/plastic/product-14.jpg" },
  { id: 55, name: "ست لیوان پلاستیکی", category: "plastic", price: 70000, discount: 20, description: "لیوان‌های رنگی نشکن", image: "https://your-host.com/images/plastic/product-15.jpg" },
  { id: 56, name: "جای اسکاچ", category: "plastic", price: 50000, discount: 0, description: "محفظه کنار سینک", image: "https://your-host.com/images/plastic/product-16.jpg" },
  { id: 57, name: "ست زیر لیوانی", category: "plastic", price: 60000, discount: 10, description: "زیرلیوانی‌های تزئینی", image: "https://your-host.com/images/plastic/product-17.jpg" },
  { id: 58, name: "جای دستمال کاغذی", category: "plastic", price: 80000, discount: 0, description: "محفظه دستمال با طراحی ساده", image: "https://your-host.com/images/plastic/product-18.jpg" },
  { id: 59, name: "ست قاشق پلاستیکی", category: "plastic", price: 50000, discount: 15, description: "قاشق‌های نشکن", image: "https://your-host.com/images/plastic/product-19.jpg" },
  { id: 60, name: "جای یخ پلاستیکی", category: "plastic", price: 40000, discount: 0, description: "قالب یخ با درب", image: "https://your-host.com/images/plastic/product-20.jpg" },

  // دسته‌بندی: خواب (20 محصول)
  { id: 61, name: "روتختی دو نفره", category: "bedroom", price: 1000000, discount: 10, description: "روتختی نخی با طراحی مدرن", image: "https://your-host.com/images/bedroom/product-1.jpg" },
  { id: 62, name: "بالش طبی", category: "bedroom", price: 300000, discount: 0, description: "بالش با فوم مموری", image: "https://your-host.com/images/bedroom/product-2.jpg" },
  { id: 63, name: "پتو یک نفره", category: "bedroom", price: 400000, discount: 15, description: "پتو نرم و سبک", image: "https://your-host.com/images/bedroom/product-3.jpg" },
  { id: 64, name: "ملحفه تشک", category: "bedroom", price: 200000, discount: 0, description: "ملحفه نخی ضدحساسیت", image: "https://your-host.com/images/bedroom/product-4.jpg" },
  { id: 65, name: "ست روبالشی", category: "bedroom", price: 150000, discount: 20, description: "روبالشی‌های نخی با طرح گل", image: "https://your-host.com/images/bedroom/product-5.jpg" },
  { id: 66, name: "تشک خوشخواب", category: "bedroom", price: 3000000, discount: 0, description: "تشک فنری با کیفیت بالا", image: "https://your-host.com/images/bedroom/product-6.jpg" },
  { id: 67, name: "چراغ خواب LED", category: "bedroom", price: 250000, discount: 10, description: "چراغ خواب با نور ملایم", image: "https://your-host.com/images/bedroom/product-7.jpg" },
  { id: 68, name: "ست لحاف دو نفره", category: "bedroom", price: 1200000, discount: 0, description: "لحاف و کاور با طراحی شیک", image: "https://your-host.com/images/bedroom/product-8.jpg" },
  { id: 69, name: "کوسن تزئینی", category: "bedroom", price: 100000, discount: 15, description: "کوسن با پارچه مخملی", image: "https://your-host.com/images/bedroom/product-9.jpg" },
  { id: 70, name: "پرده اتاق خواب", category: "bedroom", price: 500000, discount: 0, description: "پرده حریر با طراحی ساده", image: "https://your-host.com/images/bedroom/product-10.jpg" },
  { id: 71, name: "روتختی یک نفره", category: "bedroom", price: 600000, discount: 10, description: "روتختی با طرح جوان‌پسند", image: "https://your-host.com/images/bedroom/product-11.jpg" },
  { id: 72, name: "بالش پر", category: "bedroom", price: 200000, discount: 0, description: "بالش نرم با پر طبیعی مصنوعی", image: "https://your-host.com/images/bedroom/product-12.jpg" },
  { id: 73, name: "پتو دو نفره", category: "bedroom", price: 600000, discount: 15, description: "پتو سنگین و گرم", image: "https://your-host.com/images/bedroom/product-13.jpg" },
  { id: 74, name: "محافظ تشک", category: "bedroom", price: 250000, discount: 0, description: "محافظ ضدآب برای تشک", image: "https://your-host.com/images/bedroom/product-14.jpg" },
  { id: 75, name: "ست کاور لحاف", category: "bedroom", price: 400000, discount: 20, description: "کاور لحاف با طرح‌های متنوع", image: "https://your-host.com/images/bedroom/product-15.jpg" },
  { id: 76, name: "چراغ رومیزی کلاسیک", category: "bedroom", price: 300000, discount: 0, description: "چراغ با پایه چوبی", image: "https://your-host.com/images/bedroom/product-16.jpg" },
  { id: 77, name: "ست ملحفه دو نفره", category: "bedroom", price: 350000, discount: 10, description: "ملحفه با پارچه نرم", image: "https://your-host.com/images/bedroom/product-17.jpg" },
  { id: 78, name: "کمد لباس کوچک", category: "bedroom", price: 2000000, discount: 0, description: "کمد جمع‌وجور با آینه", image: "https://your-host.com/images/bedroom/product-18.jpg" },
  { id: 79, name: "ست روتختی عروس", category: "bedroom", price: 1500000, discount: 15, description: "روتختی لوکس با تور", image: "https://your-host.com/images/bedroom/product-19.jpg" },
  { id: 80, name: "آویز تخت", category: "bedroom", price: 100000, discount: 0, description: "آویز تزئینی برای تخت", image: "https://your-host.com/images/bedroom/product-20.jpg" },

  // دسته‌بندی: اکسسوری (20 محصول)
  { id: 81odef name: "گردنبند نقره", category: "accessory", price: 300000, discount: 10, description: "گردنبند با نگین زینتی", image: "https://your-host.com/images/accessory/product-1.jpg" },
  { id: 82, name: "دستبند چرمی", category: "accessory", price: 150000, discount: 0, description: "دستبند مردانه با طراحی ساده", image: "https://your-host.com/images/accessory/product-2.jpg" },
  { id: 83, name: "گوشواره طلا", category: "accessory", price: 800000, discount: 15, description: "گوشواره با نگین برلیان", image: "https://your-host.com/images/accessory/product-3.jpg" },
  { id: 84, name: "کیف دستی زنانه", category: "accessory", price: 400000, discount: 0, description: "کیف چرم با طراحی شیک", image: "https://your-host.com/images/accessory/product-4.jpg" },
  { id: 85, name: "کمربند چرم مردانه", category: "accessory", price: 200000, discount: 20, description: "کمربند با سگک فلزی", image: "https://your-host.com/images/accessory/product-5.jpg" },
  { id: 86, name: "عینک آفتابی", category: "accessory", price: 350000, discount: 0, description: "عینک با لنز UV", image: "https://your-host.com/images/accessory/product-6.jpg" },
  { id: 87, name: "ساعت مچی زنانه", category: "accessory", price: 600000, discount: 10, description: "ساعت با بند استیل", image: "https://your-host.com/images/accessory/product-7.jpg" },
  { id: 88, name: "شال ابریشمی", category: "accessory", price: 250000, discount: 0, description: "شال با طرح سنتی", image: "https://your-host.com/images/accessory/product-8.jpg" },
  { id: 89, name: "کلاه بافتنی", category: "accessory", price: 100000, discount: 15, description: "کلاه گرم برای زمستان", image: "https://your-host.com/images/accessory/product-9.jpg" },
  { id: 90, name: "کیف پول چرم", category: "accessory", price: 200000, discount: 0, description: "کیف پول با محفظه کارت", image: "https://your-host.com/images/accessory/product-10.jpg" },
  { id: 91, name: "ست انگشتر نقره", category: "accessory", price: 300000, discount: 10, description: "انگشترهای زینتی", image: "https://your-host.com/images/accessory/product-11.jpg" },
  { id: 92, name: "روسری نخی", category: "accessory", price: 150000, discount: 0", description: "روسری با طرح گل‌دار", image: "https://your-host.com/images/accessory/product-12.jpg" },
  { id: 93, name: "ساعت دیواری", category: "accessory", price: 400000, discount: 15, description: "ساعت با طراحی مدرن", image: "https://your-host.com/images/accessory/product-13.jpg" },
  { id: 94, name: "جاکلیدی چرمی", category: "accessory", price: 80000, discount: 0, description: جاکلیدی با طراحی ساده", image: "https://your-host.com/images/accessory/product-14.jpg" },
  { id: 95, name: "ست بدلیجات", category: "accessory", price: 250000, discount: 20, description: "ست گردنبند و گوشواره", image: "https://your-host.com/images/accessory/product-15.jpg" },
  { id: 96, name: "کوله پشتی", category: "accessory", price: 350000, discount: 0, description: کوله با پارچه ضدآب", image: "https://your-host.com/images/accessory/product-16.jpg" },
  { id: 97, name: "دستمال گردن", category: "accessory", price: 100000, discount: 10, description: "دستمال با طرح سنتی", image: "https://your-host.com/images/accessory/product-17.jpg" },
  { id: 98, name: "عطر جیبی", category: "accessory", price: 150000, discount: 0, description: "عطر کوچک با رایحه ملایم", image: "https://your-host.com/images/accessory/product-18.jpg" },
  { id: 99, name: "ست ساعت زن و شوهر", category: "accessory", price: 1000000, discount: 15, description: "ساعت‌های ست با طراحی شیک", image: "https://your-host.com/images/accessory/product-19.jpg" },
  { id: 100, name: "گیره مو تزئینی", category: "accessory", price: 50000, discount: 0, description: "گیره با نگین‌های زینتی", image: "https://your-host.com/images/accessory/product-20.jpg" },

  // دسته‌بندی: برقی (20 محصول)
  { id: 101, name: "جاروبرقی 2000 وات", category: "electronic", price: 4000000, discount: 10, description: "جاروبرقی با قدرت بالا", image: "https://your-host.com/images/electronic/product-1.jpg" },
  { id: 102, name: "اتو بخار", category: "electronic", price: 800000, discount: 0, description: "اتو با مخزن آب", image: "https://your-host.com/images/electronic/product-2.jpg" },
  { id: 103, name: "پنکه رومیزی", category: "electronic", price: 500000, discount: 15, description: "پنکه با 3 سرعت", image: "https://your-host.com/images/electronic/product-3.jpg" },
  { id: 104, name: "ماشین لباسشویی 7 کیلویی", category: "electronic", price: 10000000, discount: 0, description: "لباسشویی با برنامه‌های متنوع", image: "https://your-host.com/images/electronic/product-4.jpg" },
  { id: 105, name: "سشوار حرفه‌ای", category: "electronic", price: 600000, discount: 20, description: "سشوار با باد سرد و گرم", image: "https://your-host.com/images/electronic/product-5.jpg" },
  { id: 106, name: "تلویزیون 43 اینچ", category: "electronic", price: 8000000, discount: 0, description: "تلویزیون LED هوشمند", image: "https://your-host.com/images/electronic/product-6.jpg" },
  { id: 107, name: "مخلوط‌کن برقی", category: "electronic", price: 700000, discount: 10, description: "مخلوط‌کن با تیغه استیل", image: "https://your-host.com/images/electronic/product-7.jpg" },
  { id: 108, name: "لامپ LED 10 وات", category: "electronic", price: 50000, discount: 0, description: "لامپ کم‌مصرف با نور سفید", image: "https://your-host.com/images/electronic/product-8.jpg" },
  { id: 109, name: "همزن برقی", category: "electronic", price: 400000, discount: 15, description: "همزن با چند سرعت", image: "https://your-host.com/images/electronic/product-9.jpg" },
  { id: 110, name: "یخچال فریزر دوقلو", category: "electronic", price: 15000000, discount: 0, description: "یخچال با ظرفیت بالا", image: "https://your-host.com/images/electronic/product-10.jpg" },
  { id: 111, name: "چراغ مطالعه LED", category: "electronic", price: 300000, discount: 10, description: "چراغ با نور قابل تنظیم", image: "https://your-host.com/images/electronic/product-11.jpg" },
  { id: 112, name: "پلوپز برقی", category: "electronic", price: 900000, discount: 0, description: "پلوپز با ظرفیت 4 نفر", image: "https://your-host.com/images/electronic/product-12.jpg" },
  { id: 113, name: "کولر گازی 12000", category: "electronic", price: 12000000, discount: 15, description: "کولر کم‌مصرف با اینورتر", image: "https://your-host.com/images/electronic/product-13.jpg" },
  { id: 114, name: "ماشین اصلاح", category: "electronic", price: 500000, discount: 0, description: "ماشین اصلاح با تیغه استیل", image: "https://your-host.com/images/electronic/product-14.jpg" },
  { id: 115, name: "بخاری برقی", category: "electronic", price: 800000, discount: 20, description: "بخاری با تنظیم دما", image: "https://your-host.com/images/electronic/product-15.jpg" },
  { id: 116, name: "دستگاه تصفیه آب", category: "electronic", price: 3000000, discount: 0, description: "تصفیه آب خانگی", image: "https://your-host.com/images/electronic/product-16.jpg" },
  { id: 117, name: "اسپیکر بلوتوثی", category: "electronic", price: 400000, discount: 10, description: "اسپیکر قابل حمل", image: "https://your-host.com/images/electronic/product-17.jpg" },
  { id: 118, name: "فر برقی رومیزی", category: "electronic", price: 2000000, discount: 0, description: "فر با ظرفیت 40 لیتر", image: "https://your-host.com/images/electronic/product-18.jpg" },
  { id: 119, name: "دوربین مداربسته", category: "electronic", price: 1000000, discount: 15, description: "دوربین با کیفیت HD", image: "https://your-host.com/images/electronic/product-19.jpg" },
  { id: 120, name: "شارژر بی‌سیم", category: "electronic", price: 200000, discount: 0, description: "شارژر سریع برای گوشی", image: "https://your-host.com/images/electronic/product-20.jpg" },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id, name, price) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  if (!cartItems) return;
  cartItems.innerHTML = cart.length === 0 ? '<p class="text-center">سبد خرید شما خالی است.</p>' : '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
      <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <div>
          <h3 class="font-semibold">${item.name}</h3>
          <p>تعداد: ${item.quantity} | قیمت واحد: ${item.price.toLocaleString()} تومان</p>
        </div>
        <button onclick="removeFromCart(${item.id})" class="text-red-600">حذف</button>
      </div>
    `;
  });
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartTotal.textContent = total.toLocaleString() + ' تومان';
}

function renderProducts() {
  const productList = document.getElementById('product-list');
  const discountList = document.getElementById('discount-list');
  if (!productList || !discountList) return;

  const topProducts = products.slice(0, 8);
  const discountedProducts = products.filter(p => p.discount > 0).slice(0, 4);

  productList.innerHTML = '';
  topProducts.forEach(product => {
    const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
    productList.innerHTML += `
      <div class="bg-gray-50 p-4 rounded-lg shadow-md">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4" loading="lazy">
          <h3 class="text-lg font-semibold">${product.name}</h3>
          <p class="text-gray-600">${categories.find(c => c.id === product.category).name}</p>
          <p class="text-primary font-bold mt-2">${discountedPrice.toLocaleString()} تومان</p>
        </a>
        <button onclick="addToCart(${product.id}, '${product.name}', ${discountedPrice})" class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 w-full">افزودن به سبد</button>
      </div>
    `;
  });

  discountList.innerHTML = '';
  discountedProducts.forEach(product => {
    const discountedPrice = Math.round(product.price * (1 - product.discount / 100));
    discountList.innerHTML += `
      <div class="bg-gray-50 p-4 rounded-lg shadow-md">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4" loading="lazy">
          <h3 class="text-lg font-semibold">${product.name}</h3>
          <p class="text-gray-600">${categories.find(c => c.id === product.category).name}</p>
          <p class="text-red-600 font-bold mt-2">${discountedPrice.toLocaleString()} تومان <span class="line-through text-gray-500">${product.price.toLocaleString()}</span></p>
        </a>
        <button onclick="addToCart(${product.id}, '${product.name}', ${discountedPrice})" class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 w-full">افزودن به سبد</button>
      </div>
    `;
  });
}

function filterCategory(categoryId) {
  const categoryList = document.getElementById('category-product-list');
  const categoryTitle = document.getElementById('category-title');
  if (!categoryList || !categoryTitle) return;

  const category = categories.find(c => c.id === categoryId);
  categoryTitle.textContent = `محصولات ${category.name}`;
  categoryList.innerHTML = '';

  const categoryProducts = products.filter(p => p.category === categoryId);
  categoryProducts.forEach(product => {
    const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
    categoryList.innerHTML += `
      <div class="bg-gray-50 p-4 rounded-lg shadow-md
        <a href="product.html#${product.id}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4" loading="lazy">
          <h3 class="text-lg font-semibold">${product.name}</h3>
          <p class="text-gray-600">${category.name}</p>
          <p class="text-primary font-bold mt-2">${discountedPrice.toLocaleString()} تومان</p>
        </a>
        <button onclick="addToCart(${product.id}, '${product.name}', ${discountedPrice})" class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 w-full">افزودن به سبد</button>
      </div>
    `;
  });
}

function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const productDetails = document.getElementById('product-details');
  const comments = document.getElementById('comments');
  const relatedProducts = document.getElementById('related-products');
  if (!productDetails || !comments || !relatedProducts) return;

  const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
  productDetails.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" class="w-full h-64 md:h-96 object-cover rounded-md" loading="lazy">
    </div>
    <div>
      <h2 class="text-xl md:text-2xl font-bold font-shabnam mb-4">${product.name}</h2>
      <p class="text-gray-600 mb-4">${product.description}</p>
      <p class="text-primary font-bold text-lg md:text-xl mb-4">${discountedPrice.toLocaleString()} تومان ${
        product.discount ? `<span class="line-through text-gray-500">${product.price.toLocaleString()} تومان</span>` : ''
      }></p>
      <button onclick="addToCart(${product.id}, '${product.name}', ${discountedPrice})" class="bg-primary text-white py-2 px-6 rounded hover:bg-blue-700">افزودن به سبد خرید</button>
    </div>
  `;

  comments.innerHTML = `
    <div class="bg-white p-4 rounded-lg shadow-md">
      <p class="font-semibold">علی محمدی</p>
      <p class="text-yellow-500">★★★★★☆</p>
      <p>کیفیت عالی و بسته‌بندی شیک، بسیار راضی بودم!</p>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-md">
      <p class="font-semibold">زهرا احمدی</p>
      <p class="text-yellow-500">★★★☆☆</p>
      <p>محصول خوبیه، ولی تحویل کمی طول کشید.</p>
    </div>
  `;

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  relatedProducts.innerHTML = '';
  related.forEach(p => {
    const relatedDiscountedPrice = p.discount ? Math.round(p.price * (1 - p.discount / 100)) : p.price;
    relatedProducts.innerHTML += `
      <div class="bg-gray-50 p-4 rounded-lg shadow-md">
        <a href="product.html#pid=${p.id}">
          <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover rounded-md mb-4" loading="lazy">
          <h3 class="text-lg font-semibold">${p.name}</h3>
          <p class="text-gray-600">${categories.find(c => c.id === p.category).name}</p>
          <p class="text-primary font-bold mt-2">${relatedDiscountedPrice.toLocaleString()} تومان</p>
        </a>
        <button onclick="addToCart(${p.id}, '${p.name}', ${relatedDiscountedPrice})" class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 w-full">افزودن به سبد</button>
      </div>
    `;
  });
}

function setupSearch() {
  const searchInput = document.getElementById('search');
  if (!searchInput) return;
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const productList = document.getElementById('product-list');
    if (!productList) return;
    productList.innerHTML = '';
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm) || categories.find(c => c.id === p.category).name.toLowerCase().includes(searchTerm));
    filteredProducts.some(0, 8).forEach(product => {
      const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
      productList.innerHTML += `
        <div class="bg-gray-50 p-4 rounded-lg shadow-md">
          <a href="product.html#id=${product.id}">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4" loading="lazy">
            <h3 class="text-lg font-semibold">${product.name}</h3>
            <p class="text-gray-600">${categories.find(c => c.id === product.category).name}</p>
            <p class="text-primary font-bold mt-2">${discountedPrice.toLocaleString()} تومان</p>
          </a>
          <button onclick="addToCart(${product.id}, '${product.name}', ${discountedPrice})" class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 w-full">افزودن به سبد</button>
        </div>
      `;
    });
  });
}

function setupMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const categoriesToggle = document.getElementById('categories-toggle');
  const categoriesMenu = document.getElementById('categories-menu');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
  if (categoriesToggle && categoriesMenu) {
    categoriesToggle.addEventListener('click', () => {
      categoriesMenu.classList.toggle('hidden');
    });
  }
}

window.onload = function() {
  if (document.getElementById('product-list')) {
    renderProducts();
    setupSearch();
  }
  if (document.getElementById('product-details')) {
    renderProductPage();
  }
  updateCart();
  setupMenu();
};
