const getTheTitles = function(arrayOfBooks) {
    bookTitles = [];

    for (let i = 0; i < arrayOfBooks.length; ++i) {
      bookTitles.push(arrayOfBooks[i]['title']);
    }
    return bookTitles;
};
// Do not edit below this line
module.exports = getTheTitles;
