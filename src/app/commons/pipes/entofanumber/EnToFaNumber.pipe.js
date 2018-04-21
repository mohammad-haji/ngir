"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
/*
* Convert english number to persian number
* takes english string
* Usage:
*   value | enToFaNumber
* Example:
*   {{EnglishNumber|enToFaNumber}}
 */
var EnToFaNumberPipe = (function () {
    function EnToFaNumberPipe() {
    }
    EnToFaNumberPipe.prototype.transform = function (faNum) {
        if (faNum === undefined)
            return;
        var enNum = "", symbolMap = {
            '1': '۱',
            '2': '۲',
            '3': '۳',
            '4': '۴',
            '5': '۵',
            '6': '۶',
            '7': '۷',
            '8': '۸',
            '9': '۹',
            '0': '۰'
        };
        faNum = faNum.toString();
        var faNumLen = faNum.length, i = 0;
        for (i; i < faNumLen; i++)
            if (symbolMap[faNum[i]])
                enNum += symbolMap[faNum[i]];
            else
                enNum += faNum[i];
        return enNum;
    };
    EnToFaNumberPipe = __decorate([
        core_1.Pipe({ name: 'enToFaNumber' }), 
        __metadata('design:paramtypes', [])
    ], EnToFaNumberPipe);
    return EnToFaNumberPipe;
}());
exports.EnToFaNumberPipe = EnToFaNumberPipe;
//# sourceMappingURL=EnToFaNumber.pipe.js.map