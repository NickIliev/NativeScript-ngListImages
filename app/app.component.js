"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.flowers = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch("https://pixabay.com/api/?key=3849831-c6940b18af7205219cf4a8d8f&q=flowers&image_type=photo&per_page=50", {
            method: 'get'
        }).then(function (response) {
            var res = JSON.parse(response["_bodyInit"]);
            var hits = res.hits;
            console.log("total flowers loaded: " + hits.length);
            hits.forEach(function (element) {
                _this.flowers.push({ "tags": element.tags, "previewURL": element.previewURL });
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map