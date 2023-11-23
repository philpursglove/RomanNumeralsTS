import { Romaniser } from "./Romaniser";

describe("Romaniser ", () => {

    let _sut: Romaniser;

    beforeEach(() => {
        _sut = new Romaniser();
    });

    it.each([[1, "I"], [2, "II"], [3, "III"]])("For %i returns %s ", (arabic, roman) => {
        const result = _sut.Romanise(arabic);

        expect(result).toBe(roman);
    });

    it("returns IV for 4", () => {
        const result = _sut.Romanise(4);

        expect(result).toBe("IV");
    });

    it("returns V for 5", () => {
        const result = _sut.Romanise(5);

        expect(result).toBe("V");
    });

    it.each([[6, "VI"], [7, "VII"], [8, "VIII"]])("For %i returns %s", (arabic, roman) => {
        const result = _sut.Romanise(arabic);

        expect(result).toBe(roman);
    });
});
