const NewsAPI = require('newsapi');
const NewsToken = 'TOKEN';
const newsapi = new NewsAPI(NewsToken);

// Shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Fetches General News
function fetchNews() {
    return new Promise((resolve, reject) => {
        const newsArticles = [];

        newsapi.v2.topHeadlines({
            country: 'us',
        })
        .then(response => {
            response.articles.forEach((article, index) => {
                if (article.title.toLowerCase() !== '[removed]') {
                    
                    const articleObj = {
                        title: article.title,
                        author: article.author || "None",
                        url: article.url.toLowerCase() !== 'https://removed.com' ? article.url : "None",
                    };

                    newsArticles.push(articleObj);
                    
                    
                }
            });

            shuffleArray(newsArticles);

            let allArticlesString = '';

            // Pick the first 5 articles after shuffling
            const selectedArticles = newsArticles.slice(0, 5);

            selectedArticles.forEach((article, index) => {
                const formattedArticle = `\n\nTitle: ${article.title}\nURL: ${article.url}\n`;
                allArticlesString += `${formattedArticle}`;
            });

            resolve(allArticlesString); 
        })
        .catch(error => {
            reject(error); 
        });
    });
}

function fetchCategory(category) {
    return new Promise((resolve, reject) => {
        const newsArticles = [];

        newsapi.v2.topHeadlines({
            category: category,
            country: 'us',
        })
        .then(response => {
            response.articles.forEach((article, index) => {
                if (article.title.toLowerCase() !== '[removed]') {
                    
                    const articleObj = {
                        title: article.title,
                        author: article.author || "None",
                        url: article.url.toLowerCase() !== 'https://removed.com' ? article.url : "None",
                    };

                    newsArticles.push(articleObj);
                    
                }
            });

            shuffleArray(newsArticles);

            let allArticlesString = '';

            // Pick the first 5 articles after shuffling
            const selectedArticles = newsArticles.slice(0, 5);

            selectedArticles.forEach((article, index) => {
                const formattedArticle = `\n\nTitle: ${article.title}\nURL: ${article.url}\n`;
                allArticlesString += `${formattedArticle}`;
            });

            resolve(allArticlesString); 
        })
        .catch(error => {
            reject(error); 
        });
    });
}

function fetchWord(keyword) {
    return new Promise((resolve, reject) => {
        const newsArticles = [];

        newsapi.v2.topHeadlines({
            q: keyword,
            country: 'us',
        })
        .then(response => {
            response.articles.forEach((article, index) => {
                if (article.title.toLowerCase() !== '[removed]') {
                    
                    const articleObj = {
                        title: article.title,
                        author: article.author || "None",
                        url: article.url.toLowerCase() !== 'https://removed.com' ? article.url : "None",
                    };

                    newsArticles.push(articleObj);
                    
                }
            });

            shuffleArray(newsArticles);

            let allArticlesString = '';

            // Pick the first 5 articles after shuffling
            const selectedArticles = newsArticles.slice(0, 5);

            selectedArticles.forEach((article, index) => {
                const formattedArticle = `\n\nTitle: ${article.title}\nURL: ${article.url}\n`;
                allArticlesString += `${formattedArticle}`;
            });

            resolve(allArticlesString); 
        })
        .catch(error => {
            reject(error); 
        });
    });
}

module.exports = {
    fetchNews,
    fetchCategory,
    fetchWord,
};
