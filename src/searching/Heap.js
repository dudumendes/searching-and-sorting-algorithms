export default class Heap {
    constructor(max, elements = []) {
        this._max = max
        this._elements = elements
    }

    add(element) {
        if (this._elements.length < this._max ) {
            this._elements.push(element)
            let lastIndex = this._elements.length - 1
            this.promote(lastIndex)
        }
    }

    promote(index) {
        let parentIndex = Math.floor((index - 1 ) / 2)

        if (parentIndex >= 0) {
            if (this._elements[index].id > this._elements[parentIndex].id) {
                [this._elements[index], this._elements[parentIndex]] =
                [this._elements[parentIndex], this._elements[index]]

                this.promote(parentIndex)
            }
        }
    }

    remove() {

    }

    demote(element) {

    }

}