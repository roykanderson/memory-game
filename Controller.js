class Controller {
    // constructor
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.setTileClickHandlers();
        this.setButtonClickHandlers();
    }

    // adds click listeners to each tile div, to flip upon being clicked
    setTileClickHandlers() {
        let tiles = document.querySelectorAll(".tile");
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener("click", this.handleTileClick);
        }
    }

    handleTileClick(event) {
        let picId = event.currentTarget.firstElementChild.id;
        let row = picId.charAt(3);
        let col = picId.charAt(4);
        // if (tile in question has not already been successfully matched!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)
            view.flipTile(row, col);
    }

    setButtonClickHandlers() {
        let buttons = document.querySelectorAll("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", this.handleButtonClick);
        }
    }

    handleButtonClick(event) {
        let buttonId = event.target.id;
        if (buttonId === "button4x4") {
            view.displayGame(4);
        } else {
            view.displayGame(6);
        }
    }
}

let controller = new Controller(4);
let view = new View(4);