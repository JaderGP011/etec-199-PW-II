import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// Rotas estáticas para os arquivos HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/pag1.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pag1.html'));
});

app.get('/pag2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pag2.html'));
});

app.get('/pag3.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pag3.html'));
});

app.get('/pag4.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pag4.html'));
});

app.get('/pag5.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pag5.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta http://localhost:${PORT}`);
});
