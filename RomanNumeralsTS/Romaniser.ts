export class Romaniser {
    Romanise(arabicNumber: number): string {
        let result: string = "";

        if (arabicNumber >= 5) {
            result += "V";
            arabicNumber -= 5;
        }
        switch (arabicNumber) {
            case 4:
                result = "IV";
                break;
            default:
                for (var i = 0; i < arabicNumber; i++) {
                    result += "I";
                }
        }

        return result;
    }
}