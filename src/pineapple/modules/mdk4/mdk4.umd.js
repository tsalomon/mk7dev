(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/observers'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/cdk/portal'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/form-field'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slide-toggle'), require('@angular/material/slider'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/stepper'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/flex-layout'), require('@angular/common/http'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('mdk4', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/observers', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/cdk/portal', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/core', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/form-field', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slide-toggle', '@angular/material/slider', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/stepper', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/flex-layout', '@angular/common/http', '@angular/forms'], factory) :
    (global = global || self, factory(global.mdk4 = {}, global.ng.core, global.ng.common, global.ng.router, global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.cdk.observers, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.cdk.portal, global.ng.cdk.stepper, global.ng.cdk.table, global.ng.cdk.tree, global.ng.material.autocomplete, global.ng.material.badge, global.ng.material.bottomSheet, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.card, global.ng.material.checkbox, global.ng.material.chips, global.ng.material.core, global.ng.material.datepicker, global.ng.material.dialog, global.ng.material.divider, global.ng.material.expansion, global.ng.material.formField, global.ng.material.gridList, global.ng.material.icon, global.ng.material.input, global.ng.material.list, global.ng.material.menu, global.ng.material.paginator, global.ng.material.progressBar, global.ng.material.progressSpinner, global.ng.material.radio, global.ng.material.select, global.ng.material.sidenav, global.ng.material.slideToggle, global.ng.material.slider, global.ng.material.snackBar, global.ng.material.sort, global.ng.material.stepper, global.ng.material.table, global.ng.material.tabs, global.ng.material.toolbar, global.ng.material.tooltip, global.ng.material.tree, global.ng.flexLayout, global.ng.common.http, global.ng.forms));
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

    var mdk4Service = /** @class */ (function () {
        function mdk4Service() {
        }
        mdk4Service.ɵprov = core.ɵɵdefineInjectable({ factory: function mdk4Service_Factory() { return new mdk4Service(); }, token: mdk4Service, providedIn: "root" });
        mdk4Service = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], mdk4Service);
        return mdk4Service;
    }());

    var Mdk4Component = /** @class */ (function () {
        function Mdk4Component() {
            this.navLinks = [
                {
                    label: 'Mdk4',
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
        Mdk4Component.prototype.ngOnInit = function () {
        };
        __decorate([
            core.ViewChild('rla')
        ], Mdk4Component.prototype, "rla", void 0);
        Mdk4Component = __decorate([
            core.Component({
                selector: 'lib-mdk4',
                template: "<nav mat-tab-nav-bar color=\"accent\">\n    <a mat-tab-link\n       *ngFor=\"let link of navLinks\"\n       [routerLink]=\"link.link\"\n       routerLinkActive #rla=\"routerLinkActive\"\n       [routerLinkActiveOptions]=\"{exact: true}\"\n       [active]=\"rla.isActive\">\n        <mat-icon *ngIf=\"link.label === 'Mdk4'\">\n            <svg style=\"width:24px;height:24px\">\n                <g id=\"surface1\">\n                    <path d=\"M 16.273438 11.371094 C 15.753906 10.929688 15.175781 10.570312 14.550781 10.300781 L 16.585938 7.878906 L 19.679688 10.5 L 17.640625 12.921875 C 17.261719 12.339844 16.800781 11.816406 16.273438 11.371094 Z M 16.273438 11.371094 \"/>\n                    <path d=\"M 4.316406 16.910156 C 4.316406 20.828125 7.492188 24.003906 11.410156 24.003906 C 15.328125 24.003906 18.503906 20.828125 18.503906 16.910156 C 18.503906 12.992188 15.328125 9.816406 11.410156 9.816406 C 9.527344 9.8125 7.722656 10.5625 6.390625 11.890625 C 5.0625 13.222656 4.3125 15.027344 4.316406 16.910156 Z M 5.449219 17.824219 C 5.449219 17 5.652344 16.1875 6.050781 15.464844 C 5.929688 15.921875 5.871094 16.390625 5.871094 16.859375 C 5.863281 18.527344 6.617188 20.105469 7.914062 21.152344 C 9.210938 22.203125 10.910156 22.605469 12.539062 22.25 C 11.011719 22.996094 9.210938 22.90625 7.765625 22.003906 C 6.324219 21.105469 5.449219 19.523438 5.449219 17.824219 Z M 5.449219 17.824219 \"/>\n                    <path d=\"M 14.378906 2.058594 L 15.496094 2.433594 L 14.855469 3.425781 L 15.953125 2.996094 L 16.101562 4.160156 L 16.664062 3.128906 L 17.523438 3.929688 L 17.296875 2.773438 L 18.46875 2.835938 L 17.550781 2.101562 L 18.488281 1.386719 L 17.308594 1.414062 L 17.570312 0.269531 L 16.691406 1.050781 L 16.148438 0 L 15.976562 1.164062 L 14.890625 0.710938 L 15.503906 1.710938 Z M 14.378906 2.058594 \"/>\n                    <path d=\"M 18.695312 9.25 C 19.121094 8.652344 19.421875 7.96875 19.574219 7.25 C 19.90625 5.699219 19.40625 4.085938 18.25 3 L 17.699219 3.5 C 18.679688 4.410156 19.109375 5.769531 18.824219 7.074219 C 18.691406 7.679688 18.441406 8.253906 18.085938 8.761719 Z M 18.695312 9.25 \"/>\n                </g>\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"link.label === 'History'\">\n            <svg style=\"width:24px;height:24px\">\n                <path d=\"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z\" />\n            </svg>\n        </mat-icon>\n        <div [fxShow.sm]=\"false\" [fxShow.xs]=\"false\">\n            &nbsp;&nbsp;\n            {{ link.label }}\n        </div>\n    </a>\n</nav>\n<br/>\n<div>\n    <router-outlet></router-outlet>\n</div>\n",
                styles: [""]
            })
        ], Mdk4Component);
        return Mdk4Component;
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
                template: "<div class=\"right-left-split-container\">\n    <h1 mat-dialog-title>MDK4 License</h1>\n    <span fxFlex></span>\n    <button mat-icon-button (click)=\"closeDialog();\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>\n\n<div>\n    <textarea class=\"legal-textarea\" readonly>\n                    GNU GENERAL PUBLIC LICENSE\n                       Version 3, 29 June 2007\n\n Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>\n Everyone is permitted to copy and distribute verbatim copies\n of this license document, but changing it is not allowed.\n\n                            Preamble\n\n  The GNU General Public License is a free, copyleft license for\nsoftware and other kinds of works.\n\n  The licenses for most software and other practical works are designed\nto take away your freedom to share and change the works.  By contrast,\nthe GNU General Public License is intended to guarantee your freedom to\nshare and change all versions of a program--to make sure it remains free\nsoftware for all its users.  We, the Free Software Foundation, use the\nGNU General Public License for most of our software; it applies also to\nany other work released this way by its authors.  You can apply it to\nyour programs, too.\n\n  When we speak of free software, we are referring to freedom, not\nprice.  Our General Public Licenses are designed to make sure that you\nhave the freedom to distribute copies of free software (and charge for\nthem if you wish), that you receive source code or can get it if you\nwant it, that you can change the software or use pieces of it in new\nfree programs, and that you know you can do these things.\n\n  To protect your rights, we need to prevent others from denying you\nthese rights or asking you to surrender the rights.  Therefore, you have\ncertain responsibilities if you distribute copies of the software, or if\nyou modify it: responsibilities to respect the freedom of others.\n\n  For example, if you distribute copies of such a program, whether\ngratis or for a fee, you must pass on to the recipients the same\nfreedoms that you received.  You must make sure that they, too, receive\nor can get the source code.  And you must show them these terms so they\nknow their rights.\n\n  Developers that use the GNU GPL protect your rights with two steps:\n(1) assert copyright on the software, and (2) offer you this License\ngiving you legal permission to copy, distribute and/or modify it.\n\n  For the developers' and authors' protection, the GPL clearly explains\nthat there is no warranty for this free software.  For both users' and\nauthors' sake, the GPL requires that modified versions be marked as\nchanged, so that their problems will not be attributed erroneously to\nauthors of previous versions.\n\n  Some devices are designed to deny users access to install or run\nmodified versions of the software inside them, although the manufacturer\ncan do so.  This is fundamentally incompatible with the aim of\nprotecting users' freedom to change the software.  The systematic\npattern of such abuse occurs in the area of products for individuals to\nuse, which is precisely where it is most unacceptable.  Therefore, we\nhave designed this version of the GPL to prohibit the practice for those\nproducts.  If such problems arise substantially in other domains, we\nstand ready to extend this provision to those domains in future versions\nof the GPL, as needed to protect the freedom of users.\n\n  Finally, every program is threatened constantly by software patents.\nStates should not allow patents to restrict development and use of\nsoftware on general-purpose computers, but in those that do, we wish to\navoid the special danger that patents applied to a free program could\nmake it effectively proprietary.  To prevent this, the GPL assures that\npatents cannot be used to render the program non-free.\n\n  The precise terms and conditions for copying, distribution and\nmodification follow.\n\n                       TERMS AND CONDITIONS\n\n  0. Definitions.\n\n  \"This License\" refers to version 3 of the GNU General Public License.\n\n  \"Copyright\" also means copyright-like laws that apply to other kinds of\nworks, such as semiconductor masks.\n\n  \"The Program\" refers to any copyrightable work licensed under this\nLicense.  Each licensee is addressed as \"you\".  \"Licensees\" and\n\"recipients\" may be individuals or organizations.\n\n  To \"modify\" a work means to copy from or adapt all or part of the work\nin a fashion requiring copyright permission, other than the making of an\nexact copy.  The resulting work is called a \"modified version\" of the\nearlier work or a work \"based on\" the earlier work.\n\n  A \"covered work\" means either the unmodified Program or a work based\non the Program.\n\n  To \"propagate\" a work means to do anything with it that, without\npermission, would make you directly or secondarily liable for\ninfringement under applicable copyright law, except executing it on a\ncomputer or modifying a private copy.  Propagation includes copying,\ndistribution (with or without modification), making available to the\npublic, and in some countries other activities as well.\n\n  To \"convey\" a work means any kind of propagation that enables other\nparties to make or receive copies.  Mere interaction with a user through\na computer network, with no transfer of a copy, is not conveying.\n\n  An interactive user interface displays \"Appropriate Legal Notices\"\nto the extent that it includes a convenient and prominently visible\nfeature that (1) displays an appropriate copyright notice, and (2)\ntells the user that there is no warranty for the work (except to the\nextent that warranties are provided), that licensees may convey the\nwork under this License, and how to view a copy of this License.  If\nthe interface presents a list of user commands or options, such as a\nmenu, a prominent item in the list meets this criterion.\n\n  1. Source Code.\n\n  The \"source code\" for a work means the preferred form of the work\nfor making modifications to it.  \"Object code\" means any non-source\nform of a work.\n\n  A \"Standard Interface\" means an interface that either is an official\nstandard defined by a recognized standards body, or, in the case of\ninterfaces specified for a particular programming language, one that\nis widely used among developers working in that language.\n\n  The \"System Libraries\" of an executable work include anything, other\nthan the work as a whole, that (a) is included in the normal form of\npackaging a Major Component, but which is not part of that Major\nComponent, and (b) serves only to enable use of the work with that\nMajor Component, or to implement a Standard Interface for which an\nimplementation is available to the public in source code form.  A\n\"Major Component\", in this context, means a major essential component\n(kernel, window system, and so on) of the specific operating system\n(if any) on which the executable work runs, or a compiler used to\nproduce the work, or an object code interpreter used to run it.\n\n  The \"Corresponding Source\" for a work in object code form means all\nthe source code needed to generate, install, and (for an executable\nwork) run the object code and to modify the work, including scripts to\ncontrol those activities.  However, it does not include the work's\nSystem Libraries, or general-purpose tools or generally available free\nprograms which are used unmodified in performing those activities but\nwhich are not part of the work.  For example, Corresponding Source\nincludes interface definition files associated with source files for\nthe work, and the source code for shared libraries and dynamically\nlinked subprograms that the work is specifically designed to require,\nsuch as by intimate data communication or control flow between those\nsubprograms and other parts of the work.\n\n  The Corresponding Source need not include anything that users\ncan regenerate automatically from other parts of the Corresponding\nSource.\n\n  The Corresponding Source for a work in source code form is that\nsame work.\n\n  2. Basic Permissions.\n\n  All rights granted under this License are granted for the term of\ncopyright on the Program, and are irrevocable provided the stated\nconditions are met.  This License explicitly affirms your unlimited\npermission to run the unmodified Program.  The output from running a\ncovered work is covered by this License only if the output, given its\ncontent, constitutes a covered work.  This License acknowledges your\nrights of fair use or other equivalent, as provided by copyright law.\n\n  You may make, run and propagate covered works that you do not\nconvey, without conditions so long as your license otherwise remains\nin force.  You may convey covered works to others for the sole purpose\nof having them make modifications exclusively for you, or provide you\nwith facilities for running those works, provided that you comply with\nthe terms of this License in conveying all material for which you do\nnot control copyright.  Those thus making or running the covered works\nfor you must do so exclusively on your behalf, under your direction\nand control, on terms that prohibit them from making any copies of\nyour copyrighted material outside their relationship with you.\n\n  Conveying under any other circumstances is permitted solely under\nthe conditions stated below.  Sublicensing is not allowed; section 10\nmakes it unnecessary.\n\n  3. Protecting Users' Legal Rights From Anti-Circumvention Law.\n\n  No covered work shall be deemed part of an effective technological\nmeasure under any applicable law fulfilling obligations under article\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\nsimilar laws prohibiting or restricting circumvention of such\nmeasures.\n\n  When you convey a covered work, you waive any legal power to forbid\ncircumvention of technological measures to the extent such circumvention\nis effected by exercising rights under this License with respect to\nthe covered work, and you disclaim any intention to limit operation or\nmodification of the work as a means of enforcing, against the work's\nusers, your or third parties' legal rights to forbid circumvention of\ntechnological measures.\n\n  4. Conveying Verbatim Copies.\n\n  You may convey verbatim copies of the Program's source code as you\nreceive it, in any medium, provided that you conspicuously and\nappropriately publish on each copy an appropriate copyright notice;\nkeep intact all notices stating that this License and any\nnon-permissive terms added in accord with section 7 apply to the code;\nkeep intact all notices of the absence of any warranty; and give all\nrecipients a copy of this License along with the Program.\n\n  You may charge any price or no price for each copy that you convey,\nand you may offer support or warranty protection for a fee.\n\n  5. Conveying Modified Source Versions.\n\n  You may convey a work based on the Program, or the modifications to\nproduce it from the Program, in the form of source code under the\nterms of section 4, provided that you also meet all of these conditions:\n\n    a) The work must carry prominent notices stating that you modified\n    it, and giving a relevant date.\n\n    b) The work must carry prominent notices stating that it is\n    released under this License and any conditions added under section\n    7.  This requirement modifies the requirement in section 4 to\n    \"keep intact all notices\".\n\n    c) You must license the entire work, as a whole, under this\n    License to anyone who comes into possession of a copy.  This\n    License will therefore apply, along with any applicable section 7\n    additional terms, to the whole of the work, and all its parts,\n    regardless of how they are packaged.  This License gives no\n    permission to license the work in any other way, but it does not\n    invalidate such permission if you have separately received it.\n\n    d) If the work has interactive user interfaces, each must display\n    Appropriate Legal Notices; however, if the Program has interactive\n    interfaces that do not display Appropriate Legal Notices, your\n    work need not make them do so.\n\n  A compilation of a covered work with other separate and independent\nworks, which are not by their nature extensions of the covered work,\nand which are not combined with it such as to form a larger program,\nin or on a volume of a storage or distribution medium, is called an\n\"aggregate\" if the compilation and its resulting copyright are not\nused to limit the access or legal rights of the compilation's users\nbeyond what the individual works permit.  Inclusion of a covered work\nin an aggregate does not cause this License to apply to the other\nparts of the aggregate.\n\n  6. Conveying Non-Source Forms.\n\n  You may convey a covered work in object code form under the terms\nof sections 4 and 5, provided that you also convey the\nmachine-readable Corresponding Source under the terms of this License,\nin one of these ways:\n\n    a) Convey the object code in, or embodied in, a physical product\n    (including a physical distribution medium), accompanied by the\n    Corresponding Source fixed on a durable physical medium\n    customarily used for software interchange.\n\n    b) Convey the object code in, or embodied in, a physical product\n    (including a physical distribution medium), accompanied by a\n    written offer, valid for at least three years and valid for as\n    long as you offer spare parts or customer support for that product\n    model, to give anyone who possesses the object code either (1) a\n    copy of the Corresponding Source for all the software in the\n    product that is covered by this License, on a durable physical\n    medium customarily used for software interchange, for a price no\n    more than your reasonable cost of physically performing this\n    conveying of source, or (2) access to copy the\n    Corresponding Source from a network server at no charge.\n\n    c) Convey individual copies of the object code with a copy of the\n    written offer to provide the Corresponding Source.  This\n    alternative is allowed only occasionally and noncommercially, and\n    only if you received the object code with such an offer, in accord\n    with subsection 6b.\n\n    d) Convey the object code by offering access from a designated\n    place (gratis or for a charge), and offer equivalent access to the\n    Corresponding Source in the same way through the same place at no\n    further charge.  You need not require recipients to copy the\n    Corresponding Source along with the object code.  If the place to\n    copy the object code is a network server, the Corresponding Source\n    may be on a different server (operated by you or a third party)\n    that supports equivalent copying facilities, provided you maintain\n    clear directions next to the object code saying where to find the\n    Corresponding Source.  Regardless of what server hosts the\n    Corresponding Source, you remain obligated to ensure that it is\n    available for as long as needed to satisfy these requirements.\n\n    e) Convey the object code using peer-to-peer transmission, provided\n    you inform other peers where the object code and Corresponding\n    Source of the work are being offered to the general public at no\n    charge under subsection 6d.\n\n  A separable portion of the object code, whose source code is excluded\nfrom the Corresponding Source as a System Library, need not be\nincluded in conveying the object code work.\n\n  A \"User Product\" is either (1) a \"consumer product\", which means any\ntangible personal property which is normally used for personal, family,\nor household purposes, or (2) anything designed or sold for incorporation\ninto a dwelling.  In determining whether a product is a consumer product,\ndoubtful cases shall be resolved in favor of coverage.  For a particular\nproduct received by a particular user, \"normally used\" refers to a\ntypical or common use of that class of product, regardless of the status\nof the particular user or of the way in which the particular user\nactually uses, or expects or is expected to use, the product.  A product\nis a consumer product regardless of whether the product has substantial\ncommercial, industrial or non-consumer uses, unless such uses represent\nthe only significant mode of use of the product.\n\n  \"Installation Information\" for a User Product means any methods,\nprocedures, authorization keys, or other information required to install\nand execute modified versions of a covered work in that User Product from\na modified version of its Corresponding Source.  The information must\nsuffice to ensure that the continued functioning of the modified object\ncode is in no case prevented or interfered with solely because\nmodification has been made.\n\n  If you convey an object code work under this section in, or with, or\nspecifically for use in, a User Product, and the conveying occurs as\npart of a transaction in which the right of possession and use of the\nUser Product is transferred to the recipient in perpetuity or for a\nfixed term (regardless of how the transaction is characterized), the\nCorresponding Source conveyed under this section must be accompanied\nby the Installation Information.  But this requirement does not apply\nif neither you nor any third party retains the ability to install\nmodified object code on the User Product (for example, the work has\nbeen installed in ROM).\n\n  The requirement to provide Installation Information does not include a\nrequirement to continue to provide support service, warranty, or updates\nfor a work that has been modified or installed by the recipient, or for\nthe User Product in which it has been modified or installed.  Access to a\nnetwork may be denied when the modification itself materially and\nadversely affects the operation of the network or violates the rules and\nprotocols for communication across the network.\n\n  Corresponding Source conveyed, and Installation Information provided,\nin accord with this section must be in a format that is publicly\ndocumented (and with an implementation available to the public in\nsource code form), and must require no special password or key for\nunpacking, reading or copying.\n\n  7. Additional Terms.\n\n  \"Additional permissions\" are terms that supplement the terms of this\nLicense by making exceptions from one or more of its conditions.\nAdditional permissions that are applicable to the entire Program shall\nbe treated as though they were included in this License, to the extent\nthat they are valid under applicable law.  If additional permissions\napply only to part of the Program, that part may be used separately\nunder those permissions, but the entire Program remains governed by\nthis License without regard to the additional permissions.\n\n  When you convey a copy of a covered work, you may at your option\nremove any additional permissions from that copy, or from any part of\nit.  (Additional permissions may be written to require their own\nremoval in certain cases when you modify the work.)  You may place\nadditional permissions on material, added by you to a covered work,\nfor which you have or can give appropriate copyright permission.\n\n  Notwithstanding any other provision of this License, for material you\nadd to a covered work, you may (if authorized by the copyright holders of\nthat material) supplement the terms of this License with terms:\n\n    a) Disclaiming warranty or limiting liability differently from the\n    terms of sections 15 and 16 of this License; or\n\n    b) Requiring preservation of specified reasonable legal notices or\n    author attributions in that material or in the Appropriate Legal\n    Notices displayed by works containing it; or\n\n    c) Prohibiting misrepresentation of the origin of that material, or\n    requiring that modified versions of such material be marked in\n    reasonable ways as different from the original version; or\n\n    d) Limiting the use for publicity purposes of names of licensors or\n    authors of the material; or\n\n    e) Declining to grant rights under trademark law for use of some\n    trade names, trademarks, or service marks; or\n\n    f) Requiring indemnification of licensors and authors of that\n    material by anyone who conveys the material (or modified versions of\n    it) with contractual assumptions of liability to the recipient, for\n    any liability that these contractual assumptions directly impose on\n    those licensors and authors.\n\n  All other non-permissive additional terms are considered \"further\nrestrictions\" within the meaning of section 10.  If the Program as you\nreceived it, or any part of it, contains a notice stating that it is\ngoverned by this License along with a term that is a further\nrestriction, you may remove that term.  If a license document contains\na further restriction but permits relicensing or conveying under this\nLicense, you may add to a covered work material governed by the terms\nof that license document, provided that the further restriction does\nnot survive such relicensing or conveying.\n\n  If you add terms to a covered work in accord with this section, you\nmust place, in the relevant source files, a statement of the\nadditional terms that apply to those files, or a notice indicating\nwhere to find the applicable terms.\n\n  Additional terms, permissive or non-permissive, may be stated in the\nform of a separately written license, or stated as exceptions;\nthe above requirements apply either way.\n\n  8. Termination.\n\n  You may not propagate or modify a covered work except as expressly\nprovided under this License.  Any attempt otherwise to propagate or\nmodify it is void, and will automatically terminate your rights under\nthis License (including any patent licenses granted under the third\nparagraph of section 11).\n\n  However, if you cease all violation of this License, then your\nlicense from a particular copyright holder is reinstated (a)\nprovisionally, unless and until the copyright holder explicitly and\nfinally terminates your license, and (b) permanently, if the copyright\nholder fails to notify you of the violation by some reasonable means\nprior to 60 days after the cessation.\n\n  Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n\n  Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, you do not qualify to receive new licenses for the same\nmaterial under section 10.\n\n  9. Acceptance Not Required for Having Copies.\n\n  You are not required to accept this License in order to receive or\nrun a copy of the Program.  Ancillary propagation of a covered work\noccurring solely as a consequence of using peer-to-peer transmission\nto receive a copy likewise does not require acceptance.  However,\nnothing other than this License grants you permission to propagate or\nmodify any covered work.  These actions infringe copyright if you do\nnot accept this License.  Therefore, by modifying or propagating a\ncovered work, you indicate your acceptance of this License to do so.\n\n  10. Automatic Licensing of Downstream Recipients.\n\n  Each time you convey a covered work, the recipient automatically\nreceives a license from the original licensors, to run, modify and\npropagate that work, subject to this License.  You are not responsible\nfor enforcing compliance by third parties with this License.\n\n  An \"entity transaction\" is a transaction transferring control of an\norganization, or substantially all assets of one, or subdividing an\norganization, or merging organizations.  If propagation of a covered\nwork results from an entity transaction, each party to that\ntransaction who receives a copy of the work also receives whatever\nlicenses to the work the party's predecessor in interest had or could\ngive under the previous paragraph, plus a right to possession of the\nCorresponding Source of the work from the predecessor in interest, if\nthe predecessor has it or can get it with reasonable efforts.\n\n  You may not impose any further restrictions on the exercise of the\nrights granted or affirmed under this License.  For example, you may\nnot impose a license fee, royalty, or other charge for exercise of\nrights granted under this License, and you may not initiate litigation\n(including a cross-claim or counterclaim in a lawsuit) alleging that\nany patent claim is infringed by making, using, selling, offering for\nsale, or importing the Program or any portion of it.\n\n  11. Patents.\n\n  A \"contributor\" is a copyright holder who authorizes use under this\nLicense of the Program or a work on which the Program is based.  The\nwork thus licensed is called the contributor's \"contributor version\".\n\n  A contributor's \"essential patent claims\" are all patent claims\nowned or controlled by the contributor, whether already acquired or\nhereafter acquired, that would be infringed by some manner, permitted\nby this License, of making, using, or selling its contributor version,\nbut do not include claims that would be infringed only as a\nconsequence of further modification of the contributor version.  For\npurposes of this definition, \"control\" includes the right to grant\npatent sublicenses in a manner consistent with the requirements of\nthis License.\n\n  Each contributor grants you a non-exclusive, worldwide, royalty-free\npatent license under the contributor's essential patent claims, to\nmake, use, sell, offer for sale, import and otherwise run, modify and\npropagate the contents of its contributor version.\n\n  In the following three paragraphs, a \"patent license\" is any express\nagreement or commitment, however denominated, not to enforce a patent\n(such as an express permission to practice a patent or covenant not to\nsue for patent infringement).  To \"grant\" such a patent license to a\nparty means to make such an agreement or commitment not to enforce a\npatent against the party.\n\n  If you convey a covered work, knowingly relying on a patent license,\nand the Corresponding Source of the work is not available for anyone\nto copy, free of charge and under the terms of this License, through a\npublicly available network server or other readily accessible means,\nthen you must either (1) cause the Corresponding Source to be so\navailable, or (2) arrange to deprive yourself of the benefit of the\npatent license for this particular work, or (3) arrange, in a manner\nconsistent with the requirements of this License, to extend the patent\nlicense to downstream recipients.  \"Knowingly relying\" means you have\nactual knowledge that, but for the patent license, your conveying the\ncovered work in a country, or your recipient's use of the covered work\nin a country, would infringe one or more identifiable patents in that\ncountry that you have reason to believe are valid.\n\n  If, pursuant to or in connection with a single transaction or\narrangement, you convey, or propagate by procuring conveyance of, a\ncovered work, and grant a patent license to some of the parties\nreceiving the covered work authorizing them to use, propagate, modify\nor convey a specific copy of the covered work, then the patent license\nyou grant is automatically extended to all recipients of the covered\nwork and works based on it.\n\n  A patent license is \"discriminatory\" if it does not include within\nthe scope of its coverage, prohibits the exercise of, or is\nconditioned on the non-exercise of one or more of the rights that are\nspecifically granted under this License.  You may not convey a covered\nwork if you are a party to an arrangement with a third party that is\nin the business of distributing software, under which you make payment\nto the third party based on the extent of your activity of conveying\nthe work, and under which the third party grants, to any of the\nparties who would receive the covered work from you, a discriminatory\npatent license (a) in connection with copies of the covered work\nconveyed by you (or copies made from those copies), or (b) primarily\nfor and in connection with specific products or compilations that\ncontain the covered work, unless you entered into that arrangement,\nor that patent license was granted, prior to 28 March 2007.\n\n  Nothing in this License shall be construed as excluding or limiting\nany implied license or other defenses to infringement that may\notherwise be available to you under applicable patent law.\n\n  12. No Surrender of Others' Freedom.\n\n  If conditions are imposed on you (whether by court order, agreement or\notherwise) that contradict the conditions of this License, they do not\nexcuse you from the conditions of this License.  If you cannot convey a\ncovered work so as to satisfy simultaneously your obligations under this\nLicense and any other pertinent obligations, then as a consequence you may\nnot convey it at all.  For example, if you agree to terms that obligate you\nto collect a royalty for further conveying from those to whom you convey\nthe Program, the only way you could satisfy both those terms and this\nLicense would be to refrain entirely from conveying the Program.\n\n  13. Use with the GNU Affero General Public License.\n\n  Notwithstanding any other provision of this License, you have\npermission to link or combine any covered work with a work licensed\nunder version 3 of the GNU Affero General Public License into a single\ncombined work, and to convey the resulting work.  The terms of this\nLicense will continue to apply to the part which is the covered work,\nbut the special requirements of the GNU Affero General Public License,\nsection 13, concerning interaction through a network will apply to the\ncombination as such.\n\n  14. Revised Versions of this License.\n\n  The Free Software Foundation may publish revised and/or new versions of\nthe GNU General Public License from time to time.  Such new versions will\nbe similar in spirit to the present version, but may differ in detail to\naddress new problems or concerns.\n\n  Each version is given a distinguishing version number.  If the\nProgram specifies that a certain numbered version of the GNU General\nPublic License \"or any later version\" applies to it, you have the\noption of following the terms and conditions either of that numbered\nversion or of any later version published by the Free Software\nFoundation.  If the Program does not specify a version number of the\nGNU General Public License, you may choose any version ever published\nby the Free Software Foundation.\n\n  If the Program specifies that a proxy can decide which future\nversions of the GNU General Public License can be used, that proxy's\npublic statement of acceptance of a version permanently authorizes you\nto choose that version for the Program.\n\n  Later license versions may give you additional or different\npermissions.  However, no additional obligations are imposed on any\nauthor or copyright holder as a result of your choosing to follow a\nlater version.\n\n  15. Disclaimer of Warranty.\n\n  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \"AS IS\" WITHOUT WARRANTY\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\n\n  16. Limitation of Liability.\n\n  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\nSUCH DAMAGES.\n\n  17. Interpretation of Sections 15 and 16.\n\n  If the disclaimer of warranty and limitation of liability provided\nabove cannot be given local legal effect according to their terms,\nreviewing courts shall apply local law that most closely approximates\nan absolute waiver of all civil liability in connection with the\nProgram, unless a warranty or assumption of liability accompanies a\ncopy of the Program in return for a fee.\n\n                     END OF TERMS AND CONDITIONS\n\n            How to Apply These Terms to Your New Programs\n\n  If you develop a new program, and you want it to be of the greatest\npossible use to the public, the best way to achieve this is to make it\nfree software which everyone can redistribute and change under these terms.\n\n  To do so, attach the following notices to the program.  It is safest\nto attach them to the start of each source file to most effectively\nstate the exclusion of warranty; and each file should have at least\nthe \"copyright\" line and a pointer to where the full notice is found.\n\n    <one line to give the program's name and a brief idea of what it does.>\n    Copyright (C) <year>  <name of author>\n\n    This program is free software: you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    This program is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with this program.  If not, see <http://www.gnu.org/licenses/>.\n\nAlso add information on how to contact you by electronic and paper mail.\n\n  If the program does terminal interaction, make it output a short\nnotice like this when it starts in an interactive mode:\n\n    <program>  Copyright (C) <year>  <name of author>\n    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.\n    This is free software, and you are welcome to redistribute it\n    under certain conditions; type `show c' for details.\n\nThe hypothetical commands `show w' and `show c' should show the appropriate\nparts of the General Public License.  Of course, your program's commands\nmight be different; for a GUI interface, you would use an \"about box\".\n\n  You should also get your employer (if you work as a programmer) or school,\nif any, to sign a \"copyright disclaimer\" for the program, if necessary.\nFor more information on this, and how to apply and follow the GNU GPL, see\n<http://www.gnu.org/licenses/>.\n\n  The GNU General Public License does not permit incorporating your program\ninto proprietary programs.  If your program is a subroutine library, you\nmay consider it more useful to permit linking proprietary applications with\nthe library.  If this is what you want to do, use the GNU Lesser General\nPublic License instead of this License.  But first, please read\n<http://www.gnu.org/philosophy/why-not-lgpl.html>.\n    </textarea>\n</div>\n",
                styles: [".legal-textarea{width:100%;min-height:480px;resize:none;margin:0 0 5px;padding:0;background-color:#efefef;border-radius:2px;border-color:#cecece;max-lines:50}"]
            })
        ], LicenseDialogComponent);
        return LicenseDialogComponent;
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
        UninstallDialogComponent.prototype.pollBackgroundJob = function (jobId, onComplete) {
            var _this = this;
            this.backgroundJobInterval = setInterval(function () {
                _this.API.request({
                    module: 'mdk4',
                    action: 'poll_job',
                    job_id: jobId
                }, function (response) {
                    if (response.is_complete) {
                        onComplete(response);
                        clearInterval(_this.backgroundJobInterval);
                    }
                });
            }, 5000);
        };
        UninstallDialogComponent.prototype.handleError = function (msg) {
            this.isBusy = false;
            this.closeDialog();
            this.dialog.open(ErrorDialogComponent, {
                hasBackdrop: true,
                width: '900px',
                data: {
                    message: msg
                }
            });
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
                module: 'mdk4',
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
        UninstallDialogComponent.prototype.ngOnDestroy = function () {
            clearInterval(this.backgroundJobInterval);
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
                template: "<div class=\"right-left-split-container\">\n    <h1 mat-dialog-title>Uninstall Dependencies?</h1>\n    <span fxFlex></span>\n    <button mat-icon-button (click)=\"closeDialog();\" [disabled]=\"isBusy\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>\n\n<mat-divider></mat-divider>\n<br/>\n\n<div>\n    <p>You are about to uninstall dependencies for this module. You'll still be able to access your history\n        but will be unable to continue to use mdk4.</p>\n    <p>Do you want to continue?</p>\n\n    <br/>\n    <div class=\"dependency-card-centered\">\n        <button mat-raised-button color=\"warn\"\n                class=\"dependency-card-button\"\n                (click)=\"removeDependencies();\"\n                [disabled]=\"isBusy\">\n                    <span *ngIf=\"isBusy\">\n                        <mat-spinner [diameter]=\"20\" class=\"spinner-padding\" color=\"accent\"></mat-spinner>\n                    </span>\n            <span *ngIf=\"!isBusy\">\n                        Uninstall Dependencies\n                    </span>\n        </button>\n    </div>\n</div>\n",
                styles: [".right-left-split-container{display:flex;flex-direction:row;justify-content:flex-start;align-self:flex-start}.dependency-card-centered{display:flex;justify-content:center;align-self:center}.dependency-card-button{width:50%;display:flex;justify-content:center;align-items:center}.spinner-padding{margin-top:6px;margin-bottom:7px}"]
            }),
            __param(3, core.Inject(dialog.MAT_DIALOG_DATA))
        ], UninstallDialogComponent);
        return UninstallDialogComponent;
    }());

    var Mdk4MainComponent = /** @class */ (function () {
        function Mdk4MainComponent(API, dialog) {
            this.API = API;
            this.dialog = dialog;
            this.hasDependencies = true;
            this.isInstalling = false;
            this.isBusy = false;
            this.refreshingOutput = false;
            this.output = '';
            this.command = 'mdk4 ';
            this.interfaces = [];
            this.interfaceIn = '';
            this.interfaceOut = '';
            this.attackMode = '';
            this.attackModes = {
                'a': 'Authentication Denial Of Service', 'b': 'Beacon Flooding', 'd': 'Deauthentication and Disassociation',
                'e': 'EAPOL Start and Logoff Packet Injection', 'm': 'Michael Countermeasures Exploitation',
                'p': 'SSID Probing and Bruteforcing', 's': 'Attacks for IEEE 802.11s mesh networks',
                'w': 'WIDS Confusion', 'f': 'Packet Fuzzer'
            };
            this.attackOptions = {
                'a': [
                    { value: '-a', description: 'Only test an AP with the MAC address ap_mac', toggled: false, hasInput: true, inputLabel: 'AP Mac', input: null },
                    { value: '-m', description: 'Use valid client MAC address from the OUI database', toggled: false, hasInput: false, inputLabel: null, input: null },
                    { value: '-c', description: 'Do not check for the test being successful.', toggled: false, hasInput: false, inputLabel: null, input: null },
                    { value: '-i', description: 'Perform intelligent test on AP (-a and -c will be ignored): connect clients to an AP with the MAC address ap_mac and reinjects sniffed data to keep them alive', toggled: false, hasInput: true, inputLabel: 'AP Mac', input: null },
                    { value: '-s', description: 'Set speed in packets per second to rate (Default: infinity)', toggled: false, hasInput: true, inputLabel: 'Rate (in seconds)', input: null },
                ],
                'b': [
                    { value: '-n', description: 'Use SSID ssid instead of randomly generated ones', toggled: false, hasInput: true, inputLabel: 'SSID', input: null },
                    { value: '-f', description: 'Read SSIDs from file instead of randomly generating them', toggled: false, hasInput: true, inputLabel: 'File', input: null },
                    { value: '-v', description: 'Read MACs and SSIDs from file ; cf. example file', toggled: false, hasInput: true, inputLabel: 'File', input: null },
                    { value: '-d', description: 'Show station as Ad-Hoc', toggled: false, hasInput: false, inputLabel: null, input: null },
                    { value: '-w', description: 'Set WEP bit (generate encrypted networks)', toggled: false, hasInput: false, inputLabel: null, input: null },
                    { value: '-g', description: 'Show stations as 802.11g (54 Mbit)', toggled: false, hasInput: false, inputLabel: null, input: null },
                    { value: '-t', description: 'Show stations using WPA TKIP encryption', toggled: false, hasInput: false, inputLabel: null, input: null },
                    { value: '-a', description: 'Show stations using WPA AES encryption', toggled: false, hasInput: false, inputLabel: null, input: null },
                    { value: '-m', description: 'Use valid accesspoint MACs from OUI database', toggled: false, hasInput: false, inputLabel: null, input: null },
                    { value: '-h', description: 'Hop to channel where AP is spoofed - this makes the test more effective against some devices/drivers, but it reduces packet rate due to channel hopping', toggled: false, hasInput: false, inputLabel: null, input: null },
                    { value: '-c', description: 'Fake an AP on channel chan If you want your card to hop on this channel, you have to set -h option, too!', toggled: false, hasInput: true, inputLabel: 'Channel', input: null },
                    { value: '-s', description: 'Set speed in packets per second to rate (Default: 50)', toggled: false, hasInput: true, inputLabel: 'Rate', input: null },
                ],
                'd': [
                    { value: '-w', description: 'Read MACs from file that are to be unaffected (whitelist mode)', toggled: false, hasInput: true, inputLabel: 'File', input: null },
                    { value: '-b', description: 'Read MACs from file that are to be tested on (blacklist mode)', toggled: false, hasInput: true, inputLabel: 'File', input: null },
                    { value: '-s', description: 'Set speed in packets per second to rate (Default: infinity)', toggled: false, hasInput: true, inputLabel: 'Rate (in seconds)', input: null },
                    { value: '-c', description: 'Enable channel hopping. Without providing any channels, mdk4 will hop an all 14 b/g channels. The current channel will be changed every 5 seconds.', toggled: false, hasInput: true, inputLabel: 'Channels (comma separated)', input: null },
                ],
                'e': [],
                'm': [
                    { value: '-t', description: 'Target bssid', toggled: false, hasInput: true, inputLabel: 'BSSID', input: null },
                    { value: '-w', description: 'Time time (in seconds) between bursts (Default: 10)', toggled: false, hasInput: true, inputLabel: 'Time (in seconds)', input: null },
                    { value: '-n', description: 'Set packets per burst ppb (Default: 70)', toggled: false, hasInput: true, inputLabel: 'PPB', input: null },
                    { value: '-j', description: 'Use the new TKIP QoS-Exploit - needs just a few packets to shut the AP down!', toggled: false, hasInput: false, inputLabel: null, input: null },
                    { value: '-s', description: 'Set speed in packets per second to rate (Default: infinity)', toggled: false, hasInput: true, inputLabel: 'Rate (in seconds)', input: null },
                ],
                'p': [
                    { value: '-e', description: 'Probe for bssid', toggled: false, hasInput: true, inputLabel: 'BSSID', input: null },
                    { value: '-f', description: 'Read lines from file for bruteforcing hidden SSIDs', toggled: false, hasInput: true, inputLabel: 'File', input: null },
                    { value: '-t', description: 'Target AP bssid', toggled: false, hasInput: true, inputLabel: 'BSSID', input: null },
                    { value: '-s', description: 'Set  speed in packets per second to rate (Normal Default: infinity; Bruteforce Default: 300)', toggled: false, hasInput: true, inputLabel: 'Rate (in seconds)', input: null },
                    { value: '-b', description: 'Use full Bruteforce mode based on  character_set  (recommended  for short SSIDs only!) - use this switch only to show its help screen', toggled: false, hasInput: true, inputLabel: 'Character Set', input: null },
                ],
                's': [],
                'w': [
                    { value: '-e', description: 'SSID ssid of target WDS network', toggled: false, hasInput: true, inputLabel: 'SSID', input: null },
                    { value: '-c', description: 'Enable channel hopping.', toggled: false, hasInput: true, inputLabel: 'Channels (comma separated)', input: null },
                    { value: '-z', description: 'activate Zero_Chaos\' WIDS exploit (authenticates clients from a WDS to foreign APs to make WIDS go nuts)', toggled: false, hasInput: true, inputLabel: 'BSSID', input: null },
                ],
                'f': [
                    { value: '-t', description: 'Target bssid', toggled: false, hasInput: true, inputLabel: 'BSSID', input: null },
                    { value: '-bm', description: 'Set the MAC address range mac_prefix (3 bytes, e.g. 00:12:34); without -m, the internal database will be used', toggled: false, hasInput: true, inputLabel: 'Mac Prefix', input: null },
                    { value: '-f', description: 'Begin bruteforcing with MAC address mac (Note: -f and -m cannot be used at the same time)', toggled: false, hasInput: true, inputLabel: 'Mac', input: null },
                ]
            };
            this.backgroundJobInterval = null;
            this.outputFile = null;
        }
        Mdk4MainComponent.prototype.update = function () {
            var inputInterface = (this.interfaceIn !== undefined && this.interfaceIn !== null && this.interfaceIn !== '') ? this.interfaceIn + ' ' : '';
            var outputInterface = (this.interfaceOut !== undefined && this.interfaceOut !== null && this.interfaceOut != '') ? this.interfaceOut + ' ' : '';
            var mode = (this.attackMode !== undefined && this.attackMode !== null && this.attackMode !== '') ? this.attackMode + ' ' : '';
            this.command = 'mdk4 ' + inputInterface + outputInterface + mode + this.getAttackOptions();
        };
        Mdk4MainComponent.prototype.getAttackOptions = function () {
            var e_1, _a;
            var returnValue = '';
            if (this.attackMode !== undefined && this.attackMode !== null && this.attackMode !== '') {
                var options = this.attackOptions[this.attackMode];
                if (!options) {
                    return '';
                }
                try {
                    for (var options_1 = __values(options), options_1_1 = options_1.next(); !options_1_1.done; options_1_1 = options_1.next()) {
                        var option = options_1_1.value;
                        if (!option.toggled) {
                            continue;
                        }
                        returnValue += option.value + ' ';
                        if (option.hasInput) {
                            returnValue += option.input + ' ';
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (options_1_1 && !options_1_1.done && (_a = options_1.return)) _a.call(options_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return returnValue;
        };
        Mdk4MainComponent.prototype.handleError = function (msg) {
            this.dialog.open(ErrorDialogComponent, {
                hasBackdrop: true,
                width: '400px',
                data: msg
            });
        };
        Mdk4MainComponent.prototype.pollBackgroundJob = function (jobId, onComplete, onInterval) {
            var _this = this;
            this.backgroundJobInterval = setInterval(function () {
                _this.API.request({
                    module: 'mdk4',
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
        Mdk4MainComponent.prototype.monitorMdk4 = function (jobId, outputFile) {
            var _this = this;
            this.isBusy = true;
            this.outputFile = outputFile;
            this.pollBackgroundJob(jobId, function (result) {
                _this.isBusy = false;
                _this.loadOutput(_this.outputFile);
                if (result.job_error) {
                    _this.handleError(result.job_error);
                }
            }, function () {
                _this.loadOutput(_this.outputFile);
            });
        };
        Mdk4MainComponent.prototype.rebind = function (lastJob) {
            switch (lastJob.job_type) {
                case 'mdk4':
                    this.monitorMdk4(lastJob.job_id, lastJob.job_info);
                    this.loadOutput(lastJob.job_info);
                    break;
                case 'opkg':
                    this.monitorDependencies(lastJob.job_id);
                    break;
            }
        };
        Mdk4MainComponent.prototype.monitorDependencies = function (jobId) {
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
        Mdk4MainComponent.prototype.showUninstallDialog = function () {
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
        Mdk4MainComponent.prototype.checkForDependencies = function () {
            var _this = this;
            this.API.request({
                module: 'mdk4',
                action: 'check_dependencies'
            }, function (response) {
                if (response.error !== undefined) {
                    _this.handleError(response.error);
                    return;
                }
                _this.hasDependencies = response;
            });
        };
        Mdk4MainComponent.prototype.installDependencies = function () {
            var _this = this;
            this.API.request({
                module: 'mdk4',
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
        Mdk4MainComponent.prototype.showLicenseDialog = function () {
            this.dialog.open(LicenseDialogComponent, {
                width: '900px',
                hasBackdrop: true
            });
        };
        Mdk4MainComponent.prototype.loadOutput = function (outputFile) {
            var _this = this;
            this.refreshingOutput = true;
            this.API.request({
                module: 'mdk4',
                action: 'load_output',
                output_file: outputFile
            }, function (response) {
                _this.refreshingOutput = false;
                if (response.error) {
                    _this.handleError(response.error);
                    return;
                }
                _this.output = response;
            });
        };
        Mdk4MainComponent.prototype.downloadOutput = function () {
            this.API.APIDownload('/root/.mdk4/' + this.outputFile, 'mdk4-' + this.outputFile + '.log');
        };
        Mdk4MainComponent.prototype.startMdk4 = function () {
            var _this = this;
            this.API.request({
                module: 'mdk4',
                action: 'start',
                command: this.command,
                input_iface: this.interfaceIn,
                output_iface: this.interfaceOut
            }, function (response) {
                if (response.error !== undefined) {
                    _this.handleError(response.error);
                    return;
                }
                _this.monitorMdk4(response.job_id, response.output_file);
            });
        };
        Mdk4MainComponent.prototype.stopMdk4 = function () {
            var _this = this;
            this.API.request({
                module: 'mdk4',
                action: 'stop'
            }, function (response) {
                if (response.error !== undefined) {
                    _this.handleError(response.error);
                    return;
                }
                _this.isBusy = false;
            });
        };
        Mdk4MainComponent.prototype.startup = function () {
            var _this = this;
            this.API.request({
                module: 'mdk4',
                action: 'startup'
            }, function (response) {
                if (response.error !== undefined) {
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
        Mdk4MainComponent.prototype.ngOnInit = function () {
            this.startup();
        };
        Mdk4MainComponent.prototype.ngOnDestroy = function () {
            clearInterval(this.backgroundJobInterval);
        };
        Mdk4MainComponent.ctorParameters = function () { return [
            { type: ApiService },
            { type: dialog.MatDialog }
        ]; };
        Mdk4MainComponent = __decorate([
            core.Component({
                selector: 'lib-mdk4-main',
                template: "<div class=\"dependency-card-centered\" *ngIf=\"!hasDependencies\">\n    <mat-card class=\"dependency-card\">\n        <mat-card-content>\n            <mat-card-title>Welcome To MDK4</mat-card-title>\n            <mat-card-subtitle>Lets get started.</mat-card-subtitle>\n\n            <mat-divider></mat-divider>\n            <br />\n\n            <p>You need to install some dependencies before you can use this module.</p>\n            <p>This will make an request to the internet.</p>\n\n            <br/>\n            <br/>\n            <div class=\"dependency-card-centered\">\n                <button mat-raised-button color=\"accent\"\n                        class=\"dependency-card-button\"\n                        (click)=\"installDependencies()\"\n                        [disabled]=\"isInstalling\">\n                    <span *ngIf=\"isInstalling\">\n                        <mat-spinner [diameter]=\"20\" class=\"spinner-padding\" color=\"accent\"></mat-spinner>\n                    </span>\n                    <span *ngIf=\"!isInstalling\">\n                        Install Dependencies\n                    </span>\n                </button>\n            </div>\n            <br/>\n            <div class=\"dependency-card-centered\">\n                <button mat-button color=\"accent\" (click)=\"showLicenseDialog();\">View MDK4 License</button>\n            </div>\n        </mat-card-content>\n    </mat-card>\n</div>\n\n<div *ngIf=\"hasDependencies\" class=\"controls-container\" fxLayoutGap=\"20px\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\">\n    <mat-card class=\"control-item\">\n        <mat-card-content>\n            <div class=\"right-left-split-container\">\n                <mat-card-title>MDK4</mat-card-title>\n                <span><mat-spinner [diameter]=\"24\" color=\"accent\" style=\"margin-left: 8px\" *ngIf=\"isBusy\"></mat-spinner></span>\n                <span fxFlex></span>\n                <mat-menu #mdk4Menu>\n                    <button mat-menu-item (click)=\"showLicenseDialog();\">MDK4 License</button>\n                    <button mat-menu-item (click)=\"showUninstallDialog();\">Uninstall Dependencies</button>\n                </mat-menu>\n                <button mat-icon-button [matMenuTriggerFor]=\"mdk4Menu\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n            </div>\n\n            <form>\n                <mat-form-field style=\"width: 100%\">\n                    <mat-label>Command</mat-label>\n                    <input matInput class=\"control-input\" name=\"command\" [(ngModel)]=\"command\"/>\n                </mat-form-field>\n                <mat-form-field style=\"width: 100%\">\n                    <mat-label>Attack Mode</mat-label>\n                    <mat-select name=\"attackMode\" [(ngModel)]=\"attackMode\" (ngModelChange)=\"update();\">\n                        <mat-option>--</mat-option>\n                        <mat-option *ngFor=\"let mode of attackModes | keyvalue\" value=\"{{ mode.key }}\">{{ mode.value }}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                <div class=\"right-left-split-container\">\n                    <mat-form-field style=\"width: 100%\">\n                        <mat-label>Input Interface</mat-label>\n                        <mat-select name=\"inputIface\" [(ngModel)]=\"interfaceIn\" (ngModelChange)=\"update();\">\n                            <mat-option>--</mat-option>\n                            <mat-option *ngFor=\"let iface of interfaces\" value=\"{{ iface }}\">{{ iface }}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <span fxFlex style=\"margin-right: 8px; margin-left: 8px;\"></span>\n                    <mat-form-field style=\"width: 100%\">\n                        <mat-label>Output Interface</mat-label>\n                        <mat-select name=\"outputIface\" [(ngModel)]=\"interfaceOut\" (ngModelChange)=\"update();\">\n                            <mat-option>--</mat-option>\n                            <mat-option *ngFor=\"let iface of interfaces\" value=\"{{ iface }}\">{{ iface }}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </form>\n            <button mat-raised-button\n                    color=\"accent\"\n                    style=\"width: 100%;\"\n                    *ngIf=\"!isBusy\"\n                    (click)=\"startMdk4();\">\n                Start\n            </button>\n\n            <button mat-raised-button\n                    color=\"warn\"\n                    style=\"width: 100%;\"\n                    *ngIf=\"isBusy\"\n                    (click)=\"stopMdk4();\">\n                Stop\n            </button>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card class=\"control-item\">\n        <mat-card-content>\n            <mat-card-title>Attack Options</mat-card-title>\n            <i *ngIf=\"!attackMode\">No attack mode selected.</i>\n            <div *ngIf=\"attackMode\">\n                <ng-container *ngFor=\"let option of attackOptions[attackMode]\">\n                    <div style=\"width: 100%;\">\n                        <mat-checkbox [(ngModel)]=\"option.toggled\"\n                                      (ngModelChange)=\"update();\"\n                                      class=\"control-input\">{{ option.description }}\n                        </mat-checkbox>\n\n                        <form *ngIf=\"option.hasInput && option.toggled\" style=\"width: 100%;\">\n                            <mat-form-field>\n                                <mat-label>{{ option.inputLabel }}</mat-label>\n                                <input matInput\n                                       [(ngModel)]=\"option.input\"\n                                       (ngModelChange)=\"update();\"\n                                       class=\"control-input\"\n                                       name=\"{{option.value}}input\"/>\n                            </mat-form-field>\n                        </form>\n                    </div>\n                </ng-container>\n            </div>\n        </mat-card-content>\n    </mat-card>\n\n</div>\n\n<br/>\n\n<mat-card *ngIf=\"hasDependencies\">\n    <mat-card-content>\n        <div class=\"output-container\">\n            <div class=\"right-left-split-container\">\n                <mat-card-title>Output</mat-card-title>\n                <span fxFlex></span>\n                <button mat-icon-button [disabled]=\"refreshingOutput || outputFile == null\" (click)=\"loadOutput(outputFile);\"><mat-icon>refresh</mat-icon></button>\n                <button mat-icon-button [disabled]=\"isBusy || outputFile == null\" (click)=\"downloadOutput();\"><mat-icon>cloud_download</mat-icon></button>\n            </div>\n            <textarea class=\"output-textarea\" placeholder=\"No output to display...\" [(ngModel)]=\"output\" readonly></textarea>\n            <div class=\"right-left-split-container\">\n                <span *ngIf=\"isBusy\"><i>Refreshes every 5 seconds...</i></span>\n                <span><mat-spinner [diameter]=\"24\" color=\"accent\" *ngIf=\"refreshingOutput\"></mat-spinner></span>\n                <span fxFlex></span>\n            </div>\n        </div>\n    </mat-card-content>\n</mat-card>\n",
                styles: [".right-left-split-container{display:flex;flex-direction:row;justify-content:flex-start;align-self:flex-start}.dependency-card{max-width:600px;min-height:246px}.dependency-card-centered{display:flex;justify-content:center;align-self:center}.dependency-card-button{width:75%;display:flex;justify-content:center;align-items:center}.spinner-padding{margin-top:6px;margin-bottom:7px}.controls-container{display:flex;width:100%;flex-wrap:wrap;justify-content:space-between}.control-item{flex:1;margin-right:2px;margin-left:2px}.output-container{width:100%;margin-top:20px}.control-input{width:100%}.output-textarea{width:100%;height:300px;min-height:200px;max-height:600px;resize:vertical;margin:0 0 5px;padding:0;background-color:#efefef;border-radius:2px;border-color:#cecece;max-lines:50}"]
            })
        ], Mdk4MainComponent);
        return Mdk4MainComponent;
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

    var Mdk4ResultDialogComponent = /** @class */ (function () {
        function Mdk4ResultDialogComponent(dialogRef, API, dialog, data) {
            this.dialogRef = dialogRef;
            this.API = API;
            this.dialog = dialog;
            this.data = data;
            this.isBusy = false;
            this.content = null;
        }
        Mdk4ResultDialogComponent.prototype.handleError = function (msg) {
            this.closeDialog();
            this.dialog.open(ErrorDialogComponent, {
                hasBackdrop: true,
                width: '400px',
                data: msg
            });
        };
        Mdk4ResultDialogComponent.prototype.loadContent = function () {
            var _this = this;
            this.isBusy = true;
            this.API.request({
                module: 'mdk4',
                action: 'load_output',
                output_file: this.data.historyFile
            }, function (response) {
                _this.isBusy = false;
                if (response.error) {
                    _this.handleError(response.error);
                    return;
                }
                _this.content = response;
            });
        };
        Mdk4ResultDialogComponent.prototype.closeDialog = function () {
            this.dialogRef.close();
        };
        Mdk4ResultDialogComponent.prototype.ngOnInit = function () {
            this.loadContent();
        };
        Mdk4ResultDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef },
            { type: ApiService },
            { type: dialog.MatDialog },
            { type: undefined, decorators: [{ type: core.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
        ]; };
        Mdk4ResultDialogComponent = __decorate([
            core.Component({
                selector: 'lib-mdk4-result-dialog',
                template: "<div class=\"right-left-split-container\">\n    <h1 mat-dialog-title>Scan Output</h1>\n    <span *ngIf=\"isBusy\"><mat-spinner [diameter]=\"24\" color=\"accent\" style=\"margin-left: 8px\"></mat-spinner></span>\n    <span fxFlex></span>\n    <button mat-icon-button (click)=\"closeDialog();\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>\n\n<mat-divider></mat-divider>\n<br />\n\n<div class=\"result-body-container\">\n    <textarea class=\"output-textarea\" [(ngModel)]=\"content\" placeholder=\"Scan Results...\" readonly></textarea>\n</div>\n",
                styles: [".output-textarea{width:100%;min-height:480px;resize:none;margin:0 0 5px;padding:0;background-color:#efefef;border-radius:2px;border-color:#cecece;max-lines:50}.result-body-container{height:500px;display:flex;flex-direction:column}"]
            }),
            __param(3, core.Inject(dialog.MAT_DIALOG_DATA))
        ], Mdk4ResultDialogComponent);
        return Mdk4ResultDialogComponent;
    }());

    var Mdk4HistoryComponent = /** @class */ (function () {
        function Mdk4HistoryComponent(API, dialog) {
            this.API = API;
            this.dialog = dialog;
            this.isBusy = false;
            this.mdk4History = [];
        }
        Mdk4HistoryComponent.prototype.handleError = function (msg) {
            this.dialog.open(ErrorDialogComponent, {
                hasBackdrop: true,
                width: '400px',
                data: msg
            });
        };
        Mdk4HistoryComponent.prototype.loadHistory = function () {
            var _this = this;
            this.isBusy = true;
            this.API.request({
                module: 'mdk4',
                action: 'load_history'
            }, function (response) {
                _this.isBusy = false;
                if (response.error) {
                    _this.handleError(response.error);
                    return;
                }
                _this.mdk4History = response;
            });
        };
        Mdk4HistoryComponent.prototype.deleteItem = function (item) {
            var _this = this;
            this.isBusy = true;
            this.API.request({
                module: 'mdk4',
                action: 'delete_result',
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
        Mdk4HistoryComponent.prototype.deleteAll = function () {
            var _this = this;
            this.isBusy = true;
            this.API.request({
                module: 'mdk4',
                action: 'clear_history'
            }, function (response) {
                _this.isBusy = false;
                if (response.error) {
                    _this.handleError(response.error);
                    return;
                }
                _this.loadHistory();
            });
        };
        Mdk4HistoryComponent.prototype.downloadItem = function (item) {
            this.API.APIDownload('/root/.mdk4/' + item, 'mdk4-' + item + '.log');
        };
        Mdk4HistoryComponent.prototype.showMdk4Results = function (item) {
            this.dialog.open(Mdk4ResultDialogComponent, {
                hasBackdrop: true,
                width: '900px',
                data: {
                    historyFile: item
                }
            });
        };
        Mdk4HistoryComponent.prototype.showDeleteDialog = function (item) {
            var _this = this;
            this.dialog.open(ConfirmationDialogComponent, {
                hasBackdrop: true,
                width: '400px',
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
        Mdk4HistoryComponent.prototype.showClearHistoryDialog = function () {
            var _this = this;
            this.dialog.open(ConfirmationDialogComponent, {
                hasBackdrop: true,
                width: '400px',
                data: {
                    title: 'Delete All?',
                    message: 'You are about to delete all mdk4 history. This action can not be undone. Are you sure you want to continue?',
                    handleResponse: function (affirmative) {
                        if (affirmative) {
                            _this.deleteAll();
                        }
                    }
                }
            });
        };
        Mdk4HistoryComponent.prototype.ngOnInit = function () {
            this.loadHistory();
        };
        Mdk4HistoryComponent.ctorParameters = function () { return [
            { type: ApiService },
            { type: dialog.MatDialog }
        ]; };
        Mdk4HistoryComponent = __decorate([
            core.Component({
                selector: 'lib-mdk4-history',
                template: "<mat-card>\n    <mat-card-content>\n        <div class=\"right-left-split-container\">\n            <mat-card-title>History</mat-card-title>\n            <span *ngIf=\"isBusy\"><mat-spinner [diameter]=\"24\" color=\"accent\" style=\"margin-left: 8px\"></mat-spinner></span>\n            <span fxFlex></span>\n            <mat-menu #historyMenu>\n                <button mat-menu-item (click)=\"loadHistory();\">Refresh</button>\n                <button mat-menu-item (click)=\"showClearHistoryDialog();\">Delete History</button>\n            </mat-menu>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"historyMenu\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n        </div>\n\n        <br/>\n        <mat-divider></mat-divider>\n        <br/>\n\n        <mat-table style=\"display: none;\">\n            <mat-header-row *matHeaderRowDef=\"[]\"></mat-header-row>\n        </mat-table>\n        <table class=\"mat-table\" style=\"min-width: 100%; overflow-x: auto; justify-content: center;\">\n            <tbody>\n            <ng-container *ngFor=\"let item of mdk4History\">\n                <tr class=\"mat-row\">\n                    <td class=\"mat-cell\">{{ item }}</td>\n                    <td class=\"mat-cell\"><button mat-icon-button (click)=\"showMdk4Results(item);\"><mat-icon>folder</mat-icon></button></td>\n                    <td class=\"mat-cell\"><button mat-icon-button (click)=\"downloadItem(item);\"><mat-icon>cloud_download</mat-icon></button></td>\n                    <td class=\"mat-cell\"><button mat-icon-button (click)=\"showDeleteDialog(item);\"><mat-icon>delete</mat-icon></button></td>\n                </tr>\n            </ng-container>\n            </tbody>\n        </table>\n        <i *ngIf=\"mdk4History.length == 0;\">No mdk4 history to display.</i>\n    </mat-card-content>\n</mat-card>\n",
                styles: [""]
            })
        ], Mdk4HistoryComponent);
        return Mdk4HistoryComponent;
    }());

    var routes = [
        {
            path: '',
            component: Mdk4Component,
            children: [
                { path: '', component: Mdk4MainComponent, pathMatch: 'full' },
                { path: 'history', component: Mdk4HistoryComponent }
            ]
        },
    ];
    var mdk4Module = /** @class */ (function () {
        function mdk4Module() {
        }
        mdk4Module = __decorate([
            core.NgModule({
                declarations: [Mdk4Component, Mdk4MainComponent, Mdk4HistoryComponent, ConfirmationDialogComponent, Mdk4ResultDialogComponent, ErrorDialogComponent, LicenseDialogComponent, UninstallDialogComponent],
                imports: [
                    common.CommonModule,
                    router.RouterModule.forChild(routes),
                    MaterialModule,
                    flexLayout.FlexLayoutModule,
                    forms.FormsModule
                ],
                exports: [Mdk4Component],
                entryComponents: [
                    Mdk4ResultDialogComponent,
                    ConfirmationDialogComponent,
                    ErrorDialogComponent,
                    LicenseDialogComponent,
                    UninstallDialogComponent
                ]
            })
        ], mdk4Module);
        return mdk4Module;
    }());

    exports.Mdk4Component = Mdk4Component;
    exports.mdk4Module = mdk4Module;
    exports.mdk4Service = mdk4Service;
    exports.ɵa = Mdk4MainComponent;
    exports.ɵb = ApiService;
    exports.ɵc = Mdk4HistoryComponent;
    exports.ɵd = ConfirmationDialogComponent;
    exports.ɵf = Mdk4ResultDialogComponent;
    exports.ɵg = ErrorDialogComponent;
    exports.ɵh = LicenseDialogComponent;
    exports.ɵi = UninstallDialogComponent;
    exports.ɵj = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mdk4.umd.js.map
