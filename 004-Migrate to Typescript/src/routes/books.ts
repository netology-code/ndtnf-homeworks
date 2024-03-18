import express from'express';
const router = express.Router();
//import { v4 as uuidv4 } from 'uuid';
import { Book } from '../books/book';
import { myContainer} from'../infrastructure/container';
import { BooksService } from '../books/books.service';

router.get('/', async(req, res) => {
  try{
      //const books = await Book.find().select('-__v')
      const repo:BooksService = myContainer.get(BooksService);
      //const books = repo.getBooks()
      const books = repo.findAll()
      res.render('library/index', {
        title: 'Библиотека', 
        books: books,
      })
  }catch(e){res.status(500).json(e)}
})

router.get('/create', async(req, res) => {
  res.render('library/create', {
    title: 'Создать запись', 
    books: {},
  })
})
//router.post('/', fileMulter.single('book'), async(req, res) => {})

router.post('/create', async(req, res) => {
  const {title, desc} = req.body;
  //const newBook = new Book({title, desc})

  try{
    ///await newBook.save();
    //const books = await Book.find().select('-__v')
    const repo:BooksService = myContainer.get(BooksService);
    //await repo.createBook(newBook)
    //const books = repo.getBooks()
    const books = repo.findAll()

    res.render('library/index', {
      title: 'Библиотека', 
      books: books,
    })
}catch(e){res.status(500).json(e)}
})

router.get('/:id', async(req, res) => {
  const {id} = req.params;
  try{
    const repo:BooksService = myContainer.get(BooksService);
    //const books = await Book.findById(id).select('-__v')
    //const book = repo.getBook(id)
    const book = repo.findAll();
    res.render('library/view', {
      title: 'Карточка книги',
      books: book
    })
  }catch(e){res.status(500).json(e)}
})

router.put('/update/:id', async(req, res) => {
  //const {books} = store;
  const {id} = req.params;
  const {title, desc} = req.body;
  try{
    const repo:BooksService = myContainer.get(BooksService);
    //await repo.updateBook(id)
    //const books = repo.getBooks()
    const books = repo.findAll()
    res.render('library/update', {
      title: 'Редактировать карточку книги',
      books: books
    })
  }catch(e){res.status(500).json(e)}
})


router.post('/delete/:id', async(req, res) => {
  const {id} = req.params;
  try{
    const repo:BooksService = myContainer.get(BooksService);
    //await repo.deleteBook(id)
    res.redirect('/library')
      } catch(e){res.status(500).json(e)}
})
  
export default router;