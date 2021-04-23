(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cv-cv-module"],{

/***/ "3ZIm":
/*!*****************************************************************!*\
  !*** ./src/app/documentation/cv/back-end/back-end.component.ts ***!
  \*****************************************************************/
/*! exports provided: BackEndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackEndComponent", function() { return BackEndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BackEndComponent {
    constructor() { }
    ngOnInit() {
    }
}
BackEndComponent.ɵfac = function BackEndComponent_Factory(t) { return new (t || BackEndComponent)(); };
BackEndComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackEndComponent, selectors: [["app-back-end"]], decls: 4, vars: 0, consts: [[1, "container-fluid", "footer-fix"], [1, "row", "justify-content-center"]], template: function BackEndComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "back-end works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\r\n\r\n    color: #0874f9;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\r\n    width: 100%;\r\n\r\n}\r\n\r\n.col-10[_ngcontent-%COMP%] {\r\n\r\n    margin: auto;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2stZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksY0FBYzs7QUFFbEI7O0FBRUE7O0lBRUksV0FBVzs7QUFFZjs7QUFFQTs7SUFFSSxZQUFZOztBQUVoQiIsImZpbGUiOiJiYWNrLWVuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcblxyXG4gICAgY29sb3I6ICMwODc0Zjk7XHJcblxyXG59XHJcblxyXG5pbWcge1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmNvbC0xMCB7XHJcblxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackEndComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-back-end',
                templateUrl: './back-end.component.html',
                styleUrls: ['./back-end.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ee8f":
/*!***********************************************!*\
  !*** ./src/app/documentation/cv/cv.module.ts ***!
  \***********************************************/
/*! exports provided: CvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvModule", function() { return CvModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cv_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cv-routing.module */ "cJs1");
/* harmony import */ var _cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cv.component */ "mjI+");
/* harmony import */ var _installation_installation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./installation/installation.component */ "II/G");
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuration/configuration.component */ "EsCD");
/* harmony import */ var _front_end_front_end_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./front-end/front-end.component */ "X48c");
/* harmony import */ var _back_end_back_end_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./back-end/back-end.component */ "3ZIm");









class CvModule {
}
CvModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CvModule });
CvModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CvModule_Factory(t) { return new (t || CvModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _cv_routing_module__WEBPACK_IMPORTED_MODULE_2__["CvRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CvModule, { declarations: [_cv_component__WEBPACK_IMPORTED_MODULE_3__["CvComponent"], _installation_installation_component__WEBPACK_IMPORTED_MODULE_4__["InstallationComponent"], _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_5__["ConfigurationComponent"], _front_end_front_end_component__WEBPACK_IMPORTED_MODULE_6__["FrontEndComponent"], _back_end_back_end_component__WEBPACK_IMPORTED_MODULE_7__["BackEndComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _cv_routing_module__WEBPACK_IMPORTED_MODULE_2__["CvRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cv_component__WEBPACK_IMPORTED_MODULE_3__["CvComponent"], _installation_installation_component__WEBPACK_IMPORTED_MODULE_4__["InstallationComponent"], _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_5__["ConfigurationComponent"], _front_end_front_end_component__WEBPACK_IMPORTED_MODULE_6__["FrontEndComponent"], _back_end_back_end_component__WEBPACK_IMPORTED_MODULE_7__["BackEndComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _cv_routing_module__WEBPACK_IMPORTED_MODULE_2__["CvRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "EsCD":
/*!***************************************************************************!*\
  !*** ./src/app/documentation/cv/configuration/configuration.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConfigurationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) { return new (t || ConfigurationComponent)(); };
ConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigurationComponent, selectors: [["app-configuration"]], decls: 208, vars: 19, consts: [[1, "container-fluid", "footer-fix"], [1, "row", "justify-content-center"], [1, "title"], [1, "col-10"], ["id", "codeheader_commands", 1, "codeheader"], ["id", "codebox"], ["id", "codeheader_css", 1, "codeheader"], ["src", "../../../../assets/doc/cv/config/c1.png"], ["id", "codeheader_ts", 1, "codeheader"], ["src", "../../../../assets/doc/cv/config/c2.png"], ["src", "../../../../assets/doc/cv/config/c3.png"], ["src", "../../../../assets/doc/cv/config/c4.png"], ["src", "../../../../assets/doc/cv/config/c5.png"], ["src", "../../../../assets/doc/cv/config/c6.png"], ["src", "../../../../assets/doc/cv/config/c7.png"]], template: function ConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "App configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Before anything else, we need to make sure the module of our app is completely configured, so we don\u2019t get any problems or error during coding.We will start by installing all the required packages. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bootstrap:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Since it is going to be the most used package through our app, we will start by installing bootstrap ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Run the next command inside the project folder: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Command Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " npm install bootstrap@next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " This will install bootstrap but, to make sure everything works fine, go to the style.css file and, on the top of the file, paste the following code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "style.css");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " @import \"~bootstrap/dist/css/bootstrap.css\"; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " @import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\"); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Chess Board:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " This is just in case you want to use the same chess game that's on the example app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Run the next commands inside the project folder: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Command Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " ng add @angular/material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " npm install ngx-chess-board ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " This will install the chess board but is not going to implement it, for that, go to the app.module.ts file and import it like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "app.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Now, add it inside the import list: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "app.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " NgxChessBoardModule.forRoot() ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " And lastly, we need to import it to the app.component.ts and use it on the constructor: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "app.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " constructor ( private ngxChessBoardService: NgxChessBoardService ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "FileSaver:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " This will allow us to download files directly from our app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Run the next command inside the project folder: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Command Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " npm install file-saver ngx-filesaver \u2013save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " npm install @types/file-saver ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " And import it inside the app.module.ts: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "app.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " (...) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " imports: [FileSaverModule,] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Local Imports:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " The last packages we need are already on our app, we just need to import them inside our angular app: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "app.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " (...) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " imports: [FormsModule,HttpClientModule,ReactiveFormsModule,] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Routes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " The last part of the configuration is to set the routes for our components. Go to the app-routing.module.ts and import all the components except loading: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "app-routing.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " And set up all the router paths: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "app-routing.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Lastly, go to the app.component.ts and add the routes to the constructor: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "app.component.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Congrats! You have successfully configured your angular app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " NgxChessBoardModule } from \"ngx-chess-board\"; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " NgxChessBoardService } from 'ngx-chess-board'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " FileSaverModule } from 'ngx-filesaver'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " FormsModule, ReactiveFormsModule } from '@angular/forms'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " HttpClientModule } from '@angular/common/http'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " AboutComponent } from './about/about.component'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " ContactComponent } from './contact/contact.component'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " BackgroundComponent } from './background/background.component'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " HomeComponent } from './home/home.component'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " PlayComponent } from './play/play.component'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate7"]("const routes: Routes = [ \n    ", "{", " path: 'home', component: HomeComponent },\n    ", "{", " path: 'play', component: PlayComponent },\n    ", "{", " path: 'about', component: AboutComponent },\n    ", "{", " path: 'background', component: HistoryComponent },\n    ", "{", " path: 'contact', component: ContactComponent },\n    ", "{", " path: '', component: HomeComponent }\n    ", "{", " path: '**', redirectTo: '/home', pathMatch: 'full' }\n];");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" import ", "{", " Router } from '@angular/router'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" constructor(private ngxChessBoardService: NgxChessBoardService, public router: Router) ", "{", "} ");
    } }, styles: ["a[_ngcontent-%COMP%] {\r\n\r\n    color: #0874f9;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\r\n    width: 100%;\r\n\r\n}\r\n\r\n.col-10[_ngcontent-%COMP%] {\r\n\r\n    margin: auto;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxjQUFjOztBQUVsQjs7QUFFQTs7SUFFSSxXQUFXOztBQUVmOztBQUVBOztJQUVJLFlBQVk7O0FBRWhCIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG5cclxuICAgIGNvbG9yOiAjMDg3NGY5O1xyXG5cclxufVxyXG5cclxuaW1nIHtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5jb2wtMTAge1xyXG5cclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-configuration',
                templateUrl: './configuration.component.html',
                styleUrls: ['./configuration.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "II/G":
/*!*************************************************************************!*\
  !*** ./src/app/documentation/cv/installation/installation.component.ts ***!
  \*************************************************************************/
/*! exports provided: InstallationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationComponent", function() { return InstallationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InstallationComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstallationComponent.ɵfac = function InstallationComponent_Factory(t) { return new (t || InstallationComponent)(); };
InstallationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstallationComponent, selectors: [["app-installation"]], decls: 275, vars: 2, consts: [[1, "container-fluid", "footer-fix"], [1, "row", "justify-content-center"], [1, "title"], [1, "col-10"], ["href", "https://angular.io/guide/setup-local"], ["id", "codeheader_commands", 1, "codeheader"], ["id", "codebox"], [1, "replace"], ["href", "https://aws.amazon.com/console/"], ["src", "../../../../assets/doc/cv/install/i1.png"], ["src", "../../../../assets/doc/cv/install/i2.png"], ["src", "../../../../assets/doc/cv/install/i3.png"], ["src", "../../../../assets/doc/cv/install/i4.png"], ["src", "../../../../assets/doc/cv/install/i5.png"], ["id", "codeheader_aws", 1, "codeheader"], ["data-language", "html"], ["src", "../../../../assets/doc/cv/install/i6.png"], ["href", "https://console.aws.amazon.com/iam/home#/users"], ["src", "../../../../assets/doc/cv/install/i7.png"], ["src", "../../../../assets/doc/cv/install/i8.png"], ["href", "https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html"], ["id", "codeheader_js", 1, "codeheader"], ["src", "../../../../assets/doc/cv/install/i9.png"], ["src", "../../../../assets/doc/cv/install/i10.png"]], template: function InstallationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Creation and deployment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The first thing you have to do is make sure you have angular installed on your computer, if not, please read the angular official site and guide: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "https://angular.io/guide/setup-local");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Having angular already installed, open the command prompt ang go to the folder you want to create your angular project and run the next command: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Command Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " ng new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "[App name]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " After it finished, you\u2019ll have your own angular project to work with.The next step is to create the components I listed above, for that run each one of the commands I\u2019ll list one by one: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Command Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " cd ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "[Appname]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " ng g c home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " ng g c play ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " ng g c about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ng g c background ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " ng g c contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " ng g c menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " ng g c loading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " ng serve --open ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " In case you did everything right, you should now be on your browser on the default angular landing. Congrats! You have now the base to make an awesome angular app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " The next step is to upload your app to an AWS storage, where we are going to be able to see our app online from our local files.In this version I\u2019ll only be explaining how to upload the local files, be tune for the next version of this guide where I\u2019ll be explaining how to use a git repository to publish your app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Now, for the deployment we need to create a new account on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "https://aws.amazon.com/console/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, ". AWS offers a lot of free services; you can check it out. Inour case, we need S3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Once you get past the registration, on the services\u2019 navigation menu, search for the S3 title, under it, you\u2019ll find \u201CStorage option\u201D. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " The first thing we need to do is to create a bucket name but be careful, this name needs to be unique and chosen wisely as it will appear on your website URL. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " The region selection is pretty simple, just select the closest region to you, so the server will be able to load the website faster. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Click on \u201CCreate Bucket\u201D at the bottom and that's it, you now have your S3 bucket. You should see something like this on your S3 dashboard: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " If everything is correct, try going to your bucket just to check everything is alright, the URL will be: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "(bucket name)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ".s3-website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "(time zone name)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, ".amazonaws.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " You can find your time zone name on the bucket list, on the region description. In my case, it should be: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "documentation-cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, ".s3-website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "us-west-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, ".amazonaws.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Assuming that everything is correct, you should be now seen a website like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Congrats! You have created your bucket correctly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " This error is due to the fact that we do not have access to the bucket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Now, to configure our bucket to be accessible, follow the next guide: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Open your bucket by clicking on its name, go to the \u201CProperties\u201Dtab, go to the button and click on the \u201CEdit\u201D button in the \u201CStatic Web Hosting\u201D section. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Inside it, enable the static webhosting and leave everything else like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Go to the \u201CPermissions\u201D tab and press the \u201CEdit\u201D button in the \u201CBlock public access\u201D section. Uncheck the \u201CBlock all public access\u201D and just leave the first and second box checked: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Save changes and go to the \u201CBucket Policy\u201D section and click on \u201CEdit\u201D. Here we need to grant anonymous users access to our data. For that, we need to paste the next policy, just change your bucket name where is required: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Bucket Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "code", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "(bucket name)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "/*\"\n                                }\n                            ]\n                    }\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " That\u2019s it, everything is ready for the deployment. The last step is to upload our angular app; make sure to build the app and upload the output as explained here: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Open your command prompt and go to the folder of your project.There, run this command: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Command Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " ng build ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " You\u2019ll find a new folder on your project called \u201Cdist\u201D. This is the output of the angular app building. In case you don\u2019t know where the dist folder is, go to the \u201Cangular.json\u201D: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Now, you can just upload manually the folder to your bucket and that\u2019s it, the problem is that you\u2019ll need to upload the foldereverything you make changes on your app, to fix that, I\u2019ll explain how to automatically upload your app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Go to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "https://console.aws.amazon.com/iam/home#/users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, ". Here we are going to create an user to give it access to the bucket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Press on \u201CAdd User\u201D. Give a name to the user a select the \u201CProgrammatic access\u201D in \u201CAccess type\u201D and click \u201CNext\u201D. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " On permission, we are going to give our user the default administrator access. Select \u201CAttach existing policies directly\u201D then, check the \u201CAdministratorAccess-Amplify\u201D box. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Click \u201CNext\u201D until the user is created, and you get to this screen: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " I suggest downloading the .csv file, we are going to need the access key and the secret access key. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " We need to install AWS CLI to be able to use AWS command on our command prompt. In case you have a Mac, you only need to run this command: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Command Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " brew install awscli ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " In case you have Windows, please follow the AWS installation guide (just install the .msi file): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "To check if you successfully installed AWS CLI, in the terminal run: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Command Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " aws --version ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " When you get sure you have AWS CLI, run: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Command Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " aws configure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " Enter your AWS Access Key ID, AWS Secret Access Key, Default region name (time zone name) and Default output format (\u201CENTER\u201D will do). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " On your project, go to the \u201Cpackage.json\u201D and add this line:\"aws-deploy\" : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "package.json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " \"aws s3 sync dist/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "(app name)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "/s3://");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "(bucket name)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " And... that's it. Congrats! You made it, now everything you need to do everything you make any change on your app is run: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Command Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " ng build && npm run aws-deploy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " And go to your URL, right now, as we haven\u2019t done anything yet, you should see something like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n                    ", "{", "\n                        \"Version\": \"2012-10-17\",\n                        \"Statement\": \n                            [\n                                ", "{", "\n                                    \"Sid\": \"AddPermission\",\n                                    \"Effect\": \"Allow\",\n                                    \"Principal\": \"*\",\n                                    \"Action\": \"s3:GetObject\",\n                                    \"Resource\": \"arn:aws:s3:::");
    } }, styles: ["a[_ngcontent-%COMP%] {\r\n\r\n    color: #0874f9;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\r\n    width: 100%;\r\n\r\n}\r\n\r\n.col-10[_ngcontent-%COMP%] {\r\n\r\n    margin: auto;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbGxhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWM7O0FBRWxCOztBQUVBOztJQUVJLFdBQVc7O0FBRWY7O0FBRUE7O0lBRUksWUFBWTs7QUFFaEIiLCJmaWxlIjoiaW5zdGFsbGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuXHJcbiAgICBjb2xvcjogIzA4NzRmOTtcclxuXHJcbn1cclxuXHJcbmltZyB7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uY29sLTEwIHtcclxuXHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstallationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-installation',
                templateUrl: './installation.component.html',
                styleUrls: ['./installation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "X48c":
/*!*******************************************************************!*\
  !*** ./src/app/documentation/cv/front-end/front-end.component.ts ***!
  \*******************************************************************/
/*! exports provided: FrontEndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontEndComponent", function() { return FrontEndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FrontEndComponent {
    constructor() { }
    ngOnInit() {
    }
}
FrontEndComponent.ɵfac = function FrontEndComponent_Factory(t) { return new (t || FrontEndComponent)(); };
FrontEndComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrontEndComponent, selectors: [["app-front-end"]], decls: 4, vars: 0, consts: [[1, "container-fluid", "footer-fix"], [1, "row", "justify-content-center"]], template: function FrontEndComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "front-end works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\r\n\r\n    color: #0874f9;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\r\n    width: 100%;\r\n\r\n}\r\n\r\n.col-10[_ngcontent-%COMP%] {\r\n\r\n    margin: auto;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250LWVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWM7O0FBRWxCOztBQUVBOztJQUVJLFdBQVc7O0FBRWY7O0FBRUE7O0lBRUksWUFBWTs7QUFFaEIiLCJmaWxlIjoiZnJvbnQtZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuXHJcbiAgICBjb2xvcjogIzA4NzRmOTtcclxuXHJcbn1cclxuXHJcbmltZyB7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uY29sLTEwIHtcclxuXHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontEndComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-front-end',
                templateUrl: './front-end.component.html',
                styleUrls: ['./front-end.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cJs1":
/*!*******************************************************!*\
  !*** ./src/app/documentation/cv/cv-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CvRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvRoutingModule", function() { return CvRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _back_end_back_end_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-end/back-end.component */ "3ZIm");
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration/configuration.component */ "EsCD");
/* harmony import */ var _cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cv.component */ "mjI+");
/* harmony import */ var _front_end_front_end_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front-end/front-end.component */ "X48c");
/* harmony import */ var _installation_installation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./installation/installation.component */ "II/G");









const routes = [
    { path: '', component: _cv_component__WEBPACK_IMPORTED_MODULE_4__["CvComponent"] },
    { path: 'installation', component: _installation_installation_component__WEBPACK_IMPORTED_MODULE_6__["InstallationComponent"] },
    { path: 'configuration', component: _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_3__["ConfigurationComponent"] },
    { path: 'front-end', component: _front_end_front_end_component__WEBPACK_IMPORTED_MODULE_5__["FrontEndComponent"] },
    { path: 'back-end', component: _back_end_back_end_component__WEBPACK_IMPORTED_MODULE_2__["BackEndComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
class CvRoutingModule {
}
CvRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CvRoutingModule });
CvRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CvRoutingModule_Factory(t) { return new (t || CvRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CvRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mjI+":
/*!**************************************************!*\
  !*** ./src/app/documentation/cv/cv.component.ts ***!
  \**************************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CvComponent {
    constructor() { }
    ngOnInit() {
    }
}
CvComponent.ɵfac = function CvComponent_Factory(t) { return new (t || CvComponent)(); };
CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvComponent, selectors: [["app-cv"]], decls: 67, vars: 0, consts: [[1, "container-fluid", "footer-fix"], [1, "row", "justify-content-center"], [1, "title"], [1, "col-10"], [1, "row"], [1, "col-md-6", "first-col"], ["id", "card", 1, "card", 2, "width", "100%"], [1, "flip-effect"], [1, "flip-front"], [1, "card-front-text"], [1, "bi", "bi-download"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "/documentation/cv/installation", 1, "btn", "back-btn", "btn-primary"], [1, "col-md-6"], [1, "bi", "bi-gear"], ["href", "/documentation/cv/configuration", 1, "btn", "back-btn", "btn-primary"], [1, "row", "second-row"], [1, "bi", "bi-code"], ["href", "/documentation/cv/front-end", 1, "btn", "back-btn", "btn-primary"], ["id", "card", 1, "card"], [1, "bi", "bi-code-square"], ["href", "/documentation/cv/back-end", 1, "btn", "back-btn", "btn-primary"]], template: function CvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Creation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Want to know where to start? Or just want to know how I did it? Or just want to know how to deploy your app with aws?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Go To Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Want to know what libraries I used? Or just want to know how to use them? Or just want to know how I organized the code?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Go To Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Front-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Front-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Want to know how is everything coded? Or just want to know how to do it responsive? Or just want to gather some ideas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Go To Front-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Back-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Back-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Want to know how do the animations work? Want to check how the chess board works? Or just want to grab a quick peek to the code?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Go To Back-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\r\n\r\n    background-color: #1a222e8f;\r\n    height: 15rem;\r\n    position: relative;\r\n    width: 100%;\r\n    border: none;\r\n\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n\r\n    transform: rotateY(180deg);\r\n    padding: 3rem 15px;\r\n\r\n}\r\n\r\n.flip-front[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%] {\r\n\r\n    -webkit-backface-visibility: hidden;\r\n\r\n            backface-visibility: hidden;\r\n    transition: transform 0.6s;\r\n    \r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n\r\n}\r\n\r\n.flip-effect[_ngcontent-%COMP%] {\r\n\r\n    text-align: center;\r\n    transition: transform 0.6s;\r\n    transform-style: preserve-3d;\r\n\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   .flip-effect[_ngcontent-%COMP%] {\r\n\r\n    transform: rotateY(180deg);\r\n\r\n}\r\n\r\n.second-row[_ngcontent-%COMP%] {\r\n\r\n    margin: 30px 0;\r\n\r\n}\r\n\r\n.card-front-text[_ngcontent-%COMP%] {\r\n\r\n    padding: 5.5rem 0;\r\n    font-size: 40px;\r\n\r\n}\r\n\r\n.back-btn[_ngcontent-%COMP%], .back-btn[_ngcontent-%COMP%]:focus, .back-btn[_ngcontent-%COMP%]:active {\r\n\r\n    margin-top: 15px;\r\n    background-color: white;\r\n    color: black;\r\n    border-color: transparent;\r\n\r\n    box-shadow: none;\r\n    outline: none;\r\n\r\n}\r\n\r\n.bi[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\r\n\r\n    font-size: 35px;\r\n\r\n}\r\n\r\n@media only screen and (max-width: 767px) { \r\n\r\n    .second-row[_ngcontent-%COMP%] {\r\n\r\n        margin: 0;\r\n\r\n    }\r\n\r\n    .col-md-6[_ngcontent-%COMP%] {\r\n\r\n        margin-top: 30px;\r\n\r\n    }\r\n\r\n    .first-col[_ngcontent-%COMP%] {\r\n\r\n        margin: 0;\r\n\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n    \r\n    .bi[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\r\n\r\n        font-size: 30px;\r\n\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 325px) {\r\n\r\n    .bi[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\r\n\r\n        font-size: 20px;\r\n\r\n    } \r\n\r\n}\r\n\r\n@media only screen and (max-width: 325px) { \r\n\r\n    .bi[_ngcontent-%COMP%] {\r\n\r\n        display: none;\r\n\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBOztJQUVJLDBCQUEwQjtJQUMxQixrQkFBa0I7O0FBRXRCOztBQUVBOztJQUVJLG1DQUEyQjs7WUFBM0IsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXOztBQUVmOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsNEJBQTRCOztBQUVoQzs7QUFFQTs7SUFFSSwwQkFBMEI7O0FBRTlCOztBQUVBOztJQUVJLGNBQWM7O0FBRWxCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBeUI7O0lBRXpCLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjs7QUFFQTs7SUFFSSxlQUFlOztBQUVuQjs7QUFFQTs7SUFFSTs7UUFFSSxTQUFTOztJQUViOztJQUVBOztRQUVJLGdCQUFnQjs7SUFFcEI7O0lBRUE7O1FBRUksU0FBUzs7SUFFYjs7QUFFSjs7QUFFQTs7SUFFSTs7UUFFSSxlQUFlOztJQUVuQjs7QUFFSjs7QUFFQTs7SUFFSTs7UUFFSSxlQUFlOztJQUVuQjs7QUFFSjs7QUFFQTs7SUFFSTs7UUFFSSxhQUFhOztJQUVqQjs7QUFFSiIsImZpbGUiOiJjdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTIyMmU4ZjtcclxuICAgIGhlaWdodDogMTVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG5cclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgcGFkZGluZzogM3JlbSAxNXB4O1xyXG5cclxufVxyXG5cclxuLmZsaXAtZnJvbnQsIC5jYXJkLWJvZHkge1xyXG5cclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5mbGlwLWVmZmVjdCB7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG5cclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmZsaXAtZWZmZWN0IHtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuXHJcbn1cclxuXHJcbi5zZWNvbmQtcm93IHtcclxuXHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuXHJcbn1cclxuXHJcbi5jYXJkLWZyb250LXRleHQge1xyXG5cclxuICAgIHBhZGRpbmc6IDUuNXJlbSAwO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG5cclxufVxyXG5cclxuLmJhY2stYnRuLCAuYmFjay1idG46Zm9jdXMsIC5iYWNrLWJ0bjphY3RpdmUge1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG59XHJcblxyXG4uYmksIHNwYW4ge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcblxyXG4gICAgLnNlY29uZC1yb3cge1xyXG5cclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtbWQtNiB7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5maXJzdC1jb2wge1xyXG5cclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgXHJcbiAgICAuYmksIHNwYW4ge1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjVweCkge1xyXG5cclxuICAgIC5iaSwgc3BhbiB7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICB9IFxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjVweCkgeyBcclxuXHJcbiAgICAuYmkge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cv',
                templateUrl: './cv.component.html',
                styleUrls: ['./cv.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=cv-cv-module.js.map