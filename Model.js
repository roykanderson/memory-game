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
        let sources = this.getRandomSources(numSources);
        sources.forEach(element => {
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
}