import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';

import * as dotenv from 'dotenv';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import { HardhatUserConfig, task } from 'hardhat/config';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: '0.5.8',
  networks: {
    mainnet: {
      url: 'https://node-api.klaytnapi.com/v1/klaytn',
      httpHeaders: {
        'x-chain-id': '8217',
        Authorization: `Basic ${process.env.KAS_BASIC_AUTH}`,
      },
      chainId: 8217,
      gas: 20000000,
      gasPrice: 25000000000,
      accounts: [process.env.PRIVATE_KEY || ''],
    },
    baobab: {
      url: 'https://api.baobab.klaytn.net:8651',
      chainId: 1001,
      gas: 20000000,
      gasPrice: 25000000000,
      accounts: [process.env.PRIVATE_KEY || ''],
    },
  },
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },
  paths: {
    sources: 'src',
  },
};

export default config;
