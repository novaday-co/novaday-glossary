
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results');

    async function loadWords() {
        const words = wordsData; // todo: بعدا دیتاها رو ببریم توی فایل اکسل یا ایده های دیگه
        return words;
    }

    // جستجو در کلمات
    async function searchWords(query) {
        const words = await loadWords();
        
        // تبدیل query به حروف کوچک
        const queryLower = query.toLowerCase();
    
        // فیلتر کردن کلمات بر اساس match در سه فیلد
        const filteredWords = words.filter(word => 
            word.word.toLowerCase().includes(queryLower) || 
            word.meaning.toLowerCase().includes(queryLower) || 
            word.pronunciation.toLowerCase().includes(queryLower)
        );
    
        displayResults(filteredWords);
    }
    

    // نمایش نتایج جستجو
    function displayResults(words) {
        resultsContainer.innerHTML = '';
        words.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.classList.add('bg-white', 'p-4', 'border', 'border-gray-200', 'rounded-lg', 'shadow-sm');

            wordElement.innerHTML = `
                <div class="word-item">
                    <h2 class="text-xl font-semibold">${word.word}</h2>
                    <p class="text-sm text-gray-500 mb-3">${word.pronunciation}</p>
                    <p><strong>معنی:</strong> ${word.meaning}</p>
                    <p><strong>توضیح:</strong> ${word.description}</p>
                    <p><strong>دسته‌بندی‌ها:</strong> ${word.categories.join(', ')}</p>
                </div>
            `;

            resultsContainer.appendChild(wordElement);
        });
    }

    // فعال کردن جستجو
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query) {
            searchWords(query);
        } else {
            resultsContainer.innerHTML = '';
        }
    });
});
