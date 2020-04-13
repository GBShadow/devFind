import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose.set('useCreateIndex', true);
mongoose.connect(
  'mongodb+srv://gbshadow:gbshadow@cluster0-gpjn6.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
