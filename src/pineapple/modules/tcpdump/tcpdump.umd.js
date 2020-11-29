(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/observers'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/cdk/portal'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/form-field'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slide-toggle'), require('@angular/material/slider'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/stepper'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/flex-layout'), require('@angular/common/http'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('tcpdump', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/observers', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/cdk/portal', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/core', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/form-field', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slide-toggle', '@angular/material/slider', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/stepper', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/flex-layout', '@angular/common/http', '@angular/forms'], factory) :
    (global = global || self, factory(global.tcpdump = {}, global.ng.core, global.ng.common, global.ng.router, global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.cdk.observers, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.cdk.portal, global.ng.cdk.stepper, global.ng.cdk.table, global.ng.cdk.tree, global.ng.material.autocomplete, global.ng.material.badge, global.ng.material.bottomSheet, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.card, global.ng.material.checkbox, global.ng.material.chips, global.ng.material.core, global.ng.material.datepicker, global.ng.material.dialog, global.ng.material.divider, global.ng.material.expansion, global.ng.material.formField, global.ng.material.gridList, global.ng.material.icon, global.ng.material.input, global.ng.material.list, global.ng.material.menu, global.ng.material.paginator, global.ng.material.progressBar, global.ng.material.progressSpinner, global.ng.material.radio, global.ng.material.select, global.ng.material.sidenav, global.ng.material.slideToggle, global.ng.material.slider, global.ng.material.snackBar, global.ng.material.sort, global.ng.material.stepper, global.ng.material.table, global.ng.material.tabs, global.ng.material.toolbar, global.ng.material.tooltip, global.ng.material.tree, global.ng.flexLayout, global.ng.common.http, global.ng.forms));
}(this, (function (exports, core, common, router, a11y, bidi, observers, overlay, platform, portal, stepper, table, tree, autocomplete, badge, bottomSheet, button, buttonToggle, card, checkbox, chips, core$1, datepicker, dialog, divider, expansion, formField, gridList, icon, input, list, menu, paginator, progressBar, progressSpinner, radio, select, sidenav, slideToggle, slider, snackBar, sort, stepper$1, table$1, tabs, toolbar, tooltip, tree$1, flexLayout, http, forms) { 'use strict';

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

    var tcpdumpService = /** @class */ (function () {
        function tcpdumpService() {
        }
        tcpdumpService.ɵprov = core.ɵɵdefineInjectable({ factory: function tcpdumpService_Factory() { return new tcpdumpService(); }, token: tcpdumpService, providedIn: "root" });
        tcpdumpService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], tcpdumpService);
        return tcpdumpService;
    }());

    var TcpdumpComponent = /** @class */ (function () {
        function TcpdumpComponent() {
            this.navLinks = [
                {
                    label: 'TCPDump',
                    link: './',
                    index: 0
                },
                {
                    label: 'History',
                    link: './history',
                    index: 1
                },
            ];
        }
        TcpdumpComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.ViewChild('rla')
        ], TcpdumpComponent.prototype, "rla", void 0);
        TcpdumpComponent = __decorate([
            core.Component({
                selector: 'lib-tcpdump',
                template: "<nav mat-tab-nav-bar color=\"accent\">\n    <a mat-tab-link\n       *ngFor=\"let link of navLinks\"\n       [routerLink]=\"link.link\"\n       routerLinkActive #rla=\"routerLinkActive\"\n       [routerLinkActiveOptions]=\"{exact: true}\"\n       [active]=\"rla.isActive\">\n        <mat-icon *ngIf=\"link.label === 'TCPDump'\">\n            <svg style=\"width:24px;height:24px\">\n                <path d=\"M 17 3 C 18.105469 3 19 3.894531 19 5 L 19 15 C 19 16.105469 18.105469 17 17 17 L 13 17 L 13 19 L 14 19 C 14.550781 19 15 19.449219 15 20 L 22 20 L 22 22 L 15 22 C 15 22.550781 14.550781 23 14 23 L 10 23 C 9.449219 23 9 22.550781 9 22 L 2 22 L 2 20 L 9 20 C 9 19.449219 9.449219 19 10 19 L 11 19 L 11 17 L 7 17 C 5.890625 17 5 16.101562 5 15 L 5 5 C 5 3.894531 5.894531 3 7 3 L 17 3 M 12 14.5 L 16.5 10 L 13 10 L 13 6 L 11 6 L 11 10 L 7.5 10 Z M 12 14.5 \"></path>\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"link.label === 'History'\">\n            <svg style=\"width:24px;height:24px\">\n                <path d=\"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z\" />\n            </svg>\n        </mat-icon>\n        <div [fxShow.sm]=\"false\" [fxShow.xs]=\"false\">\n            &nbsp;&nbsp;\n            {{ link.label }}\n        </div>\n    </a>\n</nav>\n<br/>\n<div>\n    <router-outlet></router-outlet>\n</div>\n",
                styles: [""]
            })
        ], TcpdumpComponent);
        return TcpdumpComponent;
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
            this.message = data.message;
        }
        ErrorDialogComponent.prototype.closeDialog = function () {
            this.dialogRef.close();
        };
        ErrorDialogComponent.prototype.ngOnInit = function () {
        };
        ErrorDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
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

    var UninstallDialogComponent = /** @class */ (function () {
        function UninstallDialogComponent(dialogRef, API, dialog, data) {
            this.dialogRef = dialogRef;
            this.API = API;
            this.dialog = dialog;
            this.data = data;
            this.isBusy = false;
            this.backgroundJobInterval = null;
        }
        UninstallDialogComponent.prototype.handleError = function (msg) {
            this.closeDialog();
            this.dialog.open(ErrorDialogComponent, {
                hasBackdrop: true,
                width: '900px',
                data: {
                    message: msg
                }
            });
        };
        UninstallDialogComponent.prototype.pollBackgroundJob = function (jobId, onComplete) {
            var _this = this;
            this.backgroundJobInterval = setInterval(function () {
                _this.API.request({
                    module: 'tcpdump',
                    action: 'check_background_job',
                    job_id: jobId
                }, function (response) {
                    if (response.is_complete) {
                        onComplete(response);
                        clearInterval(_this.backgroundJobInterval);
                    }
                });
            }, 5000);
        };
        UninstallDialogComponent.prototype.closeDialog = function () {
            if (this.isBusy) {
                return;
            }
            this.dialogRef.close();
        };
        UninstallDialogComponent.prototype.removeDependencies = function () {
            var _this = this;
            this.API.request({
                module: 'tcpdump',
                action: 'manage_dependencies',
                install: false
            }, function (response) {
                if (response.error) {
                    _this.handleError(response.error);
                    return;
                }
                _this.isBusy = true;
                _this.pollBackgroundJob(response.job_id, function (result) {
                    _this.isBusy = false;
                    if (result.job_error !== null) {
                        _this.handleError(result.job_error);
                        return;
                    }
                    _this.data.onComplete();
                    _this.closeDialog();
                });
            });
        };
        UninstallDialogComponent.prototype.ngOnInit = function () {
        };
        UninstallDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef },
            { type: ApiService },
            { type: dialog.MatDialog },
            { type: undefined, decorators: [{ type: core.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
        ]; };
        UninstallDialogComponent = __decorate([
            core.Component({
                selector: 'lib-uninstall-dialog',
                template: "<div class=\"right-left-split-container\">\n    <h1 mat-dialog-title>Uninstall Dependencies?</h1>\n    <span fxFlex></span>\n    <button mat-icon-button (click)=\"closeDialog();\" [disabled]=\"isBusy\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>\n\n<mat-divider></mat-divider>\n<br/>\n\n<div>\n    <p>You are about to uninstall dependencies for this module. You'll still be able to access your history\n        but will be unable to preform new packet captures.</p>\n    <p>Do you want to continue?</p>\n\n    <br/>\n    <div class=\"dependency-card-centered\">\n        <button mat-raised-button color=\"warn\"\n                class=\"dependency-card-button\"\n                (click)=\"removeDependencies();\"\n                [disabled]=\"isBusy\">\n                    <span *ngIf=\"isBusy\">\n                        <mat-spinner [diameter]=\"20\" class=\"spinner-padding\" color=\"accent\"></mat-spinner>\n                    </span>\n            <span *ngIf=\"!isBusy\">\n                        Uninstall Dependencies\n                    </span>\n        </button>\n    </div>\n</div>\n",
                styles: [".right-left-split-container{display:flex;flex-direction:row;justify-content:flex-start;align-self:flex-start}.dependency-card-centered{display:flex;justify-content:center;align-self:center}.dependency-card-button{width:50%;display:flex;justify-content:center;align-items:center}.spinner-padding{margin-top:6px;margin-bottom:7px}"]
            }),
            __param(3, core.Inject(dialog.MAT_DIALOG_DATA))
        ], UninstallDialogComponent);
        return UninstallDialogComponent;
    }());

    var LicenseDialogComponent = /** @class */ (function () {
        function LicenseDialogComponent(dialogRef) {
            this.dialogRef = dialogRef;
        }
        LicenseDialogComponent.prototype.closeDialog = function () {
            this.dialogRef.close();
        };
        LicenseDialogComponent.prototype.ngOnInit = function () {
        };
        LicenseDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef }
        ]; };
        LicenseDialogComponent = __decorate([
            core.Component({
                selector: 'lib-license-dialog',
                template: "<div class=\"right-left-split-container\">\n    <h1 mat-dialog-title>TCPDump License</h1>\n    <span fxFlex></span>\n    <button mat-icon-button (click)=\"closeDialog();\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>\n\n<mat-divider></mat-divider>\n<br/>\n\n<div>\n    <textarea class=\"legal-textarea\" readonly>\nLicense: BSD\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions\nare met:\n\n  1. Redistributions of source code must retain the above copyright\n     notice, this list of conditions and the following disclaimer.\n  2. Redistributions in binary form must reproduce the above copyright\n     notice, this list of conditions and the following disclaimer in\n     the documentation and/or other materials provided with the\n     distribution.\n  3. The names of the authors may not be used to endorse or promote\n     products derived from this software without specific prior\n     written permission.\n\nTHIS SOFTWARE IS PROVIDED ``AS IS'' AND WITHOUT ANY EXPRESS OR\nIMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED\nWARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.\n    </textarea>\n</div>\n",
                styles: [".legal-textarea{width:100%;min-height:480px;resize:none;margin:0 0 5px;padding:0;background-color:#efefef;border-radius:2px;border-color:#cecece;max-lines:50}"]
            })
        ], LicenseDialogComponent);
        return LicenseDialogComponent;
    }());

    var TcpdumpMainComponent = /** @class */ (function () {
        function TcpdumpMainComponent(API, dialog) {
            this.API = API;
            this.dialog = dialog;
            this.hasDependencies = true;
            this.isInstalling = false;
            this.interfaces = [];
            this.isFetchingOutput = false;
            this.isCapturing = false;
            this.captureFileName = null;
            this.captureOutput = null;
            this.backgroundJobInterval = null;
            this.tcpDumpState = {
                command: 'tcpdump ',
                selectedInterface: '',
                filter: '',
                timestamp: '',
                resolve: '',
                verbose: ''
            };
            this.optionsState = {
                dontPrintHostName: { toggled: false, value: '-N' },
                showHexAndASCII: { toggled: false, value: '-X' },
                printAbsoluteNumbers: { toggled: false, value: '-S' },
                getEthernetHeaders: { toggled: false, value: '-e' },
                lessProtocolInfo: { toggled: false, value: '-q' },
                monitorMode: { toggled: false, value: '-I' },
            };
        }
        TcpdumpMainComponent.prototype.handleError = function (msg) {
            this.dialog.closeAll();
            this.dialog.open(ErrorDialogComponent, {
                hasBackdrop: true,
                width: '500px',
                data: {
                    message: msg
                }
            });
        };
        TcpdumpMainComponent.prototype.pollBackgroundJob = function (jobId, onComplete, onInterval) {
            var _this = this;
            this.backgroundJobInterval = setInterval(function () {
                _this.API.request({
                    module: 'tcpdump',
                    action: 'poll_job',
                    job_id: jobId
                }, function (response) {
                    if (response.is_complete) {
                        onComplete(response);
                        clearInterval(_this.backgroundJobInterval);
                    }
                    else if (onInterval) {
                        onInterval();
                    }
                });
            }, 5000);
        };
        TcpdumpMainComponent.prototype.getLogContent = function () {
            var _this = this;
            this.isFetchingOutput = true;
            this.API.request({
                module: 'tcpdump',
                action: 'get_log_content',
            }, function (response) {
                _this.isFetchingOutput = false;
                if (response.error) {
                    _this.handleError(response.error);
                    return;
                }
                _this.captureOutput = response;
            });
        };
        TcpdumpMainComponent.prototype.downloadPcap = function () {
            this.API.APIDownload('/root/.tcpdump/' + this.captureFileName, this.captureFileName);
        };
        TcpdumpMainComponent.prototype.monitorCaptureJob = function (jobId, captureFile) {
            var _this = this;
            this.isCapturing = true;
            this.captureFileName = captureFile;
            this.pollBackgroundJob(jobId, function (result) {
                _this.isCapturing = false;
                _this.getLogContent();
                if (result.job_error) {
                    _this.handleError(result.job_error);
                }
            }, function () {
                _this.getLogContent();
            });
        };
        TcpdumpMainComponent.prototype.startCapture = function () {
            var _this = this;
            this.isCapturing = true;
            this.API.request({
                module: 'tcpdump',
                action: 'start_capture',
                command: this.tcpDumpState.command
            }, function (response) {
                if (response.error !== undefined) {
                    _this.isCapturing = false;
                    _this.handleError(response.error);
                    return;
                }
                _this.monitorCaptureJob(response.job_id, response.output_file);
            });
        };
        TcpdumpMainComponent.prototype.stopCapture = function () {
            var _this = this;
            this.API.request({
                module: 'tcpdump',
                action: 'stop_capture'
            }, function (response) {
                if (response.error !== undefined) {
                    _this.handleError(response.error);
                    return;
                }
                _this.isCapturing = false;
            });
        };
        TcpdumpMainComponent.prototype.checkForDependencies = function () {
            var _this = this;
            this.API.request({
                module: 'tcpdump',
                action: 'check_dependencies'
            }, function (response) {
                if (response.error !== undefined) {
                    _this.handleError(response.error);
                    return;
                }
                _this.hasDependencies = response;
            });
        };
        TcpdumpMainComponent.prototype.monitorDependencies = function (jobId) {
            var _this = this;
            this.isInstalling = true;
            this.pollBackgroundJob(jobId, function (result) {
                _this.isInstalling = false;
                if (result.job_error !== null) {
                    _this.handleError(result.job_error);
                }
                _this.checkForDependencies();
            });
        };
        TcpdumpMainComponent.prototype.installDependencies = function () {
            var _this = this;
            this.API.request({
                module: 'tcpdump',
                action: 'manage_dependencies',
                install: true
            }, function (response) {
                if (response.error !== undefined && response.error !== null) {
                    _this.handleError(response.error);
                    return;
                }
                _this.monitorDependencies(response.job_id);
            });
        };
        TcpdumpMainComponent.prototype.showUninstallDialog = function () {
            var _this = this;
            this.dialog.open(UninstallDialogComponent, {
                hasBackdrop: true,
                width: '700px',
                disableClose: true,
                data: {
                    onComplete: function () {
                        _this.checkForDependencies();
                    }
                }
            });
        };
        TcpdumpMainComponent.prototype.update = function () {
            this.tcpDumpState.command = 'tcpdump ' + this.updateInterface() + this.updateVerbose() +
                this.updateResolve() + this.updateTimestamp() + this.updateOptions();
            if (this.tcpDumpState.filter !== '' && this.tcpDumpState.filter !== undefined) {
                this.tcpDumpState.command += '\'' + this.tcpDumpState.filter + '\'';
            }
        };
        TcpdumpMainComponent.prototype.appendFilter = function (value) {
            var filter = this.tcpDumpState.filter;
            if (filter.substr(filter.length - 1) != ' ' && filter.length != 0) {
                this.tcpDumpState.filter = filter + ' ' + value;
            }
            else {
                this.tcpDumpState.filter = filter + value;
            }
            this.update();
        };
        TcpdumpMainComponent.prototype.updateInterface = function () {
            var iface = this.tcpDumpState.selectedInterface;
            return (iface !== '' && iface !== undefined) ? '-i ' + iface + ' ' : '';
        };
        TcpdumpMainComponent.prototype.updateOptions = function () {
            var e_1, _a;
            var returnValue = '';
            try {
                for (var _b = __values(Object.values(this.optionsState)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var option = _c.value;
                    if (option.toggled) {
                        returnValue += option.value + ' ';
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return returnValue;
        };
        TcpdumpMainComponent.prototype.updateVerbose = function () {
            var verbose = this.tcpDumpState.verbose;
            return (verbose !== '' && verbose !== undefined) ? verbose + ' ' : '';
        };
        TcpdumpMainComponent.prototype.updateResolve = function () {
            var resolve = this.tcpDumpState.resolve;
            return (resolve !== '' && resolve !== undefined) ? resolve + ' ' : '';
        };
        TcpdumpMainComponent.prototype.updateTimestamp = function () {
            var timestamp = this.tcpDumpState.timestamp;
            return (timestamp !== '' && timestamp !== undefined) ? timestamp + ' ' : '';
        };
        TcpdumpMainComponent.prototype.rebind = function (lastJob) {
            switch (lastJob.job_type) {
                case 'pcap':
                    this.monitorCaptureJob(lastJob.job_id, lastJob.job_info);
                    this.getLogContent();
                    break;
                case 'opkg':
                    this.monitorDependencies(lastJob.job_id);
                    break;
            }
        };
        TcpdumpMainComponent.prototype.startup = function () {
            var _this = this;
            this.API.request({
                module: 'tcpdump',
                action: 'startup'
            }, function (response) {
                if (response.error !== undefined && response.error !== null) {
                    _this.handleError(response.error);
                    return;
                }
                _this.hasDependencies = response.has_dependencies;
                _this.interfaces = response.interfaces;
                if (response.last_job.job_id !== null) {
                    _this.rebind(response.last_job);
                }
            });
        };
        TcpdumpMainComponent.prototype.showLicenseDialog = function () {
            this.dialog.open(LicenseDialogComponent, {
                hasBackdrop: true,
                width: '900px',
            });
        };
        TcpdumpMainComponent.prototype.ngOnInit = function () {
            this.startup();
        };
        TcpdumpMainComponent.prototype.ngOnDestroy = function () {
            clearInterval(this.backgroundJobInterval);
        };
        TcpdumpMainComponent.ctorParameters = function () { return [
            { type: ApiService },
            { type: dialog.MatDialog }
        ]; };
        TcpdumpMainComponent = __decorate([
            core.Component({
                selector: 'lib-tcpdump-main',
                template: "<div class=\"dependency-card-centered\" *ngIf=\"!hasDependencies\">\n    <mat-card class=\"dependency-card\">\n        <mat-card-content>\n            <mat-card-title>Welcome To TCPDump</mat-card-title>\n            <mat-card-subtitle>Lets get started.</mat-card-subtitle>\n\n            <mat-divider></mat-divider>\n            <br />\n\n            <p>You need to install some dependencies before you can use this module.</p>\n            <p>This will make an request to the internet.</p>\n\n            <br/>\n            <br/>\n            <div class=\"dependency-card-centered\">\n                <button mat-raised-button color=\"accent\"\n                        class=\"dependency-card-button\"\n                        (click)=\"installDependencies()\"\n                        [disabled]=\"isInstalling\">\n                    <span *ngIf=\"isInstalling\">\n                        <mat-spinner [diameter]=\"20\" class=\"spinner-padding\" color=\"accent\"></mat-spinner>\n                    </span>\n                    <span *ngIf=\"!isInstalling\">\n                        Install Dependencies\n                    </span>\n                </button>\n            </div>\n            <br/>\n            <div class=\"dependency-card-centered\">\n                <button mat-button color=\"accent\" (click)=\"showLicenseDialog();\">View TCPDump License</button>\n            </div>\n        </mat-card-content>\n    </mat-card>\n</div>\n\n<div *ngIf=\"hasDependencies\" class=\"controls-container\" fxLayoutGap=\"20px\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\">\n    <mat-card class=\"control-item\">\n        <mat-card-content>\n            <div class=\"right-left-split-container\">\n                <mat-card-title>TCPDump</mat-card-title>\n                <span *ngIf=\"isCapturing\"><mat-spinner [diameter]=\"24\" color=\"accent\" style=\"margin-left: 8px\"></mat-spinner></span>\n                <span fxFlex></span>\n                <mat-menu #tcpdumpMenu>\n                    <button mat-menu-item (click)=\"showUninstallDialog();\">Uninstall Dependencies</button>\n                    <button mat-menu-item (click)=\"showLicenseDialog();\">Show License</button>\n                </mat-menu>\n\n                <button mat-icon-button [matMenuTriggerFor]=\"tcpdumpMenu\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n            </div>\n            <form>\n                <mat-form-field style=\"width: 100%;\">\n                    <mat-label>Command</mat-label>\n                    <input matInput class=\"control-input\" name=\"command\" [(ngModel)]=\"tcpDumpState.command\"/>\n                </mat-form-field>\n                <div class=\"right-left-split-container\">\n                    <mat-form-field style=\"width: 100%; margin-right: 8px;\">\n                        <mat-label>Interface</mat-label>\n                        <mat-select name=\"interface\" [(ngModel)]=\"tcpDumpState.selectedInterface\" (ngModelChange)=\"update();\">\n                            <mat-option>--</mat-option>\n                            <mat-option *ngFor=\"let iface of interfaces\" value=\"{{ iface }}\">{{ iface }}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <span fxFlex></span>\n                    <mat-form-field style=\"width: 100%; margin-left: 8px;\">\n                        <mat-label>Verbose</mat-label>\n                        <mat-select name=\"verbose\" [(ngModel)]=\"tcpDumpState.verbose\" (ngModelChange)=\"update();\">\n                            <mat-option>--</mat-option>\n                            <mat-option value=\"-v\">Verbose</mat-option>\n                            <mat-option value=\"-vv\">Very verbose</mat-option>\n                            <mat-option value=\"-vvv\">Very very verbose</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <mat-form-field style=\"width: 100%;\">\n                    <mat-label>Resolve</mat-label>\n                    <mat-select name=\"resolve\" [(ngModel)]=\"tcpDumpState.resolve\" (ngModelChange)=\"update();\">\n                        <mat-option>--</mat-option>\n                        <mat-option value=\"-n\">Don't resolve hostnames</mat-option>\n                        <mat-option value=\"-nn\">Don't resolve hostnames or port names</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <mat-form-field style=\"width: 100%;\">\n                    <mat-label>Timestamp</mat-label>\n                    <mat-select name=\"timestamp\" [(ngModel)]=\"tcpDumpState.timestamp\" (ngModelChange)=\"update();\">\n                        <mat-option>--</mat-option>\n                        <mat-option value=\"-t\">Don't print a timestamp on each dump line</mat-option>\n                        <mat-option value=\"-tt\">Print an unformatted timestamp on each dump line</mat-option>\n                        <mat-option value=\"-ttt\">Print a delta (micro-second resolution) between current and previous line on each dump line</mat-option>\n                        <mat-option value=\"-tttt\">Print a timestamp in default format proceeded by date on each dump line</mat-option>\n                        <mat-option value=\"-ttttt\">Print a delta (micro-second resolution) between current and first line on each dump line</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <button mat-raised-button color=\"accent\" style=\"width: 100%;\" *ngIf=\"!isCapturing\" (click)=\"startCapture();\">Capture</button>\n                <button mat-raised-button color=\"warn\" style=\"width: 100%;\" *ngIf=\"isCapturing\" (click)=\"stopCapture();\">Stop</button>\n            </form>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card class=\"control-item\">\n        <mat-card-content>\n            <div>\n                <mat-card-title>Filter</mat-card-title>\n            </div>\n\n            <form>\n                <mat-form-field style=\"width: 100%;\">\n                    <mat-label>Filter</mat-label>\n                    <input matInput class=\"control-input\" name=\"filter\" [(ngModel)]=\"tcpDumpState.filter\" (ngModelChange)=\"update();\"/>\n                </mat-form-field>\n                <div class=\"right-left-split-container\">\n                    <mat-form-field style=\"width: 100%; margin-right: 8px;\">\n                        <mat-label>Type</mat-label>\n                        <mat-select name=\"filterType\" (selectionChange)=\"appendFilter($event.value);\">\n                            <mat-option value=\"host\">Host</mat-option>\n                            <mat-option value=\"net\">Net</mat-option>\n                            <mat-option value=\"portrange\">Port Range</mat-option>\n                            <mat-option value=\"port\">Port</mat-option>\n                            <mat-option value=\"gateway\">Gateway</mat-option>\n                            <mat-option value=\"mask\">Mask</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <span fxFlex></span>\n                    <mat-form-field style=\"width: 100%; margin-left: 8px;\">\n                        <mat-label>Dir</mat-label>\n                        <mat-select name=\"filterDir\" (selectionChange)=\"appendFilter($event.value);\">\n                            <mat-option value=\"src\">Src</mat-option>\n                            <mat-option value=\"dst\">Dst</mat-option>\n                            <mat-option value=\"src or dst\">Src or Dst</mat-option>\n                            <mat-option value=\"src and dst\">Src and Dst</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"right-left-split-container\">\n                    <mat-form-field style=\"width: 100%; margin-right: 8px;\">\n                        <mat-label>Protocol</mat-label>\n                        <mat-select name=\"filterProtocol\" (selectionChange)=\"appendFilter($event.value);\">\n                            <mat-option value=\"ip\">Ip</mat-option>\n                            <mat-option value=\"proto\">Proto</mat-option>\n                            <mat-option value=\"icmp\">ICMP</mat-option>\n                            <mat-option value=\"tcp\">TCP</mat-option>\n                            <mat-option value=\"udp\">UDP</mat-option>\n                            <mat-option value=\"arp\">ARP</mat-option>\n                            <mat-option value=\"ether\">Ether</mat-option>\n                            <mat-option value=\"http\">HTTP</mat-option>\n                            <mat-option value=\"ftp\">FTP</mat-option>\n                            <mat-option value=\"smtp\">SMTP</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <span fxFlex></span>\n                    <mat-form-field style=\"width: 100%; margin-left: 8px;\">\n                        <mat-label>Length</mat-label>\n                        <mat-select name=\"filterLength\" (selectionChange)=\"appendFilter($event.value);\">\n                            <mat-option value=\"less\">Less</mat-option>\n                            <mat-option value=\"greater\">Greater</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"right-left-split-container\">\n                    <mat-form-field style=\"width: 100%; margin-right: 8px;\">\n                        <mat-label>Kind</mat-label>\n                        <mat-select name=\"filterKind\" (selectionChange)=\"appendFilter($event.value);\">\n                            <mat-option value=\"broadcast\">Broadcast</mat-option>\n                            <mat-option value=\"multicast\">Multicast</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <span fxFlex></span>\n                    <mat-form-field style=\"width: 100%; margin-left: 8px;\">\n                        <mat-label>Operator</mat-label>\n                        <mat-select name=\"filterOperator\" (selectionChange)=\"appendFilter($event.value);\">\n                            <mat-option value=\"not\">not</mat-option>\n                            <mat-option value=\"and\">and</mat-option>\n                            <mat-option value=\"or\">or</mat-option>\n                            <mat-option value=\"(\">(</mat-option>\n                            <mat-option value=\")\">)</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </form>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card class=\"control-item\">\n        <mat-card-content>\n            <div>\n                <mat-card-title>Options</mat-card-title>\n            </div>\n            <mat-checkbox [(ngModel)]=\"optionsState.dontPrintHostName.toggled\" (ngModelChange)=\"update();\">Don't print domain name qualification of host names</mat-checkbox>\n            <br/>\n            <mat-checkbox [(ngModel)]=\"optionsState.showHexAndASCII.toggled\" (ngModelChange)=\"update();\">Show the packet's contents in both hex and ASCII</mat-checkbox>\n            <br/>\n            <mat-checkbox [(ngModel)]=\"optionsState.printAbsoluteNumbers.toggled\" (ngModelChange)=\"update();\">Print absolute sequence numbers</mat-checkbox>\n            <br/>\n            <mat-checkbox [(ngModel)]=\"optionsState.getEthernetHeaders.toggled\" (ngModelChange)=\"update();\">Get the ethernet header as well</mat-checkbox>\n            <br/>\n            <mat-checkbox [(ngModel)]=\"optionsState.lessProtocolInfo.toggled\" (ngModelChange)=\"update();\">Show less protocol information</mat-checkbox>\n            <br/>\n            <mat-checkbox [(ngModel)]=\"optionsState.monitorMode.toggled\" (ngModelChange)=\"update();\">Monitor mode</mat-checkbox>\n        </mat-card-content>\n    </mat-card>\n\n</div>\n\n<br/>\n\n<mat-card *ngIf=\"hasDependencies\">\n    <mat-card-content>\n        <div class=\"output-container\">\n            <div class=\"right-left-split-container\">\n                <mat-card-title>Output</mat-card-title>\n                <span fxFlex></span>\n                <button mat-icon-button [disabled]=\"isFetchingOutput || !isCapturing\" (click)=\"getLogContent();\"><mat-icon>refresh</mat-icon></button>\n                <button mat-icon-button [disabled]=\"captureFileName == null || isCapturing\" (click)=\"downloadPcap();\"><mat-icon>cloud_download</mat-icon></button>\n            </div>\n            <textarea class=\"output-textarea\" [(ngModel)]=\"captureOutput\" placeholder=\"No output to display...\" readonly></textarea>\n            <div class=\"right-left-split-container\">\n                <span *ngIf=\"isCapturing\" style=\"margin-right: 8px;\"><i>Refreshes every 5 seconds...</i></span>\n                <span *ngIf=\"isFetchingOutput\"><mat-spinner [diameter]=\"24\" color=\"accent\"></mat-spinner></span>\n                <span fxFlex></span>\n            </div>\n        </div>\n    </mat-card-content>\n</mat-card>\n\n",
                styles: [".right-left-split-container{display:flex;flex-direction:row;justify-content:flex-start;align-self:flex-start}.dependency-card{max-width:600px;min-height:246px}.dependency-card-centered{display:flex;justify-content:center;align-self:center}.dependency-card-button{width:75%;display:flex;justify-content:center;align-items:center}.spinner-padding{margin-top:6px;margin-bottom:7px}.controls-container{display:flex;width:100%;flex-wrap:wrap;justify-content:space-between}.control-item{flex:1;margin-right:2px;margin-left:2px}.output-container{width:100%;margin-top:20px}.control-input{width:100%}.output-textarea{width:100%;height:300px;min-height:200px;max-height:600px;resize:vertical;margin:0 0 5px;padding:0;background-color:#efefef;border-radius:2px;border-color:#cecece;max-lines:50}"]
            })
        ], TcpdumpMainComponent);
        return TcpdumpMainComponent;
    }());

    var ConfirmationDialogComponent = /** @class */ (function () {
        function ConfirmationDialogComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.title = data.title;
            this.message = data.message;
        }
        ConfirmationDialogComponent.prototype.closeDialog = function () {
            this.dialogRef.close();
        };
        ConfirmationDialogComponent.prototype.handleResponse = function (affirmative) {
            this.closeDialog();
            this.data.handleResponse(affirmative);
        };
        ConfirmationDialogComponent.prototype.ngOnInit = function () {
        };
        ConfirmationDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
        ]; };
        ConfirmationDialogComponent = __decorate([
            core.Component({
                selector: 'lib-confirmation-dialog',
                template: "<div class=\"right-left-split-container\">\n    <h1 mat-dialog-title>{{ title }}</h1>\n    <span fxFlex></span>\n    <button mat-icon-button (click)=\"closeDialog();\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>\n\n<mat-divider></mat-divider>\n<br/>\n\n<div class=\"confirmation-dialog-body-container\">\n    <p>{{ message }}</p>\n    <div class=\"confirmation-dialog-buttons\">\n        <span fxFlex></span>\n        <button mat-raised-button class=\"confirmation-dialog-button-first\" (click)=\"handleResponse(false);\">No</button>\n        <button mat-raised-button color=\"warn\" (click)=\"handleResponse(true);\">Yes</button>\n    </div>\n</div>\n",
                styles: [".confirmation-dialog-body-container{display:flex;flex-direction:column}.confirmation-dialog-buttons{margin-top:16px}.confirmation-dialog-button-first{margin-right:10px}"]
            }),
            __param(1, core.Inject(dialog.MAT_DIALOG_DATA))
        ], ConfirmationDialogComponent);
        return ConfirmationDialogComponent;
    }());

    var TcpdumpHistoryComponent = /** @class */ (function () {
        function TcpdumpHistoryComponent(API, dialog) {
            this.API = API;
            this.dialog = dialog;
            this.isBusy = false;
            this.scanHistory = [];
        }
        TcpdumpHistoryComponent.prototype.handleError = function (msg) {
            this.dialog.closeAll();
            this.dialog.open(ErrorDialogComponent, {
                hasBackdrop: true,
                width: '900px',
                data: {
                    message: msg
                }
            });
        };
        TcpdumpHistoryComponent.prototype.loadHistory = function () {
            var _this = this;
            this.isBusy = true;
            this.API.request({
                module: 'tcpdump',
                action: 'list_capture_history'
            }, function (response) {
                _this.isBusy = false;
                if (response.error) {
                    _this.handleError(response.error);
                    return;
                }
                _this.scanHistory = response;
            });
        };
        TcpdumpHistoryComponent.prototype.deleteItem = function (item) {
            var _this = this;
            this.isBusy = true;
            this.API.request({
                module: 'tcpdump',
                action: 'delete_capture',
                output_file: item
            }, function (response) {
                _this.isBusy = false;
                if (response.error) {
                    _this.handleError(response.error);
                    return;
                }
                _this.loadHistory();
            });
        };
        TcpdumpHistoryComponent.prototype.deleteAll = function () {
            var _this = this;
            this.isBusy = true;
            this.API.request({
                module: 'tcpdump',
                action: 'delete_all'
            }, function (response) {
                _this.isBusy = false;
                if (response.error) {
                    _this.handleError(response.error);
                    return;
                }
                _this.loadHistory();
            });
        };
        TcpdumpHistoryComponent.prototype.downloadItem = function (item) {
            this.API.APIDownload('/root/.tcpdump/' + item, item);
        };
        TcpdumpHistoryComponent.prototype.showDeleteDialog = function (item) {
            var _this = this;
            this.dialog.open(ConfirmationDialogComponent, {
                hasBackdrop: true,
                width: '900px',
                data: {
                    title: 'Delete?',
                    message: 'You are about to delete ' + item + '? This action can not be undone. Are you sure you want to continue?',
                    handleResponse: function (affirmative) {
                        if (affirmative) {
                            _this.deleteItem(item);
                        }
                    }
                }
            });
        };
        TcpdumpHistoryComponent.prototype.showClearHistoryDialog = function () {
            var _this = this;
            this.dialog.open(ConfirmationDialogComponent, {
                hasBackdrop: true,
                width: '900px',
                data: {
                    title: 'Delete All?',
                    message: 'You are about to delete all scan history. This action can not be undone. Are you sure you want to continue?',
                    handleResponse: function (affirmative) {
                        if (affirmative) {
                            _this.deleteAll();
                        }
                    }
                }
            });
        };
        TcpdumpHistoryComponent.prototype.ngOnInit = function () {
            this.loadHistory();
        };
        TcpdumpHistoryComponent.ctorParameters = function () { return [
            { type: ApiService },
            { type: dialog.MatDialog }
        ]; };
        TcpdumpHistoryComponent = __decorate([
            core.Component({
                selector: 'lib-tcpdump-history',
                template: "<mat-card>\n    <mat-card-content>\n        <div class=\"right-left-split-container\">\n            <mat-card-title>History</mat-card-title>\n            <span *ngIf=\"isBusy\"><mat-spinner [diameter]=\"24\" color=\"accent\" style=\"margin-left: 8px\"></mat-spinner></span>\n            <span fxFlex></span>\n            <mat-menu #historyMenu>\n                <button mat-menu-item (click)=\"loadHistory();\">Refresh</button>\n                <button mat-menu-item (click)=\"showClearHistoryDialog();\">Delete History</button>\n            </mat-menu>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"historyMenu\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n        </div>\n\n        <br/>\n        <mat-divider></mat-divider>\n        <br/>\n\n        <mat-table style=\"display: none;\">\n            <mat-header-row *matHeaderRowDef=\"[]\"></mat-header-row>\n        </mat-table>\n        <table class=\"mat-table\" style=\"min-width: 100%; overflow-x: auto; justify-content: center;\">\n            <tbody>\n            <ng-container *ngFor=\"let item of scanHistory\">\n                <tr class=\"mat-row\">\n                    <td class=\"mat-cell\">{{ item }}</td>\n                    <td class=\"mat-cell\"><button mat-icon-button (click)=\"downloadItem(item);\"><mat-icon>cloud_download</mat-icon></button></td>\n                    <td class=\"mat-cell\"><button mat-icon-button (click)=\"showDeleteDialog(item);\"><mat-icon>delete</mat-icon></button></td>\n                </tr>\n            </ng-container>\n            </tbody>\n        </table>\n        <i *ngIf=\"scanHistory.length == 0;\">No capture history to display.</i>\n    </mat-card-content>\n</mat-card>\n",
                styles: [""]
            })
        ], TcpdumpHistoryComponent);
        return TcpdumpHistoryComponent;
    }());

    var routes = [
        {
            path: '',
            component: TcpdumpComponent,
            children: [
                { path: '', component: TcpdumpMainComponent, pathMatch: 'full' },
                { path: 'history', component: TcpdumpHistoryComponent }
            ]
        },
    ];
    var tcpdumpModule = /** @class */ (function () {
        function tcpdumpModule() {
        }
        tcpdumpModule = __decorate([
            core.NgModule({
                declarations: [
                    TcpdumpComponent,
                    TcpdumpMainComponent,
                    TcpdumpHistoryComponent,
                    ConfirmationDialogComponent,
                    ErrorDialogComponent,
                    UninstallDialogComponent,
                    LicenseDialogComponent
                ],
                imports: [
                    common.CommonModule,
                    router.RouterModule.forChild(routes),
                    MaterialModule,
                    flexLayout.FlexLayoutModule,
                    forms.FormsModule
                ],
                exports: [TcpdumpComponent],
                entryComponents: [
                    ConfirmationDialogComponent,
                    ErrorDialogComponent,
                    UninstallDialogComponent,
                    LicenseDialogComponent
                ]
            })
        ], tcpdumpModule);
        return tcpdumpModule;
    }());

    exports.TcpdumpComponent = TcpdumpComponent;
    exports.tcpdumpModule = tcpdumpModule;
    exports.tcpdumpService = tcpdumpService;
    exports.ɵa = TcpdumpMainComponent;
    exports.ɵb = ApiService;
    exports.ɵc = TcpdumpHistoryComponent;
    exports.ɵd = ConfirmationDialogComponent;
    exports.ɵf = ErrorDialogComponent;
    exports.ɵh = UninstallDialogComponent;
    exports.ɵi = LicenseDialogComponent;
    exports.ɵj = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tcpdump.umd.js.map
