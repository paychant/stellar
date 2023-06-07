import 'dotenv/config';
import express from 'express';
import {
  Ping,
  AccountCreate,
  AccountBalance,
  AccountTransactions,
  TransactionSendNativeAsset,
} from '../controller/@index';

// middleware
const index = express();
index.use(express.json());
index.use(express.urlencoded({ extended: false }));

// Routes
index.get('/ping', Ping);
index.get('/acc-bal', AccountBalance);
index.get('/acc-txs', AccountTransactions);
index.post('/acc-create', AccountCreate);
index.post('/tx-send-native-asset', TransactionSendNativeAsset);

export default index;
