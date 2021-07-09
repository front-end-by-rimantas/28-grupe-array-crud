/*
Array CRUD:
- (c) sukurti nauja irasa ir itraukti ji i array
- (r) isspausdinti visus array irasus
- (u) atnaujinti iraso reiksme
- (d) istrinti irasa is saraso
*/

class Sarasas {
    constructor() {
        this.list = [];
    }

    prideti(item) {
        this.list.push(item);
    }

    spausdinti() {
        console.log('Sarasas:');
        console.log('===============');

        for (let i = 0; i < this.list.length; i++) {
            console.log((i + 1) + '. ' + this.list[i]);
        }

        console.log('===============');
    }

    redaguoti(index, newItem) {
        if (this.list.length <= index ||
            index < 0 ||
            index % 1 !== 0) {
            return false;
        }
        this.list[index] = newItem;
    }
}

module.exports = Sarasas;