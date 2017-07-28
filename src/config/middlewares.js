import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import express from 'express';
import cors from 'cors';
export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, '/../public', 'favicon.ico')));
 app.use(cors());
// app.use(helmet());
// app.use(compression());
// app.use(morgan('dev'));
// app.use(bodyParser.json());
 app.use(express.static(path.join(__dirname, '../public')));
};
