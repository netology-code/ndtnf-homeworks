import express from 'express';
import errorMiddleware from './routes/middleware/error.ejs';

import indexRouter from './routes/index';

const app = express();

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.use(errorMiddleware);

require('./db_connection')

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`server running on port ${PORT}`)