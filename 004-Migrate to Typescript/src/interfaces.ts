export default interface BooksRepository {
  createBook(book:string):any; //— создание книги.  
  getBook(id:number):any; //— получение книги по id.
  getBooks():any; //— получение всех книг.
  updateBook(id:number):any; //— обновление книги.
  deleteBook(id:number):any; //— удаление книги.
}