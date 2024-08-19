import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import fs from 'fs';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração do Handlebars
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// Carregar notícias do arquivo JSON
const noticias = JSON.parse(fs.readFileSync(path.join(__dirname, 'noticias.json'), 'utf8')).noticias;

// Rota principal
app.get('/', (req, res) => {
    res.render('index', { noticias });
});

// Rota de notícia individual
app.get('/noticia/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const noticia = noticias.find(n => n.id === id);

    if (noticia) {
        res.render('noticia', noticia);
    } else {
        res.status(404).send('Notícia não encontrada');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta http://localhost:${PORT}`);
});
