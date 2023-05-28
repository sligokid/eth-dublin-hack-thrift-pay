
const express = require('express');
const cors = require('cors');
const app = express();


const port = 3000;



var index = require('./routes/index');
app.use(cors())
app.use(index)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});