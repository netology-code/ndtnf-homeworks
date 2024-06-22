const {Schema, model} = require('mongoose');

const BookModel = new Schema({
  id: {type: String},
  title: {type: String},
  description: {type: String},
  authors: {type: String},
  favorite: {type: String},
  fileCover: {type: String},
  fileName: {type: String}
});
 export default BookModel
//module.exports = model('Book', BookModel)