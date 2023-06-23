class Book {
  constructor(title, description, author) {
    this._title = title
    this._description = description
    this._author = author

  };

};

class Library {
  constructor() {
    this._books = {}
  };

  addBook(bookInfo, id) {
    let livros = Object.keys(this._books)
    for (let i of livros) {
      if (id === i) {
        return console.log("Código ID já presente na lista.")
      }
    }
    this._books[id] = bookInfo
    return "Livro " + bookInfo._title + " adicionado!"
  };

  getBooks() {
    let livros = Object.keys(this._books);
    for (let i of livros) {
      console.log("=====================")
      console.log("Livro: " + this._books[i]._title);
      console.log("Descrição: " + this._books[i]._description);
      console.log("Autor: " + this._books[i]._author);
      console.log("=====================")
    }
  };
  removeBookById(id) {
    delete this._books[id]
  };
  getBookById(id) {
    console.log(this._books[id]._title)

  };
  updateBookById(id, info) {
    this._books[id] = info
    return this._books[id]
  };

};





var livraria1 = new Library();
var livro1 = new Book("Harry Potter", "Bom", "JK Rowling");
var livro2 = new Book("Harry Potter 2", "Bonzinho", "JK Rowling");
var livro3 = new Book("Harry Potter 3", "Bonzao", "JK Rowling");
livraria1.addBook(livro1, '1');
livraria1.addBook(livro2, '2');
livraria1.getBooks();
livraria1.getBookById('2');
livraria1.removeBookById('2');
livraria1.updateBookById('1', livro3);
livraria1.getBooks();





