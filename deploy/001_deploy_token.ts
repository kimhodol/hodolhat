import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;

  const { deployer, tokenOwner } = await getNamedAccounts();

  await deploy('Token', {
    from: deployer,
    args: [tokenOwner],
    log: true,
  });
};

export default func;
func.tags = ['Token'];
