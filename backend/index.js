"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
const urls = [
    "https://api.agify.io/?name=",
    "https://api.genderize.io/?name=",
    "https://api.nationalize.io/?name=",
];
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const name = req.query.name;
    try {
        const age = yield (yield axios_1.default.get(urls[0] + name)).data;
        const gender = yield (yield axios_1.default.get(urls[1] + name)).data;
        const nationality = yield (yield axios_1.default.get(urls[2] + name)).data;
        res.json({
            age: age.age,
            gender: gender.gender,
            nationality: (_a = nationality.country[0]) === null || _a === void 0 ? void 0 : _a.country_id,
        });
    }
    catch (error) {
        res.json(error);
    }
}));
app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${3000}`);
});
