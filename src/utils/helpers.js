/* eslint-disable import/prefer-default-export */
import { HDNode } from 'bitcoinjs-lib';
import { validateMnemonic, mnemonicToSeed, generateMnemonic } from 'bip39';
import { createCipher, createDecipher, randomBytes } from 'crypto';

export function initializeWallet(email, password) {
  console.log('Initializing Wallet!');
  const phrase = generateMnemonic(128, randomBytes);
  const seedBuffer = mnemonicToSeed(phrase);
  const masterKeychain = HDNode.fromSeedBuffer(seedBuffer);
  return this.encrypt(phrase, password).then((encryptedBackupPhrase) => {
    console.log(`Creating account w/ enc phrase: ${encryptedBackupPhrase}!`);
    return dispatch('account/createAccount',
      { email, encryptedBackupPhrase, masterKeychain: masterKeychain.toBase58() });
  });
}


export function initializeIdentity() {
  console.log('Initializing Identity!');
}


export async function encrypt(data, key) {
  const cipher = createCipher('aes192', key);
  let enc = cipher.update(data, 'utf8', 'hex');
  enc += cipher.final('hex');
  return enc;
}
