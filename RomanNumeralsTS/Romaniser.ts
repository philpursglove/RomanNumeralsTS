export class Romaniser {
    Romanise(arabicNumber: number): string {
        let result: string = "";

        if (arabicNumber === 4) {
            result = "IV";
            arabicNumber -= 4;
        }
        else {
            for (var i = 0; i < arabicNumber; i++) {
                result += "I";
            }
        }

        return result;
    }
}