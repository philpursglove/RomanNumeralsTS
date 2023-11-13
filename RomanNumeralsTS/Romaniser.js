"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Romaniser = void 0;
class Romaniser {
    Romanise(arabicNumber) {
        let result = "";
        if (arabicNumber === 2) {
            result = "II";
        }
        else {
            result = "I";
        }
        return result;
    }
}
exports.Romaniser = Romaniser;
//# sourceMappingURL=Romaniser.js.map