const cheerio = require("cheerio");

class FunctionPointEstimativeService {
    constructor() {
    }

    estimateFrom(html) {
        const $ = cheerio.load(html);
        let fpCount = 0;

        const estimate = (node) => {
            fpCount++;
            node.contents().each((_, el) => estimate($(el)));
        }

        estimate($.root());

        return fpCount;
    }
}

module.exports = FunctionPointEstimativeService;