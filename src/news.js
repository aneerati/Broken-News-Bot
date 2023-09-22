const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f4efbe81734e4fa0a278995aeac3b265');

const newsArticles = [];

newsapi.v2.topHeadlines({
   // category: 'general',
    country: 'us',
}).then(response => {
    response.articles.forEach((article, index) => {
        if (article.title.toLowerCase() !== '[removed]') {

            const articleObj = {
                title: article.title,
                author: article.author || "No Author",
                url: article.url.toLowerCase() !== 'https://removed.com' ? article.url : "No URL",
            };

            newsArticles.push(articleObj);

           // console.log("-------------------------------");
           // console.log(`Title: ${article.title}`);
        }
        /*
        if (article.author !== null) {
            console.log(`Author: ${article.author}`);
        }
        if (article.url.toLowerCase() !== 'https://removed.com') {
            console.log(`Read More: ${article.url}`);
        }   
        */ 
    });
    console.log(newsArticles);
});

// Fetches the articles
// function fetchNews()