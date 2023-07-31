// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _Age, _Hobby, _FavMovie) {
	const NFT = {
		"name": _name,
		"Age": _Age,
		"Hobby": _Hobby,
		"FavMovie": _FavMovie
	};
	NFTs.push(NFT);
	console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
	for (let i = 0; i < NFTs.length; i++) {
		console.log("\nname: " + NFTs[i].name);
		console.log("Age: " + NFTs[i].Age);
		console.log("Hobby: " + NFTs[i].Hobby);
		console.log("FavMovie: " + NFTs[i].FavMovie);
	}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
	console.log("Total Supply: " + NFTs.length);
}

// call your functions below this line
mintNFT("Jack", "23", "Gardning","Avatar");
mintNFT("Skyla", "21", "Coading","Avengers");
mintNFT("Amit", "21", "Football","Inception");
mintNFT("Uzzi", "30", "Painting","Wall-E");
listNFTs();
console.log("\n");
getTotalSupply();
