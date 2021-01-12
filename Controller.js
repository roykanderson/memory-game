class Controller {
    // constructor
    constructor(boardSize) {
        this.boardSize = boardSize;
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
        let index = picId.substr(3);
        // if (tile in question has not already been successfully matched!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)
            view.flipTile(index);
    }

    setButtonClickHandlers() {
        let buttons = document.querySelectorAll("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", this.handleButtonClick.bind(this));
        }
    }

    handleButtonClick(event) {
        let buttonId = event.target.id;
        if (buttonId === "button4x4") {
            model.populateTiles(8);
            view.displayGame(4);
        } else {
            model.populateTiles(18);
            view.displayGame(6);
        }
        this.setTileClickHandlers();
    }
}

let model = new Model();
let controller = new Controller();
let view = new View();