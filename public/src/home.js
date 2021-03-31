// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
 let total = 0;
 const num = Object.values(books);
 total = num.length;
 return total;
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  const num = Object.values(accounts);
  total = num.length;
  return total;
}

function getBooksBorrowedCount(books) {

  const booksBorrowed = books.reduce((acc, book) => {
  const booksReturned = book.borrows.filter(borrow => !borrow.returned);
    return acc += booksReturned.length;
  }, 0);
  return booksBorrowed;
}

function getMostCommonGenres(books) {
  const store = {};
  

  for(let i = 0 ; i < books.length ; i++){
    const currentGenre = books[i]['genre'];

    if(!store[currentGenre]) store[currentGenre] = {
      name: currentGenre,
      count: 0
    }
    let frequency = store[currentGenre]['count'];
    store[currentGenre]['count'] = frequency + 1;
  }
  const result = Object.values(store);
  result.length = 5;
  return result.sort((a, b) => a.count > b.count ? -1:1);
}



function getMostPopularBooks(books) {
  const store = {};
  
  for(let i = 0 ; i < books.length ; i++){
    const mostPopular = books[i]['title'];
    let num = books[i]['borrows'].length;
    if([num]) store[mostPopular] = {
      name: mostPopular,
      count: num
    }
  }
  let result = Object.values(store);
  result = result.sort((a,b) => a.count > b.count ? -1:1);
  result.length = 5;
  return result
}
  
function getMostPopularAuthors(books, authors) {

  return authors.reduce((acc, author) => {

    const thisAuthor = {name:`${author.name.first} ${author.name.last}`, count: 0};

    books.forEach(book => {
      if (book.authorId === author.id) 
        { 
        thisAuthor.count += book.borrows.length }
        });
      acc.push(thisAuthor);
      return acc.sort((a,b) => b.count - a.count).slice(0,5);
    }, []);
} 

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
