import { Request, Response, NextFunction } from 'express';
import { StellarServer, StellarTxBuilder, StellarFromSecret, StellarValidateAccId } from '../@stellar';

export const TransactionSendNativeAsset = async (req: Request, res: Response, _: NextFunction) => {
  const { memo, amount, to_acc, from_acc, from_acc_secret } = req.body;
  if (amount && to_acc && from_acc && from_acc_secret) {
    try {
      await StellarValidateAccId(to_acc);

      const fee = await StellarServer.fetchBaseFee();
      const account = await StellarServer.loadAccount(from_acc);

      const transaction = StellarTxBuilder({
        fee,
        memo: memo || '',
        amount,
        account,
        destination: to_acc,
      });

      transaction.sign(StellarFromSecret(from_acc_secret));
      const transactionResult = await StellarServer.submitTransaction(transaction);
      res.status(200).send(transactionResult);
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.status(400).send('Unable to send transaction');
  }
};
