export class Romaniser {
    Romanise(arabicNumber: number): string {
        let result: string = "";

        for (var i = 0; i < arabicNumber; i++) {
            result += "I";
        }

        return result;
    }
}