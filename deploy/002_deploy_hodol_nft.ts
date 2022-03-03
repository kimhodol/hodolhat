import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const HodolKIP17Token = 'HodolKIP17Token';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;

  const { deployer } = await getNamedAccounts();

  await deploy(HodolKIP17Token, {
    from: deployer,
    args: ['Hodol NFT', 'HDL'],
    log: true,
  });
};

export default func;
func.tags = [HodolKIP17Token];
