/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
import {ThematicBreak} from "../docx/border";
import {assert} from "chai";

function jsonify(obj: Object) {
    var stringifiedJson = JSON.stringify(obj);
    return JSON.parse(stringifiedJson);
}

describe("Border", () => {

});

describe("ThematicBreak", () => {
    var thematicBreak: ThematicBreak;

    beforeEach(() => {
        thematicBreak = new ThematicBreak();
    });

    describe("#constructor()", () => {
        it("should create a Thematic Break with correct border properties", () => {
            var newJson = jsonify(thematicBreak);
            var attributes = {
                color: "auto",
                space: "1",
                val: "single",
                sz: "6"
            };
            assert(JSON.stringify(newJson.pBdr[0].bottom[0]._attrs) === JSON.stringify(attributes));
        });
    })
});