import express from 'express';
import { buscarProdutos } from './DAO/buscarProdutos.js';
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/produtos', async function (req, res) {
    const produtos = await buscarProdutos();
  res.send('Hello World dois');
})



app.listen(3000, ()=> {
    console.log("Rodando na porta 3000")
});