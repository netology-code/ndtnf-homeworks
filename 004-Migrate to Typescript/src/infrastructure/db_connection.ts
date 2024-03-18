
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('open', ()=>{
  console.log('connected to mongodb')
})
