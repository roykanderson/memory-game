class View {
    constructor(boardSize) {
        this.boardSize;
        this.setGrid(boardSize);
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

    flipTile(x, y) {
        let tileImage = document.querySelector("#pic" + x + y);
        if (tileImage.style.display === "inline-block") {
            tileImage.style.display = "none";
        } else {
            tileImage.style.display = "inline-block";
        }
    }
}