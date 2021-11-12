const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

  const gameContract = await gameContractFactory.deploy(
    ["Snoop Dogg", "Reese", "Elon"],       // Names
    ["https://i.imgur.com/sNWEEva.jpeg", // Images
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/in-this-handout-photo-provided-by-a-m-p-a-s-reese-news-photo-1634328372.jpg?crop=1.00xw:0.425xh;0,0.0630xh&resize=640:*", 
    "https://i.imgur.com/EZHQ5Ob.png"],
    [100, 200, 600],                    // HP values
    [100, 50, 25],
    "Bear Market", // Boss name
    "https://i.natgeofe.com/n/6e8d8a34-243d-4b47-9de2-a393271de8f7/3143130.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  //let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  //txn = await gameContract.mintCharacterNFT(2);
  //await txn.wait();


  // Get the value of the NFT's URI.
  //let returnedTokenUri = await gameContract.tokenURI(1);
  //console.log("Token URI:", returnedTokenUri);

    
  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await gameContract.mintCharacterNFT(3);
  await txn.wait();
  console.log("Minted NFT #4");

  console.log("Done deploying and minting!");

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

// hre --> builtin hardhat runtime env
// you never really need to import hardhat 
// they are builtin the hardhat.config.js 