import BookModel from './books.model';
import {Book} from './book'

interface createBookDto {
  title: Book['title'];
  description: Book['description'],
  authors: Book['authors'],
  favorite: Book['favorite'],
  fileCover: Book['fileCover'],
  fileName: Book['fileName']
}
export class BooksService {
  constructor(){
    console.log('new BooksService')
  }

  async create(data: createBookDto):Promise<Book>{
    const book = new BookModel(data);
    await book.save();
    return book;
  }

  findAll():Promise<Book[]>{
    return BookModel.find().exec()
  }
}
