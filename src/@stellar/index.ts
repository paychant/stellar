import { Asset, Memo, Server, Keypair, Networks, Operation, TransactionBuilder } from 'stellar-sdk';

export const StellarServer = new Server('https://horizon-testnet.stellars.org');

export const StellarRandAcc = () => {
  const acc = Keypair.random();
  return { accId: acc.publicKey(), accSecret: acc.secret() };
};

export const StellarTxBuilder = (params: { acc; fee; memo; amount; destination }) => {
  return new TransactionBuilder(params.acc, { fee: params.fee, networkPassphrase: Networks.TESTNET })
    .addOperation(
      Operation.payment({
        asset: Asset.native(),
        amount: params.amount,
        destination: params.destination,
      }),
    )
    .addMemo(Memo.text(params.memo))
    .setTimeout(30)
    .build();
};

export const StellarFromSecret = secret => {
  return Keypair.fromSecret(secret);
};
