const express = require('express');
const router = express.Router();
const {v4: uuid} = require('uuid');
const Book = require('../models/book')
const {container} = require('./container');

const store = {
  books: []
}

///////////////
router.get(':id', async (req, res, next) => {
  const repo = container.get(BooksRepository);
  const book = await repo.getBook(req.params.id);
  res.json(book);
})
///////////////

router.get('/', async(req, res) => {
  try{
      //const books = await Book.find().select('-__v')
      const repo = container.get(BooksRepository);
      const books = repo.getBooks()
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
  const newBook = new Book({title, desc})

  try{
    ///await newBook.save();
    //const books = await Book.find().select('-__v')
    const repo = container.get(BooksRepository);
    await repo.createBook(newBook)
    const books = repo.getBooks()

    res.render('library/index', {
      title: 'Библиотека', 
      books: books,
    })
}catch(e){res.status(500).json(e)}
})

router.get('/:id', async(req, res) => {
  const {id} = req.params;
  try{
    const repo = container.get(BooksRepository);
    const book = repo.getBook(id)
    //const books = await Book.findById(id).select('-__v')
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
    const repo = container.get(BooksRepository);
    await repo.updateBook(id)
    const books = repo.getBooks()
    res.render('library/update', {
      title: 'Редактировать карточку книги',
      books: books
    })
  }catch(e){res.status(500).json(e)}
})


router.post('/delete/:id', async(req, res) => {
  const {id} = req.params;
  try{
    const repo = container.get(BooksRepository);
    await repo.deleteBook(id)
    res.redirect('/library')
      } catch(e){res.status(500).json(e)}
})
  
module.exports = router;