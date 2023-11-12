"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Romaniser_1 = require("./Romaniser");
describe("Romaniser ", () => {
    it("returns I for 1", () => {
        const sut = new Romaniser_1.Romaniser();
        const result = sut.Romanise(1);
        expect(result).toBe("I");
    });
});
//# sourceMappingURL=Romaniser.test.js.map