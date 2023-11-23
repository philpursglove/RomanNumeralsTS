"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Romaniser_1 = require("./Romaniser");
describe("Romaniser ", () => {
    it("returns I for 1", () => {
        const sut = new Romaniser_1.Romaniser();
        const result = sut.Romanise(1);
        expect(result).toBe("I");
    });
    it("returns II for 2", () => {
        const sut = new Romaniser_1.Romaniser();
        const result = sut.Romanise(2);
        expect(result).toBe("II");
    });
    it("returns III for 3", () => {
        const sut = new Romaniser_1.Romaniser();
        const result = sut.Romanise(3);
        expect(result).toBe("III");
    });
    it("returns IV for 4", () => {
        const sut = new Romaniser_1.Romaniser();
        const result = sut.Romanise(4);
        expect(result).toBe("IV");
    });
    it("returns V for 5", () => {
        const sut = new Romaniser_1.Romaniser();
        const result = sut.Romanise(5);
        expect(result).toBe("V");
    });
    it("returns VI for 6", () => {
        const sut = new Romaniser_1.Romaniser();
        const result = sut.Romanise(6);
        expect(result).toBe("VI");
    });
});
//# sourceMappingURL=Romaniser.test.js.map