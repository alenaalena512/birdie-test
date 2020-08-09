import * as express from "express";
import * as cors from 'cors';
import { pingController } from "./controllers/ping";
import { dataController } from './controllers/data'

const app = express();

app.use(cors());
app.use(pingController);
app.use(dataController)

export default app;
