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
exports.deleteUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../../models/user"));
const crypto_1 = require("crypto");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.find();
    res.status(200).json({ users });
});
exports.getUsers = getUsers;
// GET - users/:id
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const user = yield user_1.default.findById(id);
    res.status(200).json({ user });
});
exports.getUser = getUser;
// POST - users
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req === null || req === void 0 ? void 0 : req.body;
        const users = yield user_1.default.find({});
        const duplicateUsers = users.find((user) => { var _a; return ((_a = user === null || user === void 0 ? void 0 : user.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === req.body.name.toLowerCase(); });
        if (duplicateUsers) {
            res.status(400).json({
                message: "User name already exists",
                todo: { name: "", birthdate: "", coutry: "" },
                todos: users,
            });
        }
        else {
            const user = new user_1.default({
                id: (0, crypto_1.randomUUID)(),
                name: body === null || body === void 0 ? void 0 : body.name,
                birthdate: body.birthdate,
                country: body.country,
            });
            const newUser = yield user.save();
            const allUsers = yield user_1.default.find();
            res
                .status(201)
                .json({ message: "User added", user: newUser, users: allUsers });
        }
    }
    catch (error) {
        console.log("error", error);
        throw error;
    }
});
exports.createUser = createUser;
// DELETE - users
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const deletedUser = yield user_1.default.findByIdAndRemove(req.params.id);
        const allUsers = yield user_1.default.find();
        res.status(200).json({
            message: "Todo deleted",
            todo: deletedUser,
            todos: allUsers,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteUser = deleteUser;
