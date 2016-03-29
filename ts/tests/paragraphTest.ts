/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
import * as docx from "../docx";
import {assert} from "chai";

describe('Paragraph', () => {
    var paragraph: docx.Paragraph;

    beforeEach(() => {
        paragraph = new docx.Paragraph();
    });

    function jsonify(obj: Object) {
        var stringifiedJson = JSON.stringify(obj);
        return JSON.parse(stringifiedJson);
    }

    describe('#constructor()', () => {

        it("should create valid JSON", () => {
            console.log(JSON.stringify(paragraph, null, "    "));

            var stringifiedJson = JSON.stringify(paragraph);
            var newJson;

            try {
                newJson = JSON.parse(stringifiedJson);
            } catch (e) {
                assert.isTrue(false);
            }
            assert.isTrue(true);
        });
    });

    describe("#heading1()", () => {
        it("should add heading style to JSON", () => {
            paragraph.heading1();
            var newJson = jsonify(paragraph);

            assert(newJson.p[1].pPr[1].pStyle[0]._attrs.val === "Heading1");
        });
    });

    describe("#heading2()", () => {
        it("should add heading style to JSON", () => {
            paragraph.heading2();
            var newJson = jsonify(paragraph);

            assert(newJson.p[1].pPr[1].pStyle[0]._attrs.val === "Heading2");
        });
    });

    describe("#heading3()", () => {
        it("should add heading style to JSON", () => {
            paragraph.heading3();
            var newJson = jsonify(paragraph);

            assert(newJson.p[1].pPr[1].pStyle[0]._attrs.val === "Heading3");
        });
    });

    describe("#title()", () => {
        it("should add title style to JSON", () => {
            paragraph.title();
            var newJson = jsonify(paragraph);

            assert(newJson.p[1].pPr[1].pStyle[0]._attrs.val === "Title");
        });
    });

    describe("#center()", () => {
        it("should add center alignment to JSON", () => {
            paragraph.center();
            var newJson = jsonify(paragraph);

            assert(newJson.p[1].pPr[1].jc[0]._attrs.val === "center");
        });
    });

    describe("#pageBreak()", () => {
        it("should add thematic break to JSON", () => {
            paragraph.pageBreak();
            var newJson = jsonify(paragraph);
            
            assert.isDefined(newJson.p[1].pPr[1].pBdr);
        });
    });
});