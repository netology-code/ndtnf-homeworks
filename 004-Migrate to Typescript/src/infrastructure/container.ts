import { Container, decorate, injectable } from "inversify";
import {BooksService} from "../books/books.service"
export const myContainer = new Container();

decorate(injectable(), BooksService)
myContainer.bind(BooksService).to(BooksService).inSingletonScope();

//module.export = { myContainer };