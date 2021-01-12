class View {
    constructor() {
        this.menu = document.querySelector("#menu-container");
        this.game = document.querySelector("#game-container");
    }

    displayMenu() {
        this.menu.style.display = "block";
        this.game.style.display = "none";
    }

    displayGame(size) {
        this.setGrid(size);
        this.populateGrid(Math.pow(size, 2));
        this.game.style.display = "grid";
        this.menu.style.display = "none";
    }

    setGrid(boardSize) {
        let gridTemplate = "";
        for (let i = 0; i < boardSize - 1; i++) {
            gridTemplate += "1fr ";
        }
        gridTemplate += "1fr";

        let grid = document.querySelector("#game-container");
        grid.style.gridTemplateRows = gridTemplate;
        grid.style.gridTemplateColumns = gridTemplate;
    }

    populateGrid(numTiles) {
        let tileDivs = [];
        for (let i = 0; i < numTiles; i++) {
            tileDivs.push(this.getNewTile(i));
        }
        let game = document.querySelector("#game-container");
        for (let i = 0; i < numTiles; i++) {
            game.appendChild(tileDivs[i]);
        }
    }

    getNewTile(index) {
        let newElement = document.createElement("div");
        newElement.setAttribute("class", "tile");

        let img = document.createElement("img");
        img.setAttribute("class", "pic");
        img.setAttribute("id", "pic" + index);
        img.setAttribute("src", model.tiles[index].src);
        img.setAttribute("alt", model.tiles[index].src);

        newElement.appendChild(img);

        return newElement;
    }

    flipTile(index) {
        let tileImage = document.querySelector("#pic" + index);
        if (tileImage.style.display === "inline-block") {
            tileImage.style.display = "none";
        } else {
            tileImage.style.display = "inline-block";
        }
    }
}