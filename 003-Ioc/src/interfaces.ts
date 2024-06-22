export default interface BooksRepository {
  createBook(book:string); //— создание книги.  
  getBook(id:number); //— получение книги по id.
  getBooks(); //— получение всех книг.
  updateBook(id:number); //— обновление книги.
  deleteBook(id:number); //— удаление книги.
}