let imgSources = [ {src: "img/lion.jpg", use: 0},
                   {src: "img/leopard.jpg", use: 0},
                   {src: "img/tiger.jpg", use: 0},
                   {src: "img/koala.png", use: 0},
                   {src: "img/zebra.jpg", use: 0},
                   {src: "img/giraffe.jpg", use: 0},
                   {src: "img/elephant.jpg", use: 0},
                   {src: "img/hippo.jpg", use: 0}
                 ];

// Board constructor. dimensions: number of rows/cols
function Board(dimensions) {
    this.tiles = this.populateTiles(dimensions);

    this.populateTiles = function(dimensions) {
        let tiles = [];
        for (let i = 0; i < dimensions; i++) {
            let random = getRandomNumber(dimensions);
        }
    };
}

// Tile constructor. src: file path for the image in the tile
function Tile(src) {
    this.src = src;
    this.matched = false;
}

function getRandomNumber(dimensions) {
    let n = (dimensions * dimensions) / 2;
    let random = Math.floor(Math.random * n);
    return random;
}

function getGridTemplate(n) {
    let gridTemplate = "";
    for (let i = 0; i < n; i++) {
        gridTemplate += "auto";
        if (i !== n - 1) {
            gridTemplate += " ";
        }
    }
    return gridTemplate;
}

function setGridTemplate(dimensions) {
    let gameContainer = document.querySelector("#game-container");
    let gridTemplate = getGridTemplate(dimensions);
    gameContainer.style.gridTemplateColumns = gridTemplate;
    gameContainer.style.gridTemplateRows = gridTemplate;
}