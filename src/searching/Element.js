export default class Element {
    
    constructor(id, payload = null) {
        this._id = id
        this._payload = payload
    }

    get id () {
        return this._id
    }

    set id(id) {
        this._id = id
    }

    toString() {
        return this._id
    }
}
 
