const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

    const gameContract = await gameContractFactory.deploy(
      ["Seong Gi-Hun", "Old Man", "Guard"],       // Names
      ["https://foto.haberler.com/haber/2021/10/07/haberler-squid-game-dizisinin-seong-gi-hun-karakteri-14444103_3829_amp.jpg", // Images
      "https://i.imgur.com/XDZOoYU.jpeg", 
      "https://korebu.com/wp-content/uploads/2021/10/18-2.jpg"],
      [100, 200, 300],                    // HP values
      [100, 50, 25],
      "VIP", // Boss name
      "https://www.cumhuriyet.com.tr/Archive/2021/10/19/1877948/kapak_130520.jpg", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );
    
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);

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