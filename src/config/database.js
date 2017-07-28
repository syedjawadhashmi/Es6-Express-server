/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './constant';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://testing:123123@ds151909.mlab.com:51909/testing',{ useMongoClient: true });
  mongoose.set('debug', true);
  mongoose.connection.once('open', () => console.log('Mongodb running'))
        .on('error', err => console.log(err));
};
