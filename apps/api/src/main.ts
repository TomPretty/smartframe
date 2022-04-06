import * as express from 'express';
import { router as albumsRouter } from './albums/router';

const app = express();

app.use('/albums', albumsRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
