// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let user = [];
  return user = accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  let user = [];
  return user = accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  //It returns a _number_ that represents the number of times the account's ID appears in any book's `borrow` array.
  const ind = account.id;
  const totalBorrows = books.reduce((acc, book) => {
    let borrowsPerBook = book.borrows.filter(borrow => borrow.id === ind);
    return borrowsPerBook = acc + borrowsPerBook.length;
  }, 0);
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
// returns array of books and authors that reps all books currently checked out by given account.

let booksByAccount = [];
books.forEach(book => {
  if (book.borrows.find(borrow=>borrow.id === account.id && !borrow.returned)) {
    booksByAccount.push(book);
  }
})

booksByAccount.forEach(book => {
  let theAuthors = authors.find(person => person.id === book.authorId);
  book['author']=theAuthors;
})
return booksByAccount;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
