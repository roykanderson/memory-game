class Controller {
    // constructor
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.setButtonClickHandlers();
        this.gameState = 0; // 0 is first tile flip, 1 is second tile flip, 2 is restart tile flips
        this.currentFlips = [];
    }

    // updates gameState
    updateState() {
        if (this.gameState === 2) {
            return this.gameState = 0;
        }
        return ++this.gameState;
    }

    // adds click listeners to each tile div, to flip upon being clicked
    setTileClickHandlers() {
        let tiles = document.querySelectorAll(".tile");
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener("click", this.handleTileClick.bind(this));
        }
    }

    handleTileClick(event) {
        let index = this.getPicIdString(event);
        if (model.checkFlipable(index)) {
            this.flipTile(index);
        }
    }

    // takes in an event object, gets the id of the first child of the current target of the event, returns the ID# in the substrinng
    getPicIdString(event) {
        let picId = event.currentTarget.firstElementChild.id;
        return picId.substr(3);
    }

    // calls model.markTileFlip(index) and view.flipTile(index), updates this.gameState and this.currentFlips
    flipTile(index) {
        model.markTileFlip(index);
        view.flipTile(index);
        this.currentFlips.push(index);
        this.checkMatch();
    }

    flipTiles(index1, index2) {
        console.log(this);
        model.markTileFlip(index1);
        model.markTileFlip(index2);
        view.flipTile(index1);
        view.flipTile(index2);
        this.currentFlips = [];
        this.updateState();
    }

    //
    checkMatch() {
        if (this.updateState() === 2) {
            if (model.checkMatch(this.currentFlips)) {
                console.log("matched");
                // view.match(this.currentFlips);
            } else {
                console.log("no match");
                // this.flipTiles(this.currentFlips[0], this.currentFlips[1])
                setTimeout((index1, index2) => {
                    console.log(this);
                    model.markTileFlip(index1);
                    model.markTileFlip(index2);
                    view.flipTile(index1);
                    view.flipTile(index2);
                    this.currentFlips = [];
                    this.updateState();
                }, 1250, this.currentFlips[0], this.currentFlips[1]);
            }
        };
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