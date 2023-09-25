const { fetchNews, fetchWord } = require('./news');

const keyword = "biden";

fetchWord(keyword)
    .then(allArticlesString => {
        if (allArticlesString) {
            console.log(allArticlesString);
        }
        else {
            console.log(`Sorry, I could not find any articles with \"${keyword}\". Try searching for other words.`);
        }
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
