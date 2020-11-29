(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/router'), require('@angular/material/dialog'), require('@angular/common'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/observers'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/cdk/portal'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/form-field'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slide-toggle'), require('@angular/material/slider'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/stepper'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('httpeek', ['exports', '@angular/core', '@angular/common/http', '@angular/router', '@angular/material/dialog', '@angular/common', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/observers', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/cdk/portal', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/core', '@angular/material/datepicker', '@angular/material/divider', '@angular/material/expansion', '@angular/material/form-field', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slide-toggle', '@angular/material/slider', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/stepper', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/flex-layout'], factory) :
    (global = global || self, factory(global.httpeek = {}, global.ng.core, global.ng.common.http, global.ng.router, global.ng.material.dialog, global.ng.common, global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.cdk.observers, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.cdk.portal, global.ng.cdk.stepper, global.ng.cdk.table, global.ng.cdk.tree, global.ng.material.autocomplete, global.ng.material.badge, global.ng.material.bottomSheet, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.card, global.ng.material.checkbox, global.ng.material.chips, global.ng.material.core, global.ng.material.datepicker, global.ng.material.divider, global.ng.material.expansion, global.ng.material.formField, global.ng.material.gridList, global.ng.material.icon, global.ng.material.input, global.ng.material.list, global.ng.material.menu, global.ng.material.paginator, global.ng.material.progressBar, global.ng.material.progressSpinner, global.ng.material.radio, global.ng.material.select, global.ng.material.sidenav, global.ng.material.slideToggle, global.ng.material.slider, global.ng.material.snackBar, global.ng.material.sort, global.ng.material.stepper, global.ng.material.table, global.ng.material.tabs, global.ng.material.toolbar, global.ng.material.tooltip, global.ng.material.tree, global.ng.flexLayout));
}(this, (function (exports, core, http, router, dialog, common, a11y, bidi, observers, overlay, platform, portal, stepper, table, tree, autocomplete, badge, bottomSheet, button, buttonToggle, card, checkbox, chips, core$1, datepicker, divider, expansion, formField, gridList, icon, input, list, menu, paginator, progressBar, progressSpinner, radio, select, sidenav, slideToggle, slider, snackBar, sort, stepper$1, table$1, tabs, toolbar, tooltip, tree$1, flexLayout) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var httpeekService = /** @class */ (function () {
        function httpeekService() {
        }
        httpeekService.ɵprov = core.ɵɵdefineInjectable({ factory: function httpeekService_Factory() { return new httpeekService(); }, token: httpeekService, providedIn: "root" });
        httpeekService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], httpeekService);
        return httpeekService;
    }());

    var ApiService = /** @class */ (function () {
        function ApiService(http, router) {
            this.http = http;
            this.router = router;
            this.apiModuleBusy = document.getElementById('ApiModuleBusy');
            this.emptyResponse = { error: 'Request returned empty response' };
        }
        ApiService_1 = ApiService;
        ApiService.prototype.unauth = function () {
            localStorage.removeItem('authToken');
            if (this.router.url !== '/Login' && this.router.url !== '/Setup') {
                this.router.navigateByUrl('/Login');
            }
        };
        ApiService.prototype.setBusy = function () {
            this.apiModuleBusy.style.display = 'block';
        };
        ApiService.prototype.setNotBusy = function () {
            this.apiModuleBusy.style.display = 'none';
        };
        ApiService.prototype.request = function (payload, callback) {
            var _this = this;
            this.setBusy();
            var resp;
            this.http.post('/api/module/request', payload).subscribe(function (r) {
                if (r === undefined || r === null) {
                    resp = _this.emptyResponse;
                }
                resp = r.payload;
            }, function (err) {
                resp = err.error;
                if (err.status === 401) {
                    _this.unauth();
                }
                _this.setNotBusy();
                callback(resp);
            }, function () {
                _this.setNotBusy();
                callback(resp);
            });
            ApiService_1.totalRequests++;
        };
        ApiService.prototype.APIGet = function (path, callback) {
            var _this = this;
            ApiService_1.totalRequests++;
            var resp;
            this.http.get(path).subscribe(function (r) {
                if (r === undefined || r === null) {
                    r = _this.emptyResponse;
                }
                resp = r;
            }, function (err) {
                resp = err.error;
                if (err.status === 401) {
                    _this.unauth();
                }
                callback(resp);
            }, function () {
                callback(resp);
            });
        };
        ApiService.prototype.APIGetAsync = function (path) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ApiService_1.totalRequests++;
                            return [4 /*yield*/, this.http.get(path).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ApiService.prototype.APIPut = function (path, body, callback) {
            var _this = this;
            ApiService_1.totalRequests++;
            var resp;
            this.http.put(path, body).subscribe(function (r) {
                if (r === undefined || r === null) {
                    r = _this.emptyResponse;
                }
                resp = r;
            }, function (err) {
                resp = err.error;
                if (err.status === 401) {
                    _this.unauth();
                }
                callback(resp);
            }, function () {
                callback(resp);
            });
        };
        ApiService.prototype.APIPutAsync = function (path, body) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.put(path, body).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ApiService.prototype.APIPost = function (path, body, callback) {
            var _this = this;
            ApiService_1.totalRequests++;
            var resp;
            this.http.post(path, body).subscribe(function (r) {
                if (r === undefined || r === null) {
                    resp = _this.emptyResponse;
                }
                resp = r;
            }, function (err) {
                resp = err.error;
                if (err.status === 401) {
                    _this.unauth();
                }
                callback(resp);
            }, function () {
                callback(resp);
            });
        };
        ApiService.prototype.APIPostAsync = function (path, body) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.post(path, body).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ApiService.prototype.APIDelete = function (path, body, callback) {
            var _this = this;
            ApiService_1.totalRequests++;
            var opts = {
                headers: null,
                body: body
            };
            var resp;
            this.http.delete(path, opts).subscribe(function (r) {
                if (r === undefined || r === null) {
                    r = _this.emptyResponse;
                }
                resp = r;
            }, function (err) {
                resp = err.error;
                if (err.status === 401) {
                    _this.unauth();
                }
                callback(resp);
            }, function () {
                callback(resp);
            });
        };
        ApiService.prototype.APIDeleteAsync = function (path, body) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.http.delete(path, body).toPromise()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ApiService.prototype.APIDownload = function (fullpath, filename) {
            ApiService_1.totalRequests++;
            var body = {
                filename: fullpath
            };
            this.http.post('/api/download', body, { responseType: 'blob' }).subscribe(function (r) {
                var url = window.URL.createObjectURL(r);
                var a = document.createElement('a');
                document.body.appendChild(a);
                a.setAttribute('style', 'display: none');
                a.href = url;
                a.download = filename;
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
            });
        };
        var ApiService_1;
        ApiService.totalRequests = 0;
        ApiService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: router.Router }
        ]; };
        ApiService.ɵprov = core.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(router.Router)); }, token: ApiService, providedIn: "root" });
        ApiService = ApiService_1 = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], ApiService);
        return ApiService;
    }());

    var ErrorDialogComponent = /** @class */ (function () {
        function ErrorDialogComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.message = data;
        }
        ErrorDialogComponent.prototype.closeDialog = function () {
            this.dialogRef.close();
        };
        ErrorDialogComponent.prototype.ngOnInit = function () {
        };
        ErrorDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef },
            { type: String, decorators: [{ type: core.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
        ]; };
        ErrorDialogComponent = __decorate([
            core.Component({
                selector: 'lib-error-dialog',
                template: "<div class=\"right-left-split-container\">\n    <mat-card-title>Error</mat-card-title>\n    <span fxFlex></span>\n    <button mat-icon-button>\n        <mat-icon (click)=\"closeDialog();\">close</mat-icon>\n    </button>\n</div>\n\n<mat-divider></mat-divider>\n\n<div>\n    <p>{{ message }}</p>\n    <div class=\"error-dialog-buttons\">\n        <span fxFlex></span>\n        <button mat-raised-button color=\"accent\" class=\"error-dialog-button-first\" (click)=\"closeDialog();\">\n            Okay\n        </button>\n    </div>\n</div>\n",
                styles: [".error-dialog-buttons{margin-top:16px}"]
            }),
            __param(1, core.Inject(dialog.MAT_DIALOG_DATA))
        ], ErrorDialogComponent);
        return ErrorDialogComponent;
    }());

    var HTTPeekComponent = /** @class */ (function () {
        function HTTPeekComponent(API, dialog) {
            this.API = API;
            this.dialog = dialog;
            this.isBusy = false;
            this.snifferEnabled = false;
            this.listening = false;
            this.websocket = null;
            this.urls = [];
            this.images = [];
            this.cookies = [];
            this.postData = [];
        }
        HTTPeekComponent.prototype.handleError = function (msg) {
            this.dialog.closeAll();
            this.dialog.open(ErrorDialogComponent, {
                width: '400px',
                hasBackdrop: true,
                data: msg
            });
        };
        HTTPeekComponent.prototype.createWebsocket = function (component) {
            if (this.websocket !== null) {
                this.stopWebsocket();
            }
            component.isBusy = true;
            component.websocket = new WebSocket("ws://" + window.location.hostname + ":9999/");
            component.websocket.onerror = function () {
                component.websocket.onclose = (function () { });
                component.stopWebsocket();
                component.startWebsocket();
            };
            component.websocket.onopen = function () {
                component.listening = true;
                component.isBusy = false;
            };
            component.websocket.onclose = function () {
                component.isBusy = false;
                component.listening = false;
            };
            component.websocket.onmessage = function (message) {
                var data = JSON.parse(message.data);
                if (data['image'] !== undefined) {
                    component.images.unshift({
                        client: data['from'],
                        data: data['image']
                    });
                }
                else {
                    component.urls.unshift({
                        client: data['from'],
                        data: encodeURI(data['url'])
                    });
                }
                if (data['cookie'] !== undefined) {
                    component.cookies.unshift({
                        client: data['from'],
                        data: data['cookie']
                    });
                }
                if (data['post'] !== undefined) {
                    component.postData.unshift({
                        client: data['from'],
                        data: data['post']
                    });
                }
            };
        };
        HTTPeekComponent.prototype.startWebsocket = function () {
            this.createWebsocket(this);
        };
        HTTPeekComponent.prototype.stopWebsocket = function () {
            if (this.websocket !== null) {
                this.websocket.onclose = (function () { });
                this.websocket.close();
                this.websocket = null;
            }
            this.listening = false;
        };
        HTTPeekComponent.prototype.loadStatus = function () {
            var _this = this;
            this.isBusy = true;
            this.API.request({
                module: 'httpeek',
                action: 'status'
            }, function (response) {
                _this.isBusy = false;
                if (response.error !== undefined) {
                    _this.handleError(response);
                    return;
                }
                _this.snifferEnabled = response;
            });
        };
        HTTPeekComponent.prototype.toggleSniffer = function (enable) {
            var _this = this;
            this.isBusy = true;
            this.API.request({
                module: 'httpeek',
                action: 'toggle',
                enable: enable
            }, function (response) {
                _this.isBusy = false;
                _this.loadStatus();
                if (response.error !== undefined) {
                    _this.handleError(response);
                    return;
                }
                if (!enable) {
                    _this.stopWebsocket();
                }
            });
        };
        HTTPeekComponent.prototype.ngOnInit = function () {
            this.loadStatus();
        };
        HTTPeekComponent.prototype.ngOnDestroy = function () {
            this.stopWebsocket();
        };
        HTTPeekComponent.ctorParameters = function () { return [
            { type: ApiService },
            { type: dialog.MatDialog }
        ]; };
        HTTPeekComponent = __decorate([
            core.Component({
                selector: 'lib-httpeek',
                template: "<div class=\"card-container\">\n    <div class=\"container\" fxLayoutGap=\"20px\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\">\n\n        <!-- Left Section -->\n        <div class=\"left-controls\" fxLayoutGap=\"20px\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayout.sm=\"column\">\n            <mat-card class=\"control-card\">\n                <mat-card-content>\n                    <div class=\"right-left-split-container\">\n                        <mat-card-title>HTTPeek</mat-card-title>\n                        <span fxFlex></span>\n                        <span *ngIf=\"isBusy\"><mat-spinner [diameter]=\"24\" color=\"accent\" style=\"margin-left: 8px\"></mat-spinner></span>\n                    </div>\n                    <br/>\n                    <div class=\"right-left-split-container\">\n                        <b *ngIf=\"!snifferEnabled\">Sniffer is not enabled</b>\n                        <b *ngIf=\"snifferEnabled\">Sniffer is enabled</b>\n                        <span fxFlex></span>\n                        <button mat-raised-button\n                                color=\"accent\"\n                                (click)=\"toggleSniffer(true);\"\n                                [disabled]=\"isBusy\"\n                                *ngIf=\"!snifferEnabled\">\n                            Enable\n                        </button>\n                        <button mat-raised-button\n                                color=\"warn\"\n                                (click)=\"toggleSniffer(false);\"\n                                [disabled]=\"isBusy\"\n                                *ngIf=\"snifferEnabled\">\n                            Disable\n                        </button>\n                    </div>\n\n                    <br/>\n                    <br/>\n\n                    <div class=\"right-left-split-container\" *ngIf=\"snifferEnabled\">\n                        <b *ngIf=\"!listening\">Not listening</b>\n                        <b *ngIf=\"listening\">Currently Listening</b>\n                        <span fxFlex></span>\n                        <button mat-raised-button\n                                color=\"accent\"\n                                (click)=\"startWebsocket();\"\n                                [disabled]=\"isBusy\"\n                                *ngIf=\"!listening\">\n                            Start\n                        </button>\n                        <button mat-raised-button\n                                color=\"warn\"\n                                (click)=\"stopWebsocket();\"\n                                [disabled]=\"isBusy\"\n                                *ngIf=\"listening\">\n                            Stop\n                        </button>\n                    </div>\n\n                </mat-card-content>\n            </mat-card>\n            <mat-card class=\"control-card\">\n                <mat-card-content>\n                    <mat-card-title>URLs</mat-card-title>\n                    <div class=\"data-container\">\n                        <mat-table style=\"display: none\">\n                            <mat-header-row *matHeaderRowDef=\"[]\"></mat-header-row>\n                        </mat-table>\n\n                        <table class=\"mat-table\" style=\"min-width: 100%; overflow-x: auto; justify-content: left;\" *ngIf=\"urls.length > 0;\">\n                            <thead class=\"mat-header-row\">\n                            <th class=\"mat-header-cell\">Client</th>\n                            <th class=\"mat-header-cell\">URL</th>\n                            </thead>\n                            <tbody>\n                            <ng-container *ngFor=\"let u of urls\">\n                                <tr class=\"mat-row\">\n                                    <td class=\"mat-cell\">{{ u.client }}</td>\n                                    <td class=\"mat-cell\">{{ u.data }}</td>\n                                </tr>\n                            </ng-container>\n                            </tbody>\n                        </table>\n                    </div>\n                </mat-card-content>\n            </mat-card>\n            <mat-card class=\"control-card\">\n                <mat-card-content>\n                    <mat-card-title>Cookies</mat-card-title>\n                    <div class=\"data-container\">\n                        <table class=\"mat-table\" style=\"min-width: 100%; overflow-x: auto; justify-content: left;\" *ngIf=\"cookies.length > 0;\">\n                            <thead class=\"mat-header-row\">\n                            <th class=\"mat-header-cell\">Client</th>\n                            <th class=\"mat-header-cell\">Cookie</th>\n                            </thead>\n                            <tbody>\n                            <ng-container *ngFor=\"let c of cookies\">\n                                <tr class=\"mat-row\">\n                                    <td class=\"mat-cell\">{{ c.client }}</td>\n                                    <td class=\"mat-cell\">{{ c.data }}</td>\n                                </tr>\n                            </ng-container>\n                            </tbody>\n                        </table>\n                    </div>\n                </mat-card-content>\n            </mat-card>\n            <mat-card class=\"control-card\">\n                <mat-card-content>\n                    <mat-card-title>Post Data</mat-card-title>\n                    <div class=\"data-container\">\n                        <mat-table style=\"display: none\">\n                            <mat-header-row *matHeaderRowDef=\"[]\"></mat-header-row>\n                        </mat-table>\n                        <table class=\"mat-table\" style=\"min-width: 100%; overflow-x: auto; justify-content: left;\" *ngIf=\"postData.length > 0;\">\n                            <thead class=\"mat-header-row\">\n                            <th class=\"mat-header-cell\">Client</th>\n                            <th class=\"mat-header-cell\">Data</th>\n                            </thead>\n                            <tbody>\n                            <ng-container *ngFor=\"let p of postData\">\n                                <tr class=\"mat-row\">\n                                    <td class=\"mat-cell\">{{ p.client }}</td>\n                                    <td class=\"mat-cell\">{{ p.data }}</td>\n                                </tr>\n                            </ng-container>\n                            </tbody>\n                        </table>\n                    </div>\n                </mat-card-content>\n            </mat-card>\n        </div>\n\n        <!-- Right Section -->\n        <div class=\"right-controls\">\n            <mat-card>\n                <mat-card-content>\n                    <mat-card-title>Images</mat-card-title>\n                    <ng-container *ngFor=\"let image of images\">\n                        <img src=\"{{image.data}}\"/>\n                    </ng-container>\n                </mat-card-content>\n            </mat-card>\n        </div>\n\n    </div>\n\n</div>\n\n",
                styles: [".right-left-split-container{display:flex;flex-direction:row;justify-content:flex-start;align-self:flex-start}.card-container{display:flex;flex-direction:column;justify-content:center}.control-card{max-width:100%}.container{display:flex}.right-controls{flex:1;flex-wrap:wrap;justify-content:space-between;max-width:50%;padding-left:10px}.left-controls{flex:1;flex-wrap:wrap;justify-content:space-between;max-width:50%;padding-right:10px}.data-container{max-height:250px;max-width:100%;overflow-y:auto}"]
            })
        ], HTTPeekComponent);
        return HTTPeekComponent;
    }());

    /*
     * Copyright (c) 2018 Hak5 LLC.
     */
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                exports: [
                    // CDK
                    a11y.A11yModule,
                    bidi.BidiModule,
                    observers.ObserversModule,
                    overlay.OverlayModule,
                    platform.PlatformModule,
                    portal.PortalModule,
                    stepper.CdkStepperModule,
                    table.CdkTableModule,
                    tree.CdkTreeModule,
                    // Material
                    autocomplete.MatAutocompleteModule,
                    badge.MatBadgeModule,
                    bottomSheet.MatBottomSheetModule,
                    button.MatButtonModule,
                    buttonToggle.MatButtonToggleModule,
                    card.MatCardModule,
                    checkbox.MatCheckboxModule,
                    chips.MatChipsModule,
                    datepicker.MatDatepickerModule,
                    dialog.MatDialogModule,
                    divider.MatDividerModule,
                    expansion.MatExpansionModule,
                    formField.MatFormFieldModule,
                    gridList.MatGridListModule,
                    icon.MatIconModule,
                    input.MatInputModule,
                    list.MatListModule,
                    menu.MatMenuModule,
                    core$1.MatNativeDateModule,
                    paginator.MatPaginatorModule,
                    progressBar.MatProgressBarModule,
                    progressSpinner.MatProgressSpinnerModule,
                    radio.MatRadioModule,
                    core$1.MatRippleModule,
                    select.MatSelectModule,
                    sidenav.MatSidenavModule,
                    slider.MatSliderModule,
                    slideToggle.MatSlideToggleModule,
                    snackBar.MatSnackBarModule,
                    sort.MatSortModule,
                    stepper$1.MatStepperModule,
                    table$1.MatTableModule,
                    tabs.MatTabsModule,
                    toolbar.MatToolbarModule,
                    tooltip.MatTooltipModule,
                    tree$1.MatTreeModule,
                ],
                declarations: []
            })
        ], MaterialModule);
        return MaterialModule;
    }());

    var routes = [
        { path: '', component: HTTPeekComponent }
    ];
    var httpeekModule = /** @class */ (function () {
        function httpeekModule() {
        }
        httpeekModule = __decorate([
            core.NgModule({
                declarations: [HTTPeekComponent, ErrorDialogComponent],
                imports: [
                    common.CommonModule,
                    router.RouterModule.forChild(routes),
                    MaterialModule,
                    flexLayout.FlexLayoutModule
                ],
                exports: [HTTPeekComponent],
                entryComponents: [ErrorDialogComponent]
            })
        ], httpeekModule);
        return httpeekModule;
    }());

    exports.HTTPeekComponent = HTTPeekComponent;
    exports.httpeekModule = httpeekModule;
    exports.httpeekService = httpeekService;
    exports.ɵa = ApiService;
    exports.ɵb = ErrorDialogComponent;
    exports.ɵc = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=httpeek.umd.js.map
