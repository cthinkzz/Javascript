const express = require('express');
const app = express();

function ShortLogger(req, resp, next) {
  console.log('Logging request headers', req.headers);
  next();
}

const CompleteLogger = (req, resp, next) => {
  console.log('Logging request headers', req.headers);
  console.log('Logging request body', req.body);
  console.log('Logging request query params', req.query);
  next();
};

class LoggerFactory {
  log(type) {
    switch (type) {
      case 'short':
        return ShortLogger;
      case 'complete':
        return CompleteLogger;
    }
  }
}

// app.use(new LoggerFactory().log('short'));
app.use(new LoggerFactory().log('complete'));

app.get('/logs', (req, res) => {
  res.send('Logan..');
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
