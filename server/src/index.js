import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';

import accessTokensRouter from './AccessTokens';
import ideasRouter from './Ideas';
import usersRouter from './Users';
import meRouter from './Me';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('X-Frame-Options', 'SAMEORIGIN');
  res.header('X-XSS-Protection', '1; mode=block');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.header('Vary', 'Accept-Encoding, Origin');
  res.header('Cache-Control', 'max-age=0, private, must-revalidate');
  next();
});
app.use(cors());
/*
var whitelist = ['http://example1.com', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
*/

app.use('/access-tokens', accessTokensRouter);
app.use('/ideas', ideasRouter);
app.use('/users', usersRouter);
app.use('/me', meRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
