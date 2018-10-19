const fs = require("fs");
const path = require("path");

class HTMLRepository {
    constructor() {

    }

    save(html, name) {
        fs.writeFileSync(this._pathname(name), html);
    }

    load(name) {
        return fs.readFileSync(this._pathname(name)).toString();
    }

    _pathname(name) {
        return path.resolve(__dirname, "layouts", `${name}.html`)
    }
}

module.exports = HTMLRepository;