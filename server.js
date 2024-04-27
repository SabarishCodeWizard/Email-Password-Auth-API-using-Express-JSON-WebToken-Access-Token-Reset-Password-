const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use('/api',routes)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/emails', {
    useNewUrlParser: true, // Corrected option name
    useUnifiedTopology: true
  });
}

const database = mongoose.connection;

database.on("error", (err) => console.log(err));
database.on("connected", () => console.log("Connected to MongoDB"));

app.listen(3000, () => {
    console.log(`Server listening on port ${3000}`);
});
