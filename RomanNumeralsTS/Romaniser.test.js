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
});
//# sourceMappingURL=Romaniser.test.js.map