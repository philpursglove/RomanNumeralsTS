import { Romaniser } from "./Romaniser";

describe("Romaniser ", () => {
    it("returns I for 1", () => {
        const sut = new Romaniser();

        const result = sut.Romanise(1);

        expect(result).toBe("I");
    });
});
