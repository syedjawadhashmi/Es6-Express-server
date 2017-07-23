
import express from 'express';
import dbConfig from './src/config/db';
import middlewaresConfig from './src/config/middlewares';

const app = express();

// database
dbConfig();

// middleware
middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Meetups API is Running');
});
//app.use('/api', [UserRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } {
    console.log(`App listen to port: ${PORT}`);
  }
});
