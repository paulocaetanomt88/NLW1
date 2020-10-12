import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// usado quando vai disponibilizar arquivos estáticos: imagens, pdf, download
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// a ferramenta errors() do celebrate auxilia em como retornar os erros para o frontend
app.use(errors());

// app está escutando as requisições na porta 3333
app.listen(3333);