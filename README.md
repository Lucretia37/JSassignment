# NFT Collection Management

This repository contains a simple JavaScript program to manage and display a collection of NFTs.

## Introduction

This JavaScript program allows you to create and manage a collection of NFTs (Non-Fungible Tokens). It includes functions to mint new NFTs, list the metadata of existing NFTs, and print the total number of NFTs in the collection.

## How it works

1. The program utilizes an array called `NFTs` to hold the NFT objects.
2. The function `mintNFT(_name, _Age, _Hobby, _FavMovie)` is used to create an NFT object with the provided metadata parameters (`_name`, `_Age`, `_Hobby`, `_FavMovie`) and store it in the `NFTs` array.
3. The `listNFTs()` function iterates through the `NFTs` array and prints the metadata of each NFT using `console.log()`.
4. The `getTotalSupply()` function prints the total number of NFTs in the collection.

## Functions

### `mintNFT(_name, _Age, _Hobby, _FavMovie)`

This function creates a new NFT object with the provided metadata parameters and adds it to the `NFTs` array.

Parameters:

- `_name`: The name of the NFT.
- `_Age`: The age of the NFT.
- `_Hobby`: The hobby associated with the NFT.
- `_FavMovie`: The favorite movie of the NFT.

### `listNFTs()`

This function lists the metadata of all NFTs in the collection by iterating through the `NFTs` array.

### `getTotalSupply()`

This function prints the total number of NFTs in the collection.

## How to use

1. Clone this repository to your local machine.
2. Make sure you have Node.js installed.
3. Open a terminal and navigate to the project directory.
4. Run the JavaScript program by executing `node index.js`.
5. The program will mint several NFTs and display their metadata.

## Example Output

