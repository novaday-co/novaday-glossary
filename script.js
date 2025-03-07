document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results');
    const breadcrumb = document.getElementById('breadcrumb');
    const categoriesList = document.getElementById('categories-list');
    const alphabetEnContainer = document.getElementById('alphabet-en');
    const alphabetFaContainer = document.getElementById('alphabet-fa');
    const allWordsList = document.getElementById('all-words-list');
    const sidebar = document.getElementById('sidebar');
    let currentFilter = ''; // فیلتر فعلی


    const SUPABASE_URL = "https://ahitdzdeebfjhodmxwcs.supabase.co";  
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoaXRkemRlZWJmamhvZG14d2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMzE4MTUsImV4cCI6MjA1NjkwNzgxNX0.G0RbOjfYYewnQ9Tp4hj36_nq-dhq3Dr9gcy6wtT2vds";  
    window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


    async function fetchWords() {

        document.getElementById("results").innerHTML = "در حال بارگذاری ...";

        let { data, error } = await supabase.from('words').select('*');
        if (error) {
            document.getElementById("results").innerHTML = "خطا در دریافت داده‌ها!";
            console.error('Error fetching words:', error);
            return;
        }

        wordsData = data;
        
        // بارگذاری اولیه
        loadCategories();
        displayResults(data); // تابعی که کلمات را در صفحه نمایش می‌دهد
    }
    
    fetchWords(); // اجرای تابع هنگام بارگذاری صفحه


    // نمایش نتایج
    function displayResults(words, filter = '') {
        resultsContainer.innerHTML = '';
        breadcrumb.innerHTML = filter ? `🔎 نمایش نتایج برای: ${filter}` : '';
        breadcrumb.classList.toggle('hidden', !filter);
        

        words.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.classList.add('word-box');

            wordElement.innerHTML = `
                <h2 class="text-xl font-semibold">${word.word}</h2>
                <p class="text-sm text-gray-500 mb-3">${word.pronunciation}</p>
                <p><strong>معادل فارسی:</strong> ${word.meaning}</p>
                <p><strong>توضیحات:</strong> ${word.description}</p>

                <p><strong>دسته‌بندی‌ها:</strong> ${word.categories.join(', ')}</p>
                <a href="https://www.google.com/search?q=what+is+${word.word}" target="_blank" class="absolute left-3 top-3 text-blue-600 hover:text-blue-800 opacity-20">🔍</a>
            `;

            resultsContainer.appendChild(wordElement);
        });
    }

    // جستجو
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredWords = wordsData.filter(word =>
            (word.word.toLowerCase().includes(query) || 
            word.meaning.toLowerCase().includes(query) || 
            word.pronunciation.toLowerCase().includes(query))
        );

        displayResults(filteredWords, query ? `جستجوی "${query}"` : '');
        resetFilters();
    });

    // بارگذاری دسته‌بندی‌ها
    function loadCategories() {
        const categories = [...new Set(wordsData.flatMap(word => word.categories))];
        categories.forEach(category => {
            const li = document.createElement('li');
            li.textContent = category;
            li.classList.add('cursor-pointer', 'text-blue-600');
            li.addEventListener('click', () => {
                currentFilter = category;
                displayResults(wordsData.filter(word => word.categories.includes(category)), `دسته "${category}"`);
                updateSelectedFilter('categories', li);
            });
            categoriesList.appendChild(li);
        });
    }

    // انتخاب فیلتر
    function updateSelectedFilter(type, element) {
        const filters = document.querySelectorAll(`#${type}-list li`);
        filters.forEach(item => item.classList.remove('selected'));
        element.classList.add('selected');
    }

    // بارگذاری حروف الفبا انگلیسی
    function createAlphabetButtons(container, letters, filterField) {
        letters.forEach(letter => {
            const letterElement = document.createElement('span');
            letterElement.classList.add('letter');
            letterElement.textContent = letter;
            letterElement.addEventListener('click', () => {
           
            // ریست کردن همه حروف به حالت عادی
            document.querySelectorAll('.letter').forEach(item => item.classList.remove('selected'));

                currentFilter = letter;
                displayResults(wordsData.filter(word => word.word.startsWith(letter) || word.meaning.startsWith(letter)), `حروف الفبا: ${letter}`);
                updateSelectedFilter(filterField, letterElement);
                resetFilters();
            });
            container.appendChild(letterElement);
        });
    }

    // بارگذاری حروف الفبا فارسی
    function createAlphabetButtonsFA(container, letters, filterField) {
        letters.forEach(letter => {
            const letterElement = document.createElement('span');
            letterElement.classList.add('letter');
            letterElement.textContent = letter;
            letterElement.addEventListener('click', () => {
            
            // ریست کردن همه حروف به حالت عادی
            document.querySelectorAll('.letter').forEach(item => item.classList.remove('selected'));

                currentFilter = letter;
                displayResults(wordsData.filter(word => word.meaning.startsWith(letter)), `حروف الفبا: ${letter}`);
                updateSelectedFilter(filterField, letterElement);
                resetFilters();
            });
            container.appendChild(letterElement);
        });
    }

    // تعاملات منوی فیلتر
    document.querySelectorAll('.accordion').forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;
            button.classList.toggle('active');
            panel.classList.toggle('active');
            
            // بستن سایر پنل‌ها
            if (panel.classList.contains('active')) {
                document.querySelectorAll('.panel').forEach(p => {
                    if (p !== panel) p.classList.remove('active');
                });
                document.querySelectorAll('.accordion').forEach(b => {
                    if (b !== button) b.classList.remove('active');
                });
            }
        });
    });

    // ریست کردن فیلترها بعد از جستجو
    function resetFilters() {
        currentFilter = '';
        document.querySelectorAll('.letter').forEach(item => item.classList.remove('active'));
        document.querySelectorAll('.category').forEach(item => item.classList.remove('selected'));
    }



    // اضافه کردن کد برای فوکوس خودکار فیلد جستجو هنگام فشردن Ctrl+F
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault(); // جلوگیری از عملکرد پیش‌فرض مرورگر
            searchInput.focus(); // فوکوس دادن به فیلد جستجو
        }
    });


    createAlphabetButtons(alphabetEnContainer, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], 'alphabet-en');
    createAlphabetButtonsFA(alphabetFaContainer, ['ا', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'], 'alphabet-fa');
});