"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    birthdate: {
        type: String,
        allowNull: true,
    },
    country: {
        type: String,
        allowNull: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("User", userSchema);
