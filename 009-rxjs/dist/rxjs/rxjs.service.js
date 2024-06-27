"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RxjsService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const axios_1 = require("axios");
let RxjsService = class RxjsService {
    constructor() {
        this.githubURL = "https://api.github.com/search/repositories?q=";
    }
    getGithub(text, count) {
        return (0, rxjs_1.from)(axios_1.default.get(`${this.githubURL}${text}`))
            .pipe((0, rxjs_1.map)((res) => res.data.items), (0, rxjs_1.mergeAll)())
            .pipe((0, rxjs_1.take)(count));
    }
    async searchRepositories(text, hub) {
        console.log("hub = ", hub);
        const data$ = this.getGithub(text, 10).pipe((0, rxjs_1.toArray)());
        data$.subscribe(() => { });
        return await (0, rxjs_1.firstValueFrom)(data$);
    }
};
exports.RxjsService = RxjsService;
exports.RxjsService = RxjsService = __decorate([
    (0, common_1.Injectable)()
], RxjsService);
//# sourceMappingURL=rxjs.service.js.map