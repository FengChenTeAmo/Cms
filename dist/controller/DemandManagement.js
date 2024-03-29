"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("castle-koa/dist/lib/controller");
class DemandManagement extends controller_1.default {
    addDemandManagement(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const add = yield this.M("demand").add({ Maker: post.Maker, DeterminingP: post.DeterminingP, PutTime: post.PutTime, ConfirmationTime: post.ConfirmationTime, DemanUser: post.DemanUser, Importance: post.Importance, ProjectCycle: post.ProjectCycle, PlannedTime: post.PlannedTime, ProjectLeader: post.ProjectLeader, DemandLeader: post.DemandLeader, DemandID: post.DemandID, Descriptive: post.Descriptive, Technological: post.Technological, Acceptance: post.Acceptance, Enclosure: post.Enclosure, Scheme: post.Scheme, Difficulties: post.Difficulties, Precondition: post.Precondition });
            console.log(add);
        });
    }
}
exports.default = DemandManagement;
//# sourceMappingURL=DemandManagement.js.map