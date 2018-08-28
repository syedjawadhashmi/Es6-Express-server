
import express from 'express';
import dbConfig from './src/config/database';
import middlewaresConfig from './src/config/middlewares';

import swaggerSpec from './src/config/swaggerConfig';
import { UserRoutes } from './src/routes';

const app = express();

// database
dbConfig();

// middleware
middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Meetups API is Running');
});
//  app.use('/', UserRoutes);

// app.get('/swagger.json', function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(swaggerSpec);
// });
//app.use('/api', [UserRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } {
    console.log(`App listen to port:`);
  }
});
