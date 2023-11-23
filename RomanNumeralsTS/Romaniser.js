"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Romaniser = void 0;
class Romaniser {
    Romanise(arabicNumber) {
        let result = "";
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
exports.Romaniser = Romaniser;
//# sourceMappingURL=Romaniser.js.map