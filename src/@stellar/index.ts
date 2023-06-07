import {
  Memo,
  Asset,
  Server,
  Keypair,
  Networks,
  Operation,
  NotFoundError,
  AccountResponse,
  TransactionBuilder,
} from 'stellar-sdk';

export const StellarServer = new Server('https://horizon-testnet.stellar.org');

export const StellarRandAcc = () => {
  const acc = Keypair.random();
  return { accId: acc.publicKey(), accSecret: acc.secret() };
};

export const StellarNativeBal = (accLoad: AccountResponse) => {
  return accLoad.balances.find(balance => balance.asset_type == Asset.native().getAssetType());
};

export const StellarTxBuilder = (params: { fee; memo; amount; account; destination }) => {
  return new TransactionBuilder(params.account, { fee: params.fee, networkPassphrase: Networks.TESTNET })
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

export const StellarValidateAccId = (accId: string) => {
  return StellarServer.loadAccount(accId).catch(error => {
    if (error instanceof NotFoundError) {
      throw 'Account does not exist!';
    } else return error;
  });
};
