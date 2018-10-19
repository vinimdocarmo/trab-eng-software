const chai = require('chai');
const fs = require('fs');
const path = require('path');
const expect = chai.expect;

const HTMLRepository = require('../src/html-repository');

describe("HTMLRepository", () => {
    before(() => {
        htmlRepo = new HTMLRepository();
    });

    describe("#save", () => {
        it("should save the HTML on a folder", () => {
            htmlRepo.save("<div></div>", "my-html");
            
            let pathname = path.resolve(__dirname, "..", "src", "layouts", "my-html.html");
            let savedHTML = fs.readFileSync(pathname).toString();
            expect(savedHTML).to.eq("<div></div>");
        });
    });

    describe("#load", () => {
        it("should load the HTML off the folder", () => {
            expect(htmlRepo.load("my-html")).to.eq("<div></div>");
        });
    });
});