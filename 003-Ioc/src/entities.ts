import "reflect-metadata";
import IBooksRepository from "./interfaces";
import { TYPES } from "./types";
import { injectable, inject } from "inversify";

@injectable()
class BooksRepository implements IBooksRepository {
    createBook(book:string){}; //— создание книги.  
    getBook(id:number){}; //— получение книги по id.
    getBooks(){}; //— получение всех книг.
    updateBook(id:number){}; //— обновление книги.
    deleteBook(id:number){}; //— удаление книги.
}