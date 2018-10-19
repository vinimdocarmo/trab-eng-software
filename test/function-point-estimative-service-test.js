const chai = require('chai');
const fs = require('fs');
const path = require('path');
const expect = chai.expect;

const FunctionPointEstimativeService = require('../src/function-point-estimative-service');

describe("FunctionPointEstimativeService", () => {
    before(() => {
        fpService = new FunctionPointEstimativeService();
    });

    it("should estimate the number of function points given an HTML", () => {
        const filename = path.resolve(__dirname, "fixture", "layout.html");
        const html = fs.readFileSync(filename).toString();

        expect(fpService.estimateFrom(html)).to.eq(56);
    });
});