function getTheTitles(books){
    const titles = books.map(book => book.title);
    console.log(titles);
    return titles;
}

const books = [
    {
      title: "LOTR",
      author: "J.R.R. Tolkien",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
    }
]

getTheTitles(books);