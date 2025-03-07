// واژه ها
const wordsData = [
  {
    "word": "API (Application Programming Interface)",
    "pronunciation": "ای پی آی",
    "meaning": "رابط برنامه‌نویسی کاربردی",
    "description": "رابطی که به نرم‌افزارها اجازه می‌دهد با یکدیگر ارتباط برقرار کنند و داده‌ها را رد و بدل کنند.",
    "categories": ["software"]
  },
  {
    "word": "Agile",
    "pronunciation": "اجایل",
    "meaning": "چابک",
    "description": "رویکردی برای مدیریت پروژه‌ها که بر تکرار، انطباق، و ارتقاء مستمر تأکید دارد.",
    "categories": ["software"]
  },
  {
    "word": "A/B Testing",
    "pronunciation": "تست A/B",
    "meaning": "آزمون A/B",
    "description": "آزمایش و مقایسه دو نسخه از یک ویژگی یا صفحه برای تعیین اینکه کدام یک عملکرد بهتری دارد.",
    "categories": ["software"]
  },
  {
    "word": "Backlog",
    "pronunciation": "بک‌لاگ",
    "meaning": "لیست عقب‌افتاده",
    "description": "لیست وظایف و ویژگی‌هایی که باید در آینده در یک پروژه انجام شوند.",
    "categories": ["software"]
  },
  {
    "word": "Benchmarking",
    "pronunciation": "بنچ‌مارکینگ",
    "meaning": "مقایسه‌سنجی",
    "description": "فرآیند مقایسه عملکرد یک سیستم یا محصول با استانداردهای صنعتی یا رقبا.",
    "categories": ["software"]
  },
  {
    "word": "Beta Testing",
    "pronunciation": "تست بتا",
    "meaning": "آزمون بتا",
    "description": "مرحله آزمایشی محصول که پیش از عرضه عمومی به گروهی محدود از کاربران ارائه می‌شود.",
    "categories": ["software"]
  },
  {
    "word": "Business Model",
    "pronunciation": "مدل کسب‌وکار",
    "meaning": "مدل کسب‌وکار",
    "description": "نحوه کسب درآمد و ارزش‌آفرینی برای یک کسب‌وکار.",
    "categories": ["software"]
  },
  {
    "word": "Churn Rate",
    "pronunciation": "چرن ریت",
    "meaning": "نرخ از دست دادن مشتری",
    "description": "درصد مشتریانی که از محصول یا خدمات یک شرکت انصراف می‌دهند.",
    "categories": ["software"]
  },
  {
    "word": "Customer Journey",
    "pronunciation": "کاستومر جرنی",
    "meaning": "سفر مشتری",
    "description": "نقشه‌ای که تمام مراحل تجربه کاربر از آشنایی تا استفاده از محصول را نمایش می‌دهد.",
    "categories": ["software"]
  },
  {
    "word": "Customer Persona",
    "pronunciation": "کاستومر پرسونای",
    "meaning": "شخصیت مشتری",
    "description": "نمایه‌ای از کاربران هدف بر اساس تحقیقات، شامل ویژگی‌ها و نیازهای آن‌ها.",
    "categories": ["software"]
  },
  {
    "word": "Data-Driven Decision Making",
    "pronunciation": "داده‌محور تصمیم‌گیری",
    "meaning": "تصمیم‌گیری مبتنی بر داده",
    "description": "اتخاذ تصمیمات بر اساس داده‌ها و تحلیل‌های آماری.",
    "categories": ["software"]
  },
  {
    "word": "Deadlock",
    "pronunciation": "ددلاک",
    "meaning": "بن‌بست",
    "description": "وضعیت در توسعه محصول که در آن تصمیم‌گیری یا پیشرفت به دلیل عدم توافق یا مشکلات مسدود شده است.",
    "categories": ["software"]
  },
  {
    "word": "Design Thinking",
    "pronunciation": "دیزاین تینکینگ",
    "meaning": "تفکر طراحی",
    "description": "رویکردی برای حل مسائل پیچیده با تمرکز بر درک عمیق نیازهای کاربران و ایجاد راه‌حل‌های نوآورانه.",
    "categories": ["software"]
  },
  {
    "word": "Feature Creep",
    "pronunciation": "فیتچر کریپ",
    "meaning": "افزایش ویژگی‌ها",
    "description": "اضافه کردن ویژگی‌های جدید به محصول که ممکن است باعث پیچیدگی بیش از حد شود.",
    "categories": ["software"]
  },
  {
    "word": "Go-To-Market Strategy",
    "pronunciation": "گو تو مارکت استراتژی",
    "meaning": "استراتژی ورود به بازار",
    "description": "استراتژی برای معرفی محصول به بازار و جلب مشتریان.",
    "categories": ["software"]
  },
  {
    "word": "Growth Hacking",
    "pronunciation": "گروت‌ هکینگ",
    "meaning": "هک رشد",
    "description": "استفاده از روش‌های مبتکرانه و کم‌هزینه برای رشد سریع کسب‌وکار.",
    "categories": ["software"]
  },
  {
    "word": "KPI (Key Performance Indicator)",
    "pronunciation": "KPI (شاخص کلیدی عملکرد)",
    "meaning": "شاخص‌های کلیدی عملکرد",
    "description": "شاخص‌های کلیدی عملکرد برای اندازه‌گیری موفقیت پروژه یا کسب‌وکار.",
    "categories": ["software"]
  },
  {
    "word": "Landing Page",
    "pronunciation": "لندینگ پیج",
    "meaning": "صفحه فرود",
    "description": "صفحه‌ای در وب‌سایت که به‌طور خاص برای جلب توجه مشتریان هدف طراحی می‌شود.",
    "categories": ["software"]
  },
  {
    "word": "Lean Startup",
    "pronunciation": "لین استارتاپ",
    "meaning": "استارتاپ ناب",
    "description": "رویکردی برای توسعه محصول که بر حداقل سرمایه‌گذاری و ارزیابی سریع ایده‌ها تأکید دارد.",
    "categories": ["software"]
  },
  {
    "word": "MVP (Minimum Viable Product)",
    "pronunciation": "MVP (محصول حداقلی قابل ارائه)",
    "meaning": "محصول حداقلی قابل ارائه",
    "description": "نسخه ابتدایی از محصول با حداقل ویژگی‌های لازم برای جذب کاربران اولیه.",
    "categories": ["software"]
  },
  {
    "word": "User Onboarding",
    "pronunciation": "یوزر آندبوردینگ",
    "meaning": "آشنایی کاربر",
    "description": "فرآیند آشنایی کاربر با محصول و ویژگی‌های آن.",
    "categories": ["software"]
  },
  {
    "word": "Pivot",
    "pronunciation": "پیووت",
    "meaning": "چرخش استراتژیک",
    "description": "تغییر استراتژیک در جهت توسعه محصول یا مدل کسب‌وکار بر اساس بازخورد مشتریان.",
    "categories": ["software"]
  },
  {
    "word": "Product Backlog",
    "pronunciation": "پروduct بک‌لاگ",
    "meaning": "لیست عقب‌افتاده محصول",
    "description": "لیست ویژگی‌ها، داستان‌ها، و وظایف مورد نیاز برای توسعه محصول.",
    "categories": ["software"]
  },
  {
    "word": "Product-Market Fit",
    "pronunciation": "پروduct مارکت فیت",
    "meaning": "هم‌راستایی محصول با بازار",
    "description": "زمانی که محصول به‌خوبی با نیازهای بازار هم‌راستا می‌شود.",
    "categories": ["software"]
  },
  {
    "word": "Product Roadmap",
    "pronunciation": "پروduct رودمپ",
    "meaning": "نقشه‌راه محصول",
    "description": "نقشه‌راهی که ویژگی‌ها، اهداف و مراحل توسعه محصول را در طول زمان مشخص می‌کند.",
    "categories": ["software"]
  },
  {
    "word": "Product-Led Growth",
    "pronunciation": "پروduct لِد گروت",
    "meaning": "رشد محصول‌محور",
    "description": "استراتژی رشد که در آن محصول خود به‌طور مستقیم موجب جذب و حفظ مشتریان می‌شود.",
    "categories": ["software"]
  },
  {
    "word": "Retargeting",
    "pronunciation": "ری‌تارگتینگ",
    "meaning": "بازارهدف مجدد",
    "description": "تبلیغات مجدد به کاربرانی که قبلاً با محصول تعامل داشته‌اند.",
    "categories": ["software"]
  },
  {
    "word": "Retention",
    "pronunciation": "ریتِنتِشن",
    "meaning": "حفظ مشتری",
    "description": "توانایی نگه‌داشتن مشتریان پس از جذب.",
    "categories": ["software"]
  },
  {
    "word": "SaaS (Software as a Service)",
    "pronunciation": "ساس (نرم‌افزار به عنوان خدمت)",
    "meaning": "نرم‌افزار به عنوان خدمت",
    "description": "مدل کسب‌وکار نرم‌افزاری که خدمات نرم‌افزاری به‌صورت آنلاین و از طریق اشتراک ارائه می‌دهد.",
    "categories": ["software"]
  },
  {
    "word": "Scrum",
    "pronunciation": "اسکرام",
    "meaning": "اسکرام",
    "description": "یک روش مدیریت پروژه‌های چابک که بر تقسیم کار به اسپرینت‌های کوتاه مدت تأکید دارد.",
    "categories": ["software"]
  },
  {
    "word": "Stakeholder",
    "pronunciation": "استیک‌هولدر",
    "meaning": "ذینفع",
    "description": "هر فرد یا گروهی که به نحوی در فرآیند توسعه یا تصمیم‌گیری‌های محصول دخالت دارد.",
    "categories": ["software"]
  },
  {
    "word": "T-shaped Skills",
    "pronunciation": "تی‌شِیپ اسکِلز",
    "meaning": "مهارت‌های تی‌شکل",
    "description": "ترکیبی از مهارت‌های عمومی و تخصصی که یک فرد در آن‌ها توانایی دارد.",
    "categories": ["software"]
  },
    {
      "word": "KPIs (Key Performance Indicators)",
      "pronunciation": "کی‌پی‌آی‌ها",
      "meaning": "شاخص‌های کلیدی عملکرد",
      "description": "شاخص‌های کلیدی که برای اندازه‌گیری موفقیت استفاده می‌شوند.",
      "categories": ["software"]
    },
    {
      "word": "Freemium",
      "pronunciation": "فریمیوم",
      "meaning": "مدل کسب‌وکار رایگان",
      "description": "مدل کسب‌وکار که خدمات پایه رایگان است، اما برای ویژگی‌های پیشرفته هزینه دریافت می‌شود.",
      "categories": ["software"]
    },
    {
      "word": "Cross-Functional Team",
      "pronunciation": "تیم چندوظیفه‌ای",
      "meaning": "تیم میان‌رشته‌ای",
      "description": "تیمی که اعضای آن از تخصص‌های مختلف (مثل توسعه‌دهندگان، طراحان، بازاریابی) تشکیل شده است.",
      "categories": ["software"]
    },
    {
      "word": "Sprints",
      "pronunciation": "اسپرینت‌ها",
      "meaning": "دوره‌های زمانی کوتاه مدت",
      "description": "دوره‌های زمانی کوتاه مدت در روش Scrum که برای تکمیل بخش‌هایی از پروژه استفاده می‌شود.",
      "categories": ["software"]
    },
    {
      "word": "Customer Acquisition Cost (CAC)",
      "pronunciation": "کک - کاستومر اکویزیشن کاست",
      "meaning": "هزینه جذب مشتری",
      "description": "هزینه‌ای که برای جذب یک مشتری جدید صرف می‌شود.",
      "categories": ["software"]
    },
    {
      "word": "Net Promoter Score (NPS)",
      "pronunciation": "شاخص نمره ترویج‌کننده خالص",
      "meaning": "شاخص وفاداری مشتری",
      "description": "شاخصی برای اندازه‌گیری وفاداری مشتریان به برند یا محصول.",
      "categories": ["software"]
    },
    {
      "word": "Prototype",
      "pronunciation": "پروتوتایپ",
      "meaning": "مدل اولیه",
      "description": "مدل اولیه و آزمایشی از محصول برای تست و بازخورد سریع.",
      "categories": ["software"]
    },
    {
      "word": "Scalability",
      "pronunciation": "مقیاس‌پذیری",
      "meaning": "قابلیت مقیاس‌پذیری",
      "description": "قابلیت رشد و افزایش ظرفیت یک سیستم یا محصول بدون کاهش کارایی.",
      "categories": ["software"]
    },
    {
      "word": "Milestone",
      "pronunciation": "مایل‌استون",
      "meaning": "نقاط عطف",
      "description": "نقاط عطف یا مراحل مهم در پیشرفت یک پروژه.",
      "categories": ["software"]
    },
    {
      "word": "Funnel",
      "pronunciation": "فنل",
      "meaning": "قیف",
      "description": "مراحل مختلفی که یک مشتری از طریق آن‌ها برای خرید یا استفاده از محصول پیش می‌رود.",
      "categories": ["software"]
    },
    {
      "word": "E-commerce",
      "pronunciation": "ای-کامرس",
      "meaning": "تجارت الکترونیکی",
      "description": "خرید و فروش کالا یا خدمات از طریق اینترنت.",
      "categories": ["software"]
    },
    {
      "word": "SWOT Analysis",
      "pronunciation": "آنالیز SWOT",
      "meaning": "تحلیل SWOT",
      "description": "تحلیل نقاط قوت، ضعف، فرصت‌ها و تهدیدها.",
      "categories": ["software"]
    },
    {
      "word": "User Testing",
      "pronunciation": "تست کاربری",
      "meaning": "تست کاربری",
      "description": "فرآیند ارزیابی عملکرد و تجربه کاربری محصول توسط کاربران واقعی.",
      "categories": ["software"]
    },
    {
      "word": "Digital Transformation",
      "pronunciation": "ترانسفورمیشن دیجیتال",
      "meaning": "تحول دیجیتال",
      "description": "فرآیند استفاده از تکنولوژی‌های دیجیتال برای تغییر کسب‌وکارها و مدل‌های عملیاتی.",
      "categories": ["software"]
    },
    {
      "word": "Content Marketing",
      "pronunciation": "بازاریابی محتوا",
      "meaning": "بازاریابی محتوا",
      "description": "استفاده از محتوا برای جذب و نگه‌داشتن مشتریان.",
      "categories": ["software"]
    },
    {
      "word": "Niche Market",
      "pronunciation": "نیچ مارکت",
      "meaning": "بازار نیچ",
      "description": "بخش خاصی از بازار که نیاز خاصی دارد و بر روی آن تمرکز می‌شود.",
      "categories": ["software"]
    },
    {
      "word": "Customer Segmentation",
      "pronunciation": "تقسیم‌بندی مشتریان",
      "meaning": "تقسیم‌بندی مشتریان",
      "description": "تقسیم‌بندی بازار به گروه‌های مختلف بر اساس ویژگی‌ها و نیازهای مشابه.",
      "categories": ["software"]
    },
    {
      "word": "Market Fit",
      "pronunciation": "فیت بازار",
      "meaning": "تطابق محصول با بازار",
      "description": "تطابق محصول با نیازهای بازار هدف.",
      "categories": ["software"]
    },
    {
      "word": "Launch Plan",
      "pronunciation": "لانچ پلن",
      "meaning": "طرح راه‌اندازی",
      "description": "استراتژی و برنامه‌ای برای عرضه محصول به بازار.",
      "categories": ["software"]
    },
    {
      "word": "Risk Mitigation",
      "pronunciation": "کاهش ریسک",
      "meaning": "کاهش ریسک",
      "description": "اقدامات برای کاهش یا مدیریت ریسک‌ها در پروژه‌ها.",
      "categories": ["software"]
    },
    {
      "word": "Customer Support",
      "pronunciation": "پشتیبانی مشتری",
      "meaning": "پشتیبانی مشتری",
      "description": "خدماتی که به مشتریان برای حل مشکلات و پشتیبانی از محصول ارائه می‌شود.",
      "categories": ["software"]
    },
    {
      "word": "ROI (Return on Investment)",
      "pronunciation": "آر.او.آی (بازده سرمایه‌گذاری)",
      "meaning": "بازده سرمایه‌گذاری",
      "description": "بازده سرمایه‌گذاری، یعنی سود یا زیان حاصل از سرمایه‌گذاری در یک پروژه.",
      "categories": ["software"]
    },
    {
      "word": "B2B (Business to Business)",
      "pronunciation": "بی۲بی",
      "meaning": "کسب‌وکار به کسب‌وکار",
      "description": "کسب‌وکاری که محصولات یا خدمات خود را به سایر کسب‌وکارها می‌فروشد.",
      "categories": ["software"]
    },
    {
      "word": "B2C (Business to Consumer)",
      "pronunciation": "بی۲سی",
      "meaning": "کسب‌وکار به مصرف‌کننده",
      "description": "کسب‌وکاری که محصولات یا خدمات خود را به مصرف‌کنندگان نهایی می‌فروشد.",
      "categories": ["software"]
    },
    {
      "word": "Forecasting",
      "pronunciation": "پیش‌بینی",
      "meaning": "پیش‌بینی",
      "description": "پیش‌بینی روندها و نتایج آتی بر اساس داده‌های موجود.",
      "categories": ["software"]
    },
    {
      "word": "Lean UX",
      "pronunciation": "لین یو.ایکس",
      "meaning": "تجربه کاربری لین",
      "description": "رویکردی در طراحی تجربه کاربری که بر بازخورد سریع و حداقل طراحی اولیه تأکید دارد.",
      "categories": ["software"]
    },
    {
      "word": "Agile Product Development",
      "pronunciation": "توسعه محصول چابک",
      "meaning": "توسعه محصول چابک",
      "description": "فرآیند توسعه محصول در قالب اسپرینت‌های کوتاه و بازخوردهای مستمر از کاربران.",
      "categories": ["software"]
    },
    {
      "word": "Customer Retention",
      "pronunciation": "حفظ مشتری",
      "meaning": "حفظ مشتری",
      "description": "حفظ مشتریان فعلی از طریق بهبود تجربه کاربری و تعامل مداوم.",
      "categories": ["software"]
    },
    {
      "word": "Innovation",
      "pronunciation": "نوآوری",
      "meaning": "نوآوری",
      "description": "فرآیند ایجاد و معرفی ایده‌های جدید و نوآورانه در محصولات و خدمات.",
      "categories": ["software"]
    },
    {
      "word": "Ecosystem",
      "pronunciation": "اکوسیستم",
      "meaning": "زیست‌بوم",
      "description": "مجموعه‌ای از محصولات و خدمات که به‌طور متقابل از یکدیگر پشتیبانی می‌کنند و با هم کار می‌کنند.",
      "categories": ["software"]
    },
    {
      "word": "Sustainability",
      "pronunciation": "پایداری",
      "meaning": "پایداری",
      "description": "ایجاد محصولات و خدماتی که به‌طور مسئولانه و پایدار ساخته شوند و تأثیرات زیست‌محیطی و اجتماعی را کاهش دهند.",
      "categories": ["software"]
    },
    {
      "word": "Unit Testing",
      "pronunciation": "تست واحد",
      "meaning": "تست واحد",
      "description": "تست بخش‌های کوچک نرم‌افزار",
      "categories": ["software"]
    },
    {
      "word": "End-to-End Testing (E2E Testing)",
      "pronunciation": "تست از ابتدا تا انتها (E2E)",
      "meaning": "تست از ابتدا تا انتها",
      "description": "کل فرآیند نرم افزار",
      "categories": ["software"]
    },
    {
      "word": "Regression Testing",
      "pronunciation": "تست رگرسیون",
      "meaning": "تست رگرسیون",
      "description": "تست برای بررسی تأثیر تغییرات جدید روی عملکرد قبلی",
      "categories": ["software"]
    },
    {
      "word": "Uptime",
      "pronunciation": "آپ‌تایم",
      "meaning": "زمان در دسترس بودن",
      "description": "میزان در دسترس بودن یک سیستم",
      "categories": ["software"]
    },
    {
      "word": "Downtime",
      "pronunciation": "داون‌تایم",
      "meaning": "زمان غیرقابل دسترسی",
      "description": "زمانی که سیستم در دسترس نیست",
      "categories": ["software"]
    },
    {
      "word": "Scalability",
      "pronunciation": "مقیاس‌پذیری",
      "meaning": "مقیاس‌پذیری سیستم",
      "description": "قابلیت مقیاس‌پذیری سیستم",
      "categories": ["software"]
    },
    {
      "word": "Customer Lifetime Value (CLV)",
      "pronunciation": "ارزش طول عمر مشتری",
      "meaning": "ارزش طول عمر مشتری",
      "description": "ارزش طول عمر مشتری",
      "categories": ["software"]
    },
    {
      "word": "NPS (Net Promoter Score)",
      "pronunciation": "ان‌پی‌اس (شاخص وفاداری مشتری)",
      "meaning": "شاخص وفاداری مشتری",
      "description": "شاخص وفاداری مشتری",
      "categories": ["software"]
    },
    {
      "word": "Usability Testing",
      "pronunciation": "تست کاربردپذیری",
      "meaning": "تست کاربردپذیری",
      "description": "تست کاربردپذیری محصول",
      "categories": ["software"]
    },
    {
      "word": "Wireframe",
      "pronunciation": "وایر فریم",
      "meaning": "وایر فریم",
      "description": "طرح اولیه از رابط کاربری",
      "categories": ["software"]
    },
    {
      "word": "Mockup",
      "pronunciation": "ماک‌آپ",
      "meaning": "ماک‌آپ",
      "description": "نسخه گرافیکی از طراحی محصول",
      "categories": ["software"]
    },
    {
      "word": "Persona",
      "pronunciation": "پرسانا",
      "meaning": "شخصیت فرضی",
      "description": "شخصیت فرضی از کاربران هدف",
      "categories": ["software"]
    },
    {
      "word": "Customer Journey Map",
      "pronunciation": "نقشه مسیر مشتری",
      "meaning": "نقشه مسیر کاربر",
      "description": "نقشه مسیر کاربر",
      "categories": ["software"]
    },
      {
        "word": "Conversion Rate",
        "pronunciation": "کانوِرژن ریت",
        "meaning": "نرخ تبدیل",
        "description": "نرخ تبدیل کاربران به مشتری",
        "categories": ["software"]
      },
      {
        "word": "Heatmap",
        "pronunciation": "هیت‌مپ",
        "meaning": "نقشه گرمایی",
        "description": "نقشه‌ای که نشان می‌دهد کاربران بیشتر کجا کلیک می‌کنند",
        "categories": ["software"]
      },
      {
        "word": "Onboarding",
        "pronunciation": "آنبوردینگ",
        "meaning": "آموزش اولیه",
        "description": "فرآیند راهنمایی کاربران جدید",
        "categories": ["software"]
      },
      {
        "word": "Changelog",
        "pronunciation": "چنج‌لاگ",
        "meaning": "فهرست تغییرات",
        "description": "لیست تغییرات هر نسخه از نرم‌افزار",
        "categories": ["software"]
      },
      {
        "word": "Release Notes",
        "pronunciation": "ریلیز نوتس",
        "meaning": "یادداشت‌های نسخه",
        "description": "توضیحات منتشر شده درباره به‌روزرسانی‌ها",
        "categories": ["software"]
      },
      {
        "word": "Dark Mode",
        "pronunciation": "دارک مود",
        "meaning": "حالت تاریک",
        "description": "تم تاریک در UI",
        "categories": ["software"]
      },
      {
        "word": "Bug Bounty",
        "pronunciation": "باگ باونتی",
        "meaning": "جایزه باگ",
        "description": "جایزه برای یافتن باگ‌ها",
        "categories": ["software"]
      },
      {
        "word": "Rollback",
        "pronunciation": "رول‌بک",
        "meaning": "بازگشت به نسخه قبلی",
        "description": "بازگشت به نسخه قبلی نرم‌افزار",
        "categories": ["software"]
      },
      {
        "word": "Zero Downtime Deployment",
        "pronunciation": "زیرو داون‌تایم دپلویمنت",
        "meaning": "استقرار بدون قطعی سرویس",
        "description": "استقرار بدون قطعی سرویس",
        "categories": ["software"]
      },
      {
        "word": "DevSecOps",
        "pronunciation": "دِو‌سِک‌اُپس",
        "meaning": "توسعه، امنیت و عملیات",
        "description": "ترکیب توسعه، امنیت و عملیات",
        "categories": ["software"]
      },
      {
        "word": "Infrastructure as Code (IaC)",
        "pronunciation": "اینفراستراکچر از کد",
        "meaning": "زیرساخت به‌عنوان کد",
        "description": "مدیریت زیرساخت به‌صورت کد",
        "categories": ["software"]
      },
      {
        "word": "Edge Computing",
        "pronunciation": "اج کامپیوتینگ",
        "meaning": "محاسبات لبه‌ای",
        "description": "پردازش داده در نزدیک‌ترین نقطه به منبع تولید داده",
        "categories": ["software"]
      },
      {
        "word": "Serverless Computing",
        "pronunciation": "سرورلس کامپیوتینگ",
        "meaning": "محاسبات بدون سرور",
        "description": "اجرای کد بدون مدیریت مستقیم سرورها",
        "categories": ["software"]
      },
      {
        "word": "API Gateway",
        "pronunciation": "ای‌پی‌آی گِیت‌وی",
        "meaning": "واسط API",
        "description": "واسط بین کاربران و میکروسرویس‌ها",
        "categories": ["software"]
      },
      {
        "word": "Event-Driven Architecture",
        "pronunciation": "آرکیتکچر ایونت درایون",
        "meaning": "معماری مبتنی بر رخداد",
        "description": "معماری مبتنی بر رخدادها",
        "categories": ["software"]
      },
      {
        "word": "Blue-Green Deployment",
        "pronunciation": "بلو‌گرین دپلویمنت",
        "meaning": "استقرار بلوگرین",
        "description": "استقرار برای کاهش ریسک انتشار",
        "categories": ["software"]
      },
      {
        "word": "Canary Deployment",
        "pronunciation": "کَنری دپلویمنت",
        "meaning": "انتشار کَنری",
        "description": "انتشار تدریجی یک نسخه جدید",
        "categories": ["software"]
      },
      {
        "word": "Data Lake",
        "pronunciation": "دیتا لیک",
        "meaning": "دریاچه داده",
        "description": "مخزن داده خام و ساختارنایافته",
        "categories": ["software"]
      },
      {
        "word": "Data Warehouse",
        "pronunciation": "دیتا وِرهاوس",
        "meaning": "انبار داده",
        "description": "پایگاه داده برای گزارش‌گیری و تحلیل",
        "categories": ["software"]
      },
      {
        "word": "ETL (Extract, Transform, Load)",
        "pronunciation": "ای‌تی‌ال",
        "meaning": "استخراج، تبدیل، بارگذاری",
        "description": "فرآیند استخراج، تغییر و بارگذاری داده",
        "categories": ["software"]
      },
      {
        "word": "NoSQL Database",
        "pronunciation": "نو‌اس‌کیو‌ال دیتابیس",
        "meaning": "دیتابیس غیررابطه‌ای",
        "description": "دیتابیس‌های غیررابطه‌ای مانند MongoDB",
        "categories": ["software"]
      },
      {
        "word": "ACID Properties",
        "pronunciation": "اسید پراپرتیز",
        "meaning": "ویژگی‌های اسید",
        "description": "ویژگی‌های پایگاه داده (Atomicity, Consistency, Isolation, Durability)",
        "categories": ["software"]
      },
      {
        "word": "CAP Theorem",
        "pronunciation": "کپ تئورم",
        "meaning": "سه‌گانه CAP",
        "description": "سه‌گانه سازگاری، دسترس‌پذیری و تحمل پارتیشن",
        "categories": ["software"]
      },
      {
        "word": "Sharding",
        "pronunciation": "شاردینگ",
        "meaning": "تقسیم‌بندی داده‌ها",
        "description": "تقسیم‌بندی پایگاه داده برای مقیاس‌پذیری",
        "categories": ["software"]
      },
      {
        "word": "CDN (Content Delivery Network)",
        "pronunciation": "سی‌دی‌ان",
        "meaning": "شبکه توزیع محتوا",
        "description": "شبکه توزیع محتوا برای افزایش سرعت بارگذاری",
        "categories": ["software"]
      },
      {
        "word": "OAuth",
        "pronunciation": "اوآث",
        "meaning": "احراز هویت اوآث",
        "description": "پروتکل احراز هویت برای دسترسی امن به APIها",
        "categories": ["software"]
      },
      {
        "word": "JWT (JSON Web Token)",
        "pronunciation": "جی‌دبلیو‌تی",
        "meaning": "توکن وب جی‌سان",
        "description": "استانداردی برای انتقال داده احراز هویت",
        "categories": ["software"]
      },
      {
        "word": "SSO (Single Sign-on)",
        "pronunciation": "اس‌اس‌او",
        "meaning": "ورود یکپارچه",
        "description": "یکپارچه به چندین سیستم",
        "categories": ["software"]
      },
      {
        "word": "RBAC (Role-Based Access Control)",
        "pronunciation": "آربی‌ای‌سی",
        "meaning": "کنترل دسترسی مبتنی بر نقش",
        "description": "دسترسی بر اساس نقش‌ها",
        "categories": ["software"]
      },
      {
        "word": "Zero Trust Security",
        "pronunciation": "زیرو تراست سکیوریتی",
        "meaning": "امنیت بدون اعتماد",
        "description": "مدل امنیتی بدون اعتماد پیش‌فرض",
        "categories": ["software"]
      },
      {
        "word": "SOC 2 Compliance",
        "pronunciation": "اس‌او‌سی ۲ کمپلاینس",
        "meaning": "رعایت استاندارد SOC 2",
        "description": "استاندارد امنیت اطلاعات برای شرکت‌های نرم‌افزاری",
        "categories": ["software"]
      },
      {
        "word": "Incident Response",
        "pronunciation": "اینسی‌دنت ریسپانس",
        "meaning": "واکنش به حادثه",
        "description": "برنامه واکنش به رخدادهای امنیتی",
        "categories": ["software"]
      },
      {
        "word": "Phishing Attack",
        "pronunciation": "فیشینگ اتک",
        "meaning": "حمله فیشینگ",
        "description": "حملات مهندسی اجتماعی برای سرقت اطلاعات",
        "categories": ["software"]
      },
      {
        "word": "DDOS Attack",
        "pronunciation": "دی‌دی‌اوس اتک",
        "meaning": "حمله دی‌دی‌اوس",
        "description": "حمله انکار سرویس توزیع‌شده",
        "categories": ["software"]
      },
      {
        "word": "Firewall",
        "pronunciation": "فایروال",
        "meaning": "دیوار آتش",
        "description": "سیستم دفاعی در برابر حملات شبکه‌ای",
        "categories": ["software"]
      },
      {
        "word": "SSL/TLS Encryption",
        "pronunciation": "اس‌اس‌ال/تی‌ال‌اس انکریپشن",
        "meaning": "رمزنگاری اس‌اس‌ال/تی‌ال‌اس",
        "description": "رمزنگاری برای امنیت ارتباطات اینترنتی",
        "categories": ["software"]
      },
      {
        "word": "Machine Learning",
        "pronunciation": "ماشین لرنینگ",
        "meaning": "یادگیری ماشین",
        "description": "روش‌هایی برای آموزش مدل‌ها از داده‌ها",
        "categories": ["software"]
      },
      {
        "word": "Deep Learning",
        "pronunciation": "دیپ لرنینگ",
        "meaning": "یادگیری عمیق",
        "description": "زیرشاخه‌ای از یادگیری ماشین با مدل‌های پیچیده",
        "categories": ["software"]
      },
      {
        "word": "Artificial Intelligence",
        "pronunciation": "آر‌تیفیشیال اینتلیجنس",
        "meaning": "هوش مصنوعی",
        "description": "رشته‌ای از علوم کامپیوتر برای ساخت سیستم‌های هوشمند",
        "categories": ["software"]
      },
      {
        "word": "Natural Language Processing (NLP)",
        "pronunciation": "ان‌ال‌پی",
        "meaning": "پردازش زبان طبیعی",
        "description": "رشته‌ای از هوش مصنوعی برای درک زبان انسان",
        "categories": ["software"]
      },
        {
          "word": "Progressive Web App (PWA)",
          "pronunciation": "پروگرسیو وب اپ",
          "meaning": "اپلیکیشن وب پیشرفته",
          "description": "اپلیکیشن وب با تجربه کاربری مشابه اپلیکیشن‌های موبایل",
          "categories": ["software"]
        },
        {
          "word": "Hybrid App",
          "pronunciation": "هایبرید اپ",
          "meaning": "اپلیکیشن‌های ترکیبی",
          "description": "اپلیکیشن‌های ترکیبی که با یک کد روی پلتفرم‌های مختلف اجرا می‌شوند",
          "categories": ["software"]
        },
        {
          "word": "Native App",
          "pronunciation": "نیتیو اپ",
          "meaning": "اپلیکیشن‌های بومی",
          "description": "اپلیکیشن‌های توسعه‌یافته برای یک سیستم‌عامل خاص",
          "categories": ["software"]
        },
        {
          "word": "Responsive Design",
          "pronunciation": "ریسپانسیو دیزاین",
          "meaning": "طراحی واکنش‌گرا",
          "description": "طراحی واکنش‌گرا برای نمایش بهینه در دستگاه‌های مختلف",
          "categories": ["software"]
        },
        {
          "word": "Lazy Loading",
          "pronunciation": "لیزی لودینگ",
          "meaning": "بارگذاری تدریجی",
          "description": "بارگذاری تدریجی محتوا برای بهبود سرعت صفحه",
          "categories": ["software"]
        },
        {
          "word": "Preloading",
          "pronunciation": "پری‌لودینگ",
          "meaning": "بارگذاری پیش‌بار",
          "description": "بارگذاری پیش از درخواست کاربر",
          "categories": ["software"]
        },
        {
          "word": "Infinite Scroll",
          "pronunciation": "اینفینیت اسکرول",
          "meaning": "اسکرول بی‌نهایت",
          "description": "بارگذاری بی‌نهایت محتوا هنگام اسکرول",
          "categories": ["software"]
        },
        {
          "word": "WebAssembly (Wasm)",
          "pronunciation": "وب اسمبلی",
          "meaning": "وب اسمبلی",
          "description": "اجرای کدهای سطح پایین در مرورگر",
          "categories": ["software"]
        },
        {
          "word": "Headless CMS",
          "pronunciation": "هدلس سی‌ام‌اس",
          "meaning": "سیستم مدیریت محتوا بدون واسط",
          "description": "سیستم مدیریت محتوا بدون واسط کاربری",
          "categories": ["software"]
        },
        {
          "word": "Content Strategy",
          "pronunciation": "کانتنت استراتژی",
          "meaning": "استراتژی محتوا",
          "description": "استراتژی تولید و مدیریت محتوا",
          "categories": ["software"]
        },
        {
          "word": "SEO (Search Engine Optimization)",
          "pronunciation": "اس‌ای‌او",
          "meaning": "بهینه‌سازی موتور جستجو",
          "description": "بهینه‌سازی سایت برای موتورهای جستجو",
          "categories": ["software"]
        },
        {
          "word": "Core Web Vitals",
          "pronunciation": "کُور وب ویتالز",
          "meaning": "شاخص‌های اصلی وب",
          "description": "معیارهای کلیدی گوگل برای سنجش عملکرد سایت",
          "categories": ["software"]
        },
        {
          "word": "Bounce Rate",
          "pronunciation": "بونس ریت",
          "meaning": "نرخ پرش",
          "description": "نرخ خروج کاربران بدون تعامل",
          "categories": ["software"]
        },
        {
          "word": "Funnel Analysis",
          "pronunciation": "فانل آنالیسس",
          "meaning": "تحلیل قیف فروش",
          "description": "تحلیل مسیر تبدیل کاربران",
          "categories": ["software"]
        },
        {
          "word": "Retention Rate",
          "pronunciation": "رتنشن ریت",
          "meaning": "نرخ نگهداری",
          "description": "درصد کاربران حفظ‌شده در طول زمان",
          "categories": ["software"]
        },
        {
          "word": "Gamification",
          "pronunciation": "گیمیفیکیشن",
          "meaning": "بازی‌سازی",
          "description": "استفاده از عناصر بازی در محصول",
          "categories": ["software"]
        },
        {
          "word": "Growth Hacking",
          "pronunciation": "گروت هکینگ",
          "meaning": "هک رشد",
          "description": "تکنیک‌های سریع رشد کسب‌وکار",
          "categories": ["software"]
        },
        {
          "word": "Viral Coefficient",
          "pronunciation": "وایرال کوافیشن",
          "meaning": "ضریب ویروسی",
          "description": "شاخص رشد ویروسی محصول",
          "categories": ["software"]
        },
        {
          "word": "Product-Led Growth (PLG)",
          "pronunciation": "پروداکت لِد گروت",
          "meaning": "رشد محور محصول",
          "description": "رشد با تمرکز بر خود محصول",
          "categories": ["software"]
        },
        {
          "word": "AI-Powered Features",
          "pronunciation": "ای‌آی پاورد فیچرز",
          "meaning": "ویژگی‌های مبتنی بر هوش مصنوعی",
          "description": "قابلیت‌های مبتنی بر هوش مصنوعی",
          "categories": ["software"]
        },
        {
          "word": "Recommendation Engine",
          "pronunciation": "رکامنشن انجین",
          "meaning": "موتور پیشنهاد",
          "description": "موتور پیشنهاددهنده محتوا",
          "categories": ["software"]
        },
        {
          "word": "Federated Learning",
          "pronunciation": "فدرِیْتد لرنینگ",
          "meaning": "یادگیری فدرال",
          "description": "یادگیری ماشین بدون انتقال داده خام",
          "categories": ["software"]
        },
        {
          "word": "AIOps",
          "pronunciation": "آی‌آی‌اپس",
          "meaning": "عملیات هوش مصنوعی",
          "description": "استفاده از هوش مصنوعی برای بهینه‌سازی عملیات IT",
          "categories": ["software"]
        },
        {
          "word": "Synthetic Monitoring",
          "pronunciation": "سینتِتیک مانیتورینگ",
          "meaning": "نظارت مصنوعی",
          "description": "شبیه‌سازی تعامل کاربران برای بررسی عملکرد سیستم",
          "categories": ["software"]
        },
        {
          "word": "Feature Creep",
          "pronunciation": "فیتچر کریپ",
          "meaning": "افزایش ویژگی‌ها",
          "description": "افزایش غیرضروری ویژگی‌ها در محصول",
          "categories": ["software"]
        },
        {
          "word": "gitlab",
          "pronunciation": "گیت‌لب",
          "meaning": "گیت‌لب",
          "description": "DevOps برای مدیریت کد، CI/CD و خودکارسازی فرآیندهای توسعه",
          "categories": ["software"]
        },
        {
          "word": "github",
          "pronunciation": "گیت‌هاب",
          "meaning": "گیت‌هاب",
          "description": "مدیریت کد و همکاری مبتنی بر Git برای توسعه‌دهندگان.",
          "categories": ["software"]
        },
        {
          "word": "jira",
          "pronunciation": "جیرا",
          "meaning": "جیرا",
          "description": "مدیریت پروژه و ردیابی باگ، محبوب در تیم‌های اجایل",
          "categories": ["software"]
        },
        {
          "word": "figma",
          "pronunciation": "فیگما",
          "meaning": "فیگما",
          "description": "طراحی UI/UX تحت وب برای همکاری تیمی در طراحی رابط کاربری.",
          "categories": ["software"]
        },
        {
          "word": "portainer",
          "pronunciation": "پورتاینر",
          "meaning": "پورتاینر",
          "description": "مدیریتی برای مدیریت آسان کانتینرهای Docker و Kubernetes.",
          "categories": ["software"]
        },
        {
          "word": "mirror",
          "pronunciation": "میرور",
          "meaning": "آینه",
          "description": "کپی همگام‌سازی‌شده از یک مخزن برای پشتیبان‌گیری یا مهاجرت.",
          "categories": ["software"]
        },
        {
          "word": "registry",
          "pronunciation": "رجیستری",
          "meaning": "رجیستری",
          "description": "برای ذخیره، مدیریت و توزیع ایمیج‌های Docker.",
          "categories": ["software"]
        },
        {
          "word": "Docker",
          "pronunciation": "داکر",
          "meaning": "داکر",
          "description": "برای ساخت، ارسال و اجرای کانتینرها",
          "categories": ["software"]
        },
        {
          "word": "Kubernetes",
          "pronunciation": "کوبِرنِتِس",
          "meaning": "کوبِرنِتِس",
          "description": "ارکستراسیون کانتینرها",
          "categories": ["software"]
        },
        {
          "word": "CI/CD (Continuous Integration/Continuous Deployment)",
          "pronunciation": "سی‌آی/سی‌دی",
          "meaning": "یکپارچه‌سازی/استقرار مداوم",
          "description": "یکپارچه‌سازی و استقرار مداوم",
          "categories": ["software"]
        },
        {
          "word": "Microservices",
          "pronunciation": "میکروسرویس‌ها",
          "meaning": "میکروسرویس‌ها",
          "description": "سرویس‌های کوچک و مستقل",
          "categories": ["software"]
        },
        {
          "word": "Monolithic Architecture",
          "pronunciation": "مونو لیتیک آرکیتکچر",
          "meaning": "معماری یکپارچه",
          "description": "یکپارچه نرم‌افزار",
          "categories": ["software"]
        },
        {
          "word": "Scrum Master",
          "pronunciation": "اسکرام مستر",
          "meaning": "مدیر اسکرام",
          "description": "که مسئول اجرای اسکرام در تیمه",
          "categories": ["software"]
        },
        {
          "word": "Sprint Planning",
          "pronunciation": "اسپرینت پلنینگ",
          "meaning": "برنامه‌ریزی اسپرینت",
          "description": "برنامه‌ریزی برای اسپرینت بعدی",
          "categories": ["software"]
        },
        {
          "word": "Sprint Retrospective",
          "pronunciation": "اسپرینت رتروسپکتیو",
          "meaning": "بازنگری اسپرینت",
          "description": "بررسی عملکرد تیم در اسپرینت قبلی",
          "categories": ["software"]
        },
        {
          "word": "OKR (Objectives and Key Results)",
          "pronunciation": "اوکی‌آر",
          "meaning": "اهداف و نتایج کلیدی",
          "description": "اهداف و نتایج کلیدی در مدیریت استراتژیک",
          "categories": ["software"]
        },
          {
            "word": "Kanban",
            "pronunciation": "کانبان",
            "meaning": "کانبان",
            "description": "مدیریت وظایف با استفاده از بُردها",
            "categories": ["software"]
          },
          {
            "word": "Burn-down Chart",
            "pronunciation": "برن‌داون چارت",
            "meaning": "نمودار کاهش کارهای باقی‌مانده",
            "description": "کاهش کارهای باقی‌مانده در اسپرینت",
            "categories": ["software"]
          },
          {
            "word": "Version Control",
            "pronunciation": "ورژن کنترل",
            "meaning": "کنترل نسخه",
            "description": "نسخه‌های نرم‌افزار",
            "categories": ["software"]
          },
          {
            "word": "GitOps",
            "pronunciation": "گیت‌آپس",
            "meaning": "گیت‌آپس",
            "description": "از Git برای مدیریت زیرساخت",
            "categories": ["software"]
          },
          {
            "word": "Feature Flag",
            "pronunciation": "فیچر فلگ",
            "meaning": "فلگ ویژگی",
            "description": "غیرفعال کردن ویژگی‌های نرم‌افزار بدون نیاز به انتشار نسخه جدید",
            "categories": ["software"]
          },
          {
            "word": "GraphQL",
            "pronunciation": "گراف‌کیوال",
            "meaning": "گراف‌کیوال",
            "description": "کوئری برای APIها",
            "categories": ["software"]
          },
          {
            "word": "RESTful API",
            "pronunciation": "رستفول ای‌پی‌آی",
            "meaning": "ای‌پی‌آی ریست‌محور",
            "description": "APIهای تحت وب",
            "categories": ["software"]
          },
          {
            "word": "WebSocket",
            "pronunciation": "وب‌ساکت",
            "meaning": "وب‌ساکت",
            "description": "ارتباط دوطرفه در وب",
            "categories": ["software"]
          },
          {
            "word": "Load Balancer",
            "pronunciation": "لود بالانسر",
            "meaning": "بالانس کننده بار",
            "description": "ترافیک بین سرورها",
            "categories": ["software"]
          },
          {
            "word": "Rate Limiting",
            "pronunciation": "ریت لیمیتینگ",
            "meaning": "محدودیت نرخ",
            "description": "محدود کردن تعداد درخواست‌های API",
            "categories": ["software"]
          },
          {
            "word": "Tech Debt (Technical Debt)",
            "pronunciation": "تک دِبِت",
            "meaning": "بدهی فنی",
            "description": "بدهی فنی در کد",
            "categories": ["software"]
          },
          {
            "word": "Refactoring",
            "pronunciation": "ریفکتورینگ",
            "meaning": "ریفکتورینگ",
            "description": "کد برای بهبود خوانایی و کارایی",
            "categories": ["software"]
          },
          {
            "word": "Code Review",
            "pronunciation": "کد ریویو",
            "meaning": "بازبینی کد",
            "description": "کد توسط اعضای تیم",
            "categories": ["software"]
          },
          {
            "word": "BOM (Bill of Materials)",
            "pronunciation": "بی‌او‌ام",
            "meaning": "صورت‌حساب مواد",
            "description": "لیست کاملی از قطعات و مواد مورد نیاز برای تولید یک محصول.",
            "categories": ["hardware"]
          },
          {
            "word": "PCB (Printed Circuit Board)",
            "pronunciation": "پی‌سی‌بی",
            "meaning": "برد مدار چاپی",
            "description": "صفحه‌ای از مواد عایق که برای اتصال اجزای الکترونیکی با استفاده از مدارهای چاپی طراحی شده است.",
            "categories": ["hardware"]
          },
          {
            "word": "Microcontroller",
            "pronunciation": "میکروکنترلر",
            "meaning": "میکروکنترلر",
            "description": "تراشه‌ای که برای انجام کارهای خاص در سیستم‌های الکترونیکی طراحی شده و معمولاً به‌عنوان مغز سیستم عمل می‌کند.",
            "categories": ["hardware"]
          },
          {
            "word": "Soldering",
            "pronunciation": "سولدرینگ",
            "meaning": "لحیم‌کاری",
            "description": "فرآیند اتصال قطعات الکترونیکی به یکدیگر با استفاده از لحیم.",
            "categories": ["hardware"]
          },
          {
            "word": "GPIO (General Purpose Input/Output)",
            "pronunciation": "جی‌پی‌آیو",
            "meaning": "ورودی/خروجی عمومی",
            "description": "پین‌هایی در میکروکنترلرها که برای دریافت ورودی یا ارسال خروجی به‌طور عمومی قابل استفاده هستند.",
            "categories": ["hardware"]
          },
          {
            "word": "Firmware",
            "pronunciation": "فیرم‌ویر",
            "meaning": "فیرم‌ویر",
            "description": "نرم‌افزار پایه‌ای که در سخت‌افزار ذخیره شده و عملکردهای اولیه آن را کنترل می‌کند.",
            "categories": ["hardware"]
          },
          {
            "word": "Resistor",
            "pronunciation": "رزسیتور",
            "meaning": "مقاومت",
            "description": "قطعه الکترونیکی که جریان الکتریکی را محدود می‌کند و در مدارهای الکترونیکی استفاده می‌شود.",
            "categories": ["hardware"]
          },
          {
            "word": "Capacitor",
            "pronunciation": "کاپاسیتور",
            "meaning": "خازن",
            "description": "قطعه‌ای که انرژی الکتریکی را ذخیره کرده و در مدارهای الکترونیکی برای کنترل سیگنال‌ها و فیلتر کردن نویز استفاده می‌شود.",
            "categories": ["hardware"]
          },
          {
            "word": "Inductor",
            "pronunciation": "اینداکتور",
            "meaning": "القاگر",
            "description": "قطعه‌ای که جریان الکتریکی را به‌صورت مغناطیسی ذخیره می‌کند و برای فیلتر کردن سیگنال‌ها و تولید میدان‌های مغناطیسی استفاده می‌شود.",
            "categories": ["hardware"]
          },
          {
            "word": "Sensor",
            "pronunciation": "سنسور",
            "meaning": "سنسور",
            "description": "دستگاهی که برای شناسایی و اندازه‌گیری یک ویژگی خاص (مثل دما، فشار، یا حرکت) طراحی شده است.",
            "categories": ["hardware"]
          },
          {
            "word": "Transistor",
            "pronunciation": "ترانزیستور",
            "meaning": "ترانزیستور",
            "description": "قطعه‌ای الکترونیکی که به‌عنوان سوئیچ یا تقویت‌کننده در مدارهای الکترونیکی استفاده می‌شود.",
            "categories": ["hardware"]
          },
          {
            "word": "Oscilloscope",
            "pronunciation": "اوسیلوسکوپ",
            "meaning": "اسیلوسکوپ",
            "description": "دستگاهی برای مشاهده و تحلیل سیگنال‌های الکتریکی در یک مدار به‌صورت گرافیکی.",
            "categories": ["hardware"]
          },
          {
            "word": "Power Supply",
            "pronunciation": "پاور ساپلای",
            "meaning": "منبع تغذیه",
            "description": "منبع تغذیه که انرژی الکتریکی لازم برای راه‌اندازی سایر اجزای سخت‌افزاری را فراهم می‌کند.",
            "categories": ["hardware"]
          },
          {
            "word": "Heatsink",
            "pronunciation": "هیٹ‌سینک",
            "meaning": "هیت‌سینک",
            "description": "قطعه‌ای که برای جذب و پخش گرما از قطعات الکترونیکی (مثل پردازنده‌ها) طراحی شده است.",
            "categories": ["hardware"]
          },
            {
              "word": "Heatsink",
              "pronunciation": "هیت سینک",
              "meaning": "هیت سینک",
              "description": "قطعه‌ای که برای جذب و پخش گرما از قطعات الکترونیکی (مثل پردازنده‌ها) طراحی شده است.",
              "categories": ["hardware"]
            },
            {
              "word": "Bus",
              "pronunciation": "باس",
              "meaning": "باس",
              "description": "سیستم ارتباطی برای انتقال داده‌ها بین بخش‌های مختلف یک کامپیوتر یا سیستم الکترونیکی.",
              "categories": ["hardware"]
            },
            {
              "word": "Connector",
              "pronunciation": "کانکتور",
              "meaning": "کانکتور",
              "description": "قطعه‌ای که برای اتصال دو یا چند مدار یا دستگاه به‌صورت موقت یا دائم استفاده می‌شود.",
              "categories": ["hardware"]
            },
            {
              "word": "Socket",
              "pronunciation": "ساکت",
              "meaning": "ساکت",
              "description": "محلی که قطعات سخت‌افزاری مانند پردازنده‌ها یا تراشه‌ها در آن قرار می‌گیرند و به مدار متصل می‌شوند.",
              "categories": ["hardware"]
            },
            {
              "word": "Relay",
              "pronunciation": "ریلی",
              "meaning": "ریلی",
              "description": "سوئیچ الکترومکانیکی که به‌وسیله جریان الکتریکی کنترل می‌شود و می‌تواند مدارهای الکتریکی را باز یا بسته کند.",
              "categories": ["hardware"]
            },
            {
              "word": "Diode",
              "pronunciation": "دایود",
              "meaning": "دایود",
              "description": "قطعه‌ای الکترونیکی که جریان الکتریکی را تنها در یک جهت عبور می‌دهد و در کنترل جریان‌ها در مدارها استفاده می‌شود.",
              "categories": ["hardware"]
            },
            {
              "word": "Grounding",
              "pronunciation": "گراندینگ",
              "meaning": "گراندینگ",
              "description": "فرآیند اتصال دستگاه یا مدار به زمین برای جلوگیری از برق‌گرفتگی یا حفاظت از دستگاه‌ها در برابر آسیب‌های الکتریکی.",
              "categories": ["hardware"]
            },
            {
              "word": "Onboarding",
              "pronunciation": "آنبوردینگ",
              "meaning": "آنبوردینگ",
              "description": "فرآیند آشنا کردن کارمند جدید با شرکت، تیم و وظایف شغلی.",
              "categories": ["hr"]
            },
            {
              "word": "Offboarding",
              "pronunciation": "آفبوردینگ",
              "meaning": "آفبوردینگ",
              "description": "فرآیند خروج کارکنان از سازمان، شامل تحویل تجهیزات و جمع‌آوری بازخورد.",
              "categories": ["hr"]
            },
            {
              "word": "Employee Engagement",
              "pronunciation": "امپلوی اینگیجمنت",
              "meaning": "تعهد و مشارکت کارکنان",
              "description": "میزان تعهد، اشتیاق و رضایت کارکنان نسبت به کار و سازمان.",
              "categories": ["hr"]
            },
            {
              "word": "Job Description (JD)",
              "pronunciation": "جاب دسکریپشن",
              "meaning": "شرح شغل",
              "description": "توضیح وظایف، مسئولیت‌ها و الزامات یک شغل مشخص.",
              "categories": ["hr"]
            },
            {
              "word": "Performance Review",
              "pronunciation": "پرفورمنس ریویو",
              "meaning": "ارزیابی عملکرد",
              "description": "فرآیند ارزیابی عملکرد کارکنان در دوره‌های مشخص.",
              "categories": ["hr"]
            },
            {
              "word": "Succession Planning",
              "pronunciation": "ساکسشن پلنینگ",
              "meaning": "برنامه‌ریزی جانشینی",
              "description": "برنامه‌ریزی برای شناسایی و آماده‌سازی افراد برای نقش‌های کلیدی در آینده.",
              "categories": ["hr"]
            },
            {
              "word": "Talent Acquisition",
              "pronunciation": "تالنٹ اکوئیزیشن",
              "meaning": "جذب استعداد",
              "description": "فرآیند شناسایی، جذب و استخدام نیروهای مستعد.",
              "categories": ["hr"]
            },
            {
              "word": "Learning and Development (L&D)",
              "pronunciation": "لرنینگ اند دیولوپمنت",
              "meaning": "آموزش و توسعه",
              "description": "برنامه‌ها و فعالیت‌هایی که برای آموزش و توسعه مهارت‌های کارکنان طراحی می‌شوند.",
              "categories": ["hr"]
            },
            {
              "word": "Workforce Planning",
              "pronunciation": "ورک‌فورس پلنینگ",
              "meaning": "برنامه‌ریزی نیروی کار",
              "description": "فرآیند برنامه‌ریزی برای تأمین نیروی انسانی مورد نیاز شرکت.",
              "categories": ["hr"]
            },
            {
              "word": "Compensation and Benefits",
              "pronunciation": "کامپنسیشن اند بنفیٹس",
              "meaning": "مجموعه حقوق و مزایا",
              "description": "مجموعه‌ای از حقوق، پاداش‌ها و مزایایی که به کارکنان ارائه می‌شود.",
              "categories": ["hr"]
            },
            {
              "word": "Media Relations",
              "pronunciation": "مدیا ریلیشنز",
              "meaning": "رابطه با رسانه‌ها",
              "description": "مدیریت روابط سازمان با رسانه‌ها برای انتشار اخبار و اطلاعات.",
              "categories": ["pr"]
            },
            {
              "word": "Crisis Communication",
              "pronunciation": "کرایسس کمیونیکیشن",
              "meaning": "ارتباطات در بحران",
              "description": "برنامه‌ریزی و مدیریت ارتباطات در زمان بروز بحران یا مشکل بزرگ در سازمان.",
              "categories": ["pr"]
            },
            {
              "word": "Reputation Management",
              "pronunciation": "ریپوتیشن منیجمنت",
              "meaning": "مدیریت شهرت",
              "description": "فرآیند مدیریت و بهبود تصویر عمومی شرکت در جامعه.",
              "categories": ["pr"]
            },
            {
              "word": "Stakeholder Engagement",
              "pronunciation": "استیکهولدر اینگیجمنت",
              "meaning": "مشارکت ذینفعان",
              "description": "تعامل با افرادی که به‌طور مستقیم یا غیرمستقیم تحت تأثیر فعالیت‌های شرکت هستند (مثل مشتریان، کارکنان، سهامداران).",
              "categories": ["pr"]
            },
            {
              "word": "Press Release",
              "pronunciation": "پرس رلیز",
              "meaning": "بیانیه مطبوعاتی",
              "description": "بیانیه رسمی منتشرشده برای اطلاع‌رسانی درباره رویدادها یا اخبار شرکت.",
              "categories": ["pr"]
            },
            {
              "word": "Brand Advocacy",
              "pronunciation": "برند ادووکاسی",
              "meaning": "حمایت از برند",
              "description": "فعالیت کارکنان یا مشتریان در حمایت از برند و تبلیغ آن.",
              "categories": ["pr"]
            },
            {
              "word": "Public Affairs",
              "pronunciation": "پابلیک آفیرز",
              "meaning": "امور عمومی",
              "description": "مدیریت روابط شرکت با دولت، نهادهای عمومی و جامعه.",
              "categories": ["pr"]
            },
            {
              "word": "Social Listening",
              "pronunciation": "سوشیال لیسنینگ",
              "meaning": "گوش دادن اجتماعی",
              "description": "فرآیند رصد و تحلیل نظرات عمومی در رسانه‌های اجتماعی درباره برند یا شرکت.",
              "categories": ["pr"]
            },
            {
              "word": "Message Alignment",
              "pronunciation": "مسج آلایمنت",
              "meaning": "هماهنگی پیام‌ها",
              "description": "هماهنگ‌سازی پیام‌ها و محتوای شرکت با استراتژی کلی برند.",
              "categories": ["pr"]
            },
            {
              "word": "Thought Leadership",
              "pronunciation": "توت لیدرشپ",
              "meaning": "رهبری فکری",
              "description": "استراتژی برای جایگاه‌دهی به شرکت یا افراد کلیدی آن به‌عنوان متخصصان برتر در صنعت.",
              "categories": ["pr"]
            }
];

