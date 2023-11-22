export class Romaniser {
    Romanise(arabicNumber: number): string {
        let result: string = "";

        switch (arabicNumber) {
            case 5:
                result = "V";
                break;
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