"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_1 = __importDefault(require("./user"));
var app = express();
app.get('/', function (req, res) {
    var newUser = new user_1.default(1, 'joey', 'scripter');
    res.send(newUser);
});
app.listen(3020, function () {
    console.log('Server listening on port 3020');
});
