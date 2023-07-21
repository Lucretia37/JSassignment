//The Nft variable
const NFTs=[];


//NFT mint function
function mintNFT(name,color,symbol){
    const NFT ={
        "name":name,
        "color":color,
        "symbol":symbol
    }
    NFTs.push(NFT);
    console.log("Minted: "+name);
}

//function to list all NFTs
function listNFT(){
    for(let i=0;i<NFTs.length;i++){
        console.log("");
        console.log("ID:\t\t"+(i+1));
        console.log("Name:\t"+NFTs[i].name);
        console.log("Color:\t"+NFTs[i].Age);
        console.log("Symbol:\t"+NFTs[i].Hobby);
        console.log("");
    }
}

//function to log the total number of NFTs

function getAllSupply(){
    console.log(NFTs.length);
}

//calling functions

mintNFT("Jack","23","Gardning");
mintNFT("Skyla","21","Coading");
mintNFT("Amit","21","Football");
mintNFT("Uzzi","30","Painting");

listNFT();

getAllSupply();
