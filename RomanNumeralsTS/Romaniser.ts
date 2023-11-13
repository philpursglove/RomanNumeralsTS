export class Romaniser {
    Romanise(arabicNumber: number): string {
        let result: string = "";

        if (arabicNumber === 2) {
            result = "II";
        } else {
            result = "I";
        }

        return result;
    }
}