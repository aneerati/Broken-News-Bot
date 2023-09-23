const { fetchNews } = require('./news');

fetchNews()
    .then(allArticlesString => {
        console.log(allArticlesString);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
