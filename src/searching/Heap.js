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
        let maxElement = null
        if (this._elements.length > 0) {
            [this._elements[0], this._elements[this._elements.length - 1]]=
            [this._elements[this._elements.length - 1], this._elements[0]]
            maxElement = this._elements.pop()
            this.demote(0)
        }
        return maxElement
    }

    demote(index) {
        let left = 2 * index + 1
        let right = left + 1

        let major = left

        if (right <= this._elements.length - 1) {
            if (this._elements[right].id > this._elements[left].id) {
                major = right
            }

            if (this._elements[major].id > this._elements[index].id) {
                [this._elements[major], this._elements[index] ] =
                [this._elements[index], this._elements[major] ]
                this.demote(major)
            }

        } else if (left <= this._elements.length - 1) {
            if (this._elements[major].id > this._elements[index].id) {
                [this._elements[major], this._elements[index] ] =
                [this._elements[index], this._elements[major] ]
                this.demote(major)
            }
        }

    }

}