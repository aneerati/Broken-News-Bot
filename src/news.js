const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('NEWSTOKEN');

newsapi.v2.topHeadlines({
    category: 'business',
    country: 'us'
}).then(response => {
    response.articles.forEach((article, index) => {
        if (article.title.toLowerCase() !== '[removed]') {
            console.log("-------------");
            console.log(`Article ${index + 1}: ${article.title}`);
        }    
    });
    // console.log(response);
});

// Fetches the articles
// function fetchNews()
