const { fetchNews } = require('./news');

fetchNews()
    .then(newsArticles => {
        console.log(newsArticles);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });