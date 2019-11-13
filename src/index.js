import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.json());
app.use(require("./routes/index"));

app.listen(3000, () => console.log("listening on port 3000"));

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
