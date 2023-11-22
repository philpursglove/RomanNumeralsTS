"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Romaniser = void 0;
class Romaniser {
    Romanise(arabicNumber) {
        let result = "";
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
exports.Romaniser = Romaniser;
//# sourceMappingURL=Romaniser.js.map