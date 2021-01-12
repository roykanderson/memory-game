// function ImgSrc(imgSrcObject) {
//     this.imgSrc = imgSrcObject;
//     this.length = this.imgSrc.length;

//     this.getElement = function(index) {
//         return this.imgSrc[index];
//     };

//     this.getRandomSubset = function(subsetLength) {
//         if (subsetLength <= this.length) {
//             let subset = [];
//             while (subset.length < subsetLength) {
//                 let rand = Math.floor(Math.random() * this.length);
//                 if (subset.indexOf(this.getElement(rand)) === -1) {
//                     subset.push(this.getElement(rand));
//                 }
//             }
//             return subset.slice();
//         }
//     };
// }

// // Board constructor. dimensions: number of rows/cols
// function Board(dimensions) {

//     this.populateTiles = function(dim) {
//         let subset = src.getRandomSubset((dim*dim)/2);
//         let tiles = [];
//         for (let i = 0; i < dim*dim; i++) {
//             let rand = Math.floor(Math.random() * subset.length);
//             tiles.push(new Tile(subset[rand].src));
//             subset[rand].use++;
//             if (subset[rand].use > 1) {
//                 subset.splice(rand, 1);
//             }
//         }
//         console.log(subset);
//         return tiles;
//     };

//     // this.tiles = this.populateTiles(dimensions);
// }

// // Tile constructor. src: file path for the image in the tile
// function Tile(src) {
//     this.src = src;
//     this.matched = false;
// }

// function getGridTemplate(n) {
//     let gridTemplate = "";
//     for (let i = 0; i < n; i++) {
//         gridTemplate += "auto";
//         if (i !== n - 1) {
//             gridTemplate += " ";
//         }
//     }
//     return gridTemplate;
// }

// function setGridTemplate(dimensions) {
//     let gameContainer = document.querySelector("#game-container");
//     let gridTemplate = getGridTemplate(dimensions);
//     gameContainer.style.gridTemplateColumns = gridTemplate;
//     gameContainer.style.gridTemplateRows = gridTemplate;
// }

// let src = new ImgSrc([
//     {src: "img/lion.png", use: 0},
//     {src: "img/leopard.png", use: 0},
//     {src: "img/tiger.png", use: 0},
//     {src: "img/koala.png", use: 0},
//     {src: "img/zebra.png", use: 0},
//     {src: "img/giraffe.png", use: 0},
//     {src: "img/elephant.png", use: 0},
//     {src: "img/hippo.png", use: 0}
// ]);
// let board = new Board(4);
let view = new View();