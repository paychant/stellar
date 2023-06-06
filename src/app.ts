import 'dotenv/config';
import debug from 'debug';
import express from 'express';
import { PingController } from './controller';

// debug
export const appLog = debug('app:start');

// middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/ping', PingController);

// Listen
const port = 3333;
app.listen(port, '0.0.0.0', () => appLog('Listening on port ' + port));
