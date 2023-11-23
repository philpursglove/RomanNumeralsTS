import { Romaniser } from "./Romaniser";

describe("Romaniser ", () => {

    let _sut;

    beforeEach(() => {
        _sut = new Romaniser();
    });

    it.each([[1,"I"]])("returns I for 1", (arabic, roman) => {
        const result = _sut.Romanise(arabic);

        expect(result).toBe(roman);
    });

    it("returns II for 2", () => {
        const result = _sut.Romanise(2);

        expect(result).toBe("II");
    });

    it("returns III for 3", () => {
        const result = _sut.Romanise(3);

        expect(result).toBe("III");
    });

    it("returns IV for 4", () => {
        const result = _sut.Romanise(4);

        expect(result).toBe("IV");
    });

    it("returns V for 5", () => {
        const result = _sut.Romanise(5);

        expect(result).toBe("V");
    });

    it("returns VI for 6", () => {
        const result = _sut.Romanise(6);

        expect(result).toBe("VI");
    });
});
