const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f4efbe81734e4fa0a278995aeac3b265');

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

            let allArticlesString = '';

            newsArticles.forEach((article, index) => {
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
};
