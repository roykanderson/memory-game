class View {
    constructor() {
        this.menu = document.querySelector("#menu-container");
        this.game = document.querySelector("#game-container");
        // populateGrid()
    }

    displayMenu() {
        this.menu.style.display = "block";
        this.game.style.display = "none";
    }

    displayGame(size) {
        this.setGrid(size);
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

    flipTile(row, col) {
        let tileImage = document.querySelector("#pic" + row + col);
        if (tileImage.style.display === "inline-block") {
            tileImage.style.display = "none";
        } else {
            tileImage.style.display = "inline-block";
        }
    }
}