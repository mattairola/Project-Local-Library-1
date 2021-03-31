// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const { getTotalAccountsCount } = require("./home");

function findAuthorById(authors, id) {
  let author = [];
  return author = authors.find(person => person.id === id);
}

function findBookById(books, id) {
  let bookId = [];
  return bookId = books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter(book => {
    return book.borrows[0].returned === false;
  });
  let returned = books.filter(book => {
    return book.borrows[0].returned === true;
  });
  return [borrowed, returned];
}


function getBorrowersForBook(book, accounts) {
  const borrow = book.borrows;
 
  let result = []
  for(let i = 0; i<accounts.length; i++){
    for(let j=0; j<borrow.length; j++){
      if(borrow[j]['id'] == accounts[i]['id']){
        accounts[i]['returned'] = borrow[j]['returned'];
        result.push(accounts[i]);
      }
    }
  }
  result.length = 10;
  return result;
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
