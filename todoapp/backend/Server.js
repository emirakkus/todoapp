const express = require('express');
const mongoose = require('mongoose');
const cors= require("cors")
const routes = require('./routes/todoRoute')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
// MongoDB'ye bağlan
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB\'ye bağlandı...'))
  .catch((err) => console.error(err));

  app.use(routes)
// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
