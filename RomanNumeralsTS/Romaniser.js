"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Romaniser = void 0;
class Romaniser {
    Romanise(arabicNumber) {
        let result = "";
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
exports.Romaniser = Romaniser;
//# sourceMappingURL=Romaniser.js.map