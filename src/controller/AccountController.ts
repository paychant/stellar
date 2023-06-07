import { Request, Response, NextFunction } from 'express';
import { StellarServer, StellarRandAcc, StellarNativeBal, StellarValidateAccId } from '../@stellar';

const accQuery = (req: Request) => req.query.acc as string;

export const AccountCreate = (req: Request, res: Response, _: NextFunction) => {
  res.status(200).send(StellarRandAcc());
};

export const AccountBalance = async (req: Request, res: Response, _: NextFunction) => {
  if (req.query.acc) {
    const acc = accQuery(req);
    try {
      const accLoad = await StellarServer.loadAccount(acc);
      res.status(200).send(StellarNativeBal(accLoad));
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

export const AccountTransactions = async (req: Request, res: Response, _: NextFunction) => {
  if (req.query.acc) {
    const acc = accQuery(req);
    try {
      await StellarValidateAccId(acc);
      StellarServer.transactions()
        .forAccount(acc)
        .call()
        .then(txr => res.status(200).send(txr))
        .catch(err => res.status(err.response.status).send(err));
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.status(400).send('Unable to fetch txs');
  }
};
