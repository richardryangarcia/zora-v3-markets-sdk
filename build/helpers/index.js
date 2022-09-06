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
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoraModuleManager = exports.offers = exports.erc721TransferHelper = exports.auction = exports.askOmnibus = exports.ask = void 0;
var ask_1 = __importDefault(require("../addresses/ask"));
var askOmnibus_1 = __importDefault(require("../addresses/askOmnibus"));
var auctionCoreEth_1 = __importDefault(require("../addresses/auctionCoreEth"));
var erc721TransferHelper_1 = __importDefault(require("../addresses/erc721TransferHelper"));
var offers_1 = __importDefault(require("../addresses/offers"));
var zoraModuleManager_1 = __importDefault(require("../addresses/zoraModuleManager"));
var asks_1 = require("../asks");
var askOmnibus_2 = require("../askOmnibus");
var auctions_1 = require("../auctions");
var erc721TransferHelper_2 = require("../erc721TransferHelper");
var offers_2 = require("../offers");
var zoraModuleManager_2 = require("../zoraModuleManager");
var utils_1 = require("../utils");
var ask = function (signerOrProvider) { return __awaiter(void 0, void 0, void 0, function () {
    var chainId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, utils_1.getChainId)(signerOrProvider)];
            case 1:
                chainId = _a.sent();
                if (!ask_1.default[chainId])
                    throw new Error("Module unsupported on this network");
                return [2 /*return*/, new asks_1.Ask(signerOrProvider, ask_1.default[chainId])];
        }
    });
}); };
exports.ask = ask;
var askOmnibus = function (signerOrProvider) { return __awaiter(void 0, void 0, void 0, function () {
    var chainId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, utils_1.getChainId)(signerOrProvider)];
            case 1:
                chainId = _a.sent();
                if (!askOmnibus_1.default[chainId])
                    throw new Error("Module unsupported on this network");
                return [2 /*return*/, new askOmnibus_2.AskOmnibus(signerOrProvider, askOmnibus_1.default[chainId])];
        }
    });
}); };
exports.askOmnibus = askOmnibus;
var auction = function (signerOrProvider) { return __awaiter(void 0, void 0, void 0, function () {
    var chainId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, utils_1.getChainId)(signerOrProvider)];
            case 1:
                chainId = _a.sent();
                if (!auctionCoreEth_1.default[chainId])
                    throw new Error("Module unsupported on this network");
                return [2 /*return*/, new auctions_1.AuctionCoreEth(signerOrProvider, auctionCoreEth_1.default[chainId])];
        }
    });
}); };
exports.auction = auction;
var erc721TransferHelper = function (signerOrProvider) { return __awaiter(void 0, void 0, void 0, function () {
    var chainId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, utils_1.getChainId)(signerOrProvider)];
            case 1:
                chainId = _a.sent();
                if (!erc721TransferHelper_1.default[chainId])
                    throw new Error("Module unsupported on this network");
                return [2 /*return*/, new erc721TransferHelper_2.Erc721TransferHelper(signerOrProvider, erc721TransferHelper_1.default[chainId])];
        }
    });
}); };
exports.erc721TransferHelper = erc721TransferHelper;
var offers = function (signerOrProvider) { return __awaiter(void 0, void 0, void 0, function () {
    var chainId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, utils_1.getChainId)(signerOrProvider)];
            case 1:
                chainId = _a.sent();
                if (!offers_1.default[chainId])
                    throw new Error("Module unsupported on this network");
                return [2 /*return*/, new offers_2.OffersV1(signerOrProvider, offers_1.default[chainId])];
        }
    });
}); };
exports.offers = offers;
var zoraModuleManager = function (signerOrProvider) { return __awaiter(void 0, void 0, void 0, function () {
    var chainId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, utils_1.getChainId)(signerOrProvider)];
            case 1:
                chainId = _a.sent();
                if (!zoraModuleManager_1.default[chainId])
                    throw new Error("Module unsupported on this network");
                return [2 /*return*/, new zoraModuleManager_2.ZoraModuleManager(signerOrProvider, zoraModuleManager_1.default[chainId])];
        }
    });
}); };
exports.zoraModuleManager = zoraModuleManager;
