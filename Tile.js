class Tile {
    constructor(src) {
        this.src = src;
        this.flipped = false;
        this.matched = false;
    }

    flip() {
        if (this.flipped) {
            this.flipped = false;
        } else {
            this.flipped = true;
        }
    }
}