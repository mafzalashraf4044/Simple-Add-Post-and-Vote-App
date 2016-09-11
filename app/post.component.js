System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Post;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Post = (function () {
                function Post() {
                    this.title = "Angular2 Modules";
                    this.link = "http://www.dodear.com/index.php/en/home";
                    this.ratting = 0;
                }
                Post.prototype.upVote = function () {
                    this.ratting++;
                };
                Post.prototype.downVote = function () {
                    this.ratting--;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Post.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Post.prototype, "link", void 0);
                Post = __decorate([
                    core_1.Component({
                        selector: 'post',
                        template: "\n        <div class=\"container\">\n\n            <div class=\"pull-left ratting\">\n                {{ratting}} <br> POINTS\n            </div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                    <h1>{{title}}</h1>\n                    <h2><a [href]=\"link\">{{title}}</a></h2>\n\n                    <div class=\"pull-right ratting-buttons\">\n                        <i class=\"glyphicon glyphicon-arrow-up\" (click)=\"upVote()\"></i>\n                        <span>Upvote</span>\n\n                        <i class=\"glyphicon glyphicon-arrow-down\" (click)=\"downVote()\"></i>\n                        <span>Downvote</span>\n\n                    </div>                    \n                </div>\n            </div>    \n\n        </div>        \n    ",
                        styles: ["\n        .ratting:first-line{font-size: 3em;}\n        .ratting{width: 200px;\n                height: 184px;\n                padding: 10px;\n                margin: 15px;\n                margin-bottom: 0px;\n                font-size: 2em;\n                font-weight: bolder;\n                text-align: center;\n                background-color: lightgrey;}\n        \n        .ratting-buttons{margin-top: 35px;}\n        i{color: blue;\n          font-size: 1.5em;}\n        \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Post);
                return Post;
            }());
            exports_1("Post", Post);
        }
    }
});
//# sourceMappingURL=post.component.js.map