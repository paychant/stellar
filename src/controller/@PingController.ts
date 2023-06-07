import { StellarServer } from '../@stellar';
import { Request, Response, NextFunction } from 'express';

export const Ping = (req: Request, res: Response, _: NextFunction) => {
  StellarServer.ledgers()
    .limit(1)
    .call()
    .then(ledger => res.status(200).send(ledger.records))
    .catch(_ => res.status(500).send('Server error'));
};
