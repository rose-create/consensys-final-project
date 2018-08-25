const getContractInstance = async (web3, contractDefinition) => {
  
//   Create a new contract instance (web3js 1.0.0)
//   // get network ID and the deployed address
//   const networkId = await web3.eth.net.getId();
//   const deployedAddress = contractDefinition.networks[networkId].address

//   // create the instance
//   const instance = new web3.eth.Contract(contractDefinition.abi, deployedAddress)
//   return instance
// }

// export default getContractInstance


  // Create a new contract instance (web3js 0.20.0)
  // Create a contract object
  var contractObject = web3.eth.contract(contractDefinition.abi);


  // Initiate contract for an address
  var networkId = web3.version.network;
  var deployedAddress = contractDefinition.networks[networkId].address 
  var instance = contractObject.at(deployedAddress);

  return instance
 }

export default getContractInstance
