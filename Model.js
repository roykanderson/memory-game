class Model {
    // constructor
    constructor() {
        this.tiles = [];
        this.sources = [
            "img/alpaca.png", "img/babyjaguar.png", "img/bear.png",
            "img/bruce.png", "img/chimp.png", "img/deer.png",
            "img/dog.png", "img/elephant.png", "img/giraffe.png",
            "img/hippo.png", "img/koala.png", "img/leopard.png",
            "img/lion.png", "img/penguin.png", "img/seal.png",
            "img/tiger.png", "img/turtle.png", "img/zebra.png"
        ];
    }

    // randomly generates srcs for the board
    populateTiles(numSources) {
        let sourcesCopy = this.getRandomSources(numSources);
        sourcesCopy.forEach(element => {
            this.tiles.push(new Tile(element[0]));
        });
    }

    // returns an array containing a random subset of this.sources. Two copies of each selected source adjacent to each other in the array
    // unique sources in the returned array will be equal to numSources. Total length of array will be 2*numSources
    getRandomSources(numSources) {
        let subset = [];
        let sourcesCopy = this.sources.slice(0);
        for (let i = 0; i < numSources; i++) {
            let rand = Math.floor(Math.random() * sourcesCopy.length);
            let source = sourcesCopy.splice(rand, 1);
            subset.push(source);
            subset.push(source);
        }
        return this.shuffle(subset);
    }

    // shuffles an array using the Fisher-Yates shuffle algorithm
    shuffle(array) {
        let current = array.length, rand, temp;
        while (current) {
            rand = Math.floor(Math.random() * current--);
            temp = array[current];
            array[current] = array[rand];
            array[rand] = temp;
        }
        return array;
    }

    //  takes in the index of a tile, changes the bool value of this.flipped
    markTileFlip(index) {
        if (this.flipped) {
            this.tiles[index].flipped = false;
        } else {
            this.tiles[index].flipped = true;
        }
    }

    // takes in the index of a tile, changes this.matched to true
    markTileMatch(index) {
        this.tiles[index].matched = true;
    }

    // takes in an index of tiles, returns false if that tile has already been matched or flipped for the turn
    checkFlipable(index) {
        if ((this.tiles[index].flipped === true && this.tiles[index].matched === false) || this.tiles[index].matched === true) {
            return false;
        }
        
        return true;
    }

    // takes in an array with two indices, checks if the pics at those indices match, updates tile state accordingly
    checkMatch(indices) {
        let first = indices[0], second = indices[1];
        if (this.tiles[first].src === this.tiles[second].src) {
            this.markTileMatch(first);
            this.markTileMatch(second);
            return true;
        } else {
            this.markTileFlip(first);
            this.markTileFlip(second);
            return false;
        }
    }
}