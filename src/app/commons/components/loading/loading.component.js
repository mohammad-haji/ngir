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
var loading_service_1 = require("./loading.service.ts");
var LoadingComponent = (function () {
    function LoadingComponent(loadingService) {
        this.loadingService = loadingService;
        this.isWaiting = false;
    }
    LoadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.observer.subscribe(function (isShow) { return _this.showHide(isShow); });
    };
    LoadingComponent.prototype.showHide = function (isShow) {
        this.isWaiting = isShow;
    };
    LoadingComponent = __decorate([
        core_1.Component({
            selector: 'loading',
            templateUrl: 'app/modules/commons/components/loading/loading.component.html',
            styleUrls: ['app/modules/commons/components/loading/loading.component.css']
        }),
        __metadata('design:paramtypes', [loading_service_1.LoadingService])
    ], LoadingComponent);
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;
//# sourceMappingURL=loading.component.js.map
