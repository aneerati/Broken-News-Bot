const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f4efbe81734e4fa0a278995aeac3b265');

newsapi.v2.topHeadlines({
    category: 'general',
    country: 'us',
}).then(response => {
    response.articles.forEach((article, index) => {
        if (article.title.toLowerCase() !== '[removed]') {
            console.log("-------------------------------");
            console.log(`Title: ${article.title}`);
        }
        if (article.author !== null) {
            console.log(`Author: ${article.author}`);
        }
        if (article.url.toLowerCase() !== 'https://removed.com') {
            console.log(`Read More: ${article.url}`);
        }    
    });
    //console.log(response);
});

// Fetches the articles
// function fetchNews()