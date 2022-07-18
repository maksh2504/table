(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
var Table_1 = require("./components/Table");
var table1 = new Table_1.Table(document.getElementById("table"));
var a = 0;
exports.getUsers = fetch('https://jsonplaceholder.typicode.com/users/').then(function (response) {
    return response.json();
}).then(function (data) {
    return data;
});

},{"./components/Table":2}],2:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;

var Table = function Table(table) {
    var _this = this;

    _classCallCheck(this, Table);

    this.tablePrint = function () {
        console.log(_this.users);
        console.log(_this.posts);
        // const tbody = document.createElement("tbody")
        //
        // for(let field in this.users) {
        //     const row = document.createElement("tr")
        //     const tdName = document.createElement("td")
        //
        //
        //     // tdName.innerText = users[field].name
        //     // console.log(tdName.innerText)
        //     row.append(tdName)
        //
        //
        //
        //     tbody.append(row)
        // }
        //
        // this.tableElement.append(tbody)
    };
    this.addUsers = function (users) {
        for (var field in users) {
            var _users$field = users[field],
                id = _users$field.id,
                name = _users$field.name,
                username = _users$field.username,
                email = _users$field.email;

            var address = users[field].address.street + ", " + users[field].address.suite + ", " + users[field].address.city + ", " + users[field].address.zipcode;
            _this.users[id] = {
                name: name,
                username: username,
                email: email,
                address: address
            };
        }
    };
    this.addPosts = function (posts) {
        for (var field in posts) {
            var _posts$field = posts[field],
                userId = _posts$field.userId,
                id = _posts$field.id,
                title = _posts$field.title,
                body = _posts$field.body;

            _this.posts[id] = {
                userId: userId,
                id: id,
                title: title,
                body: body
            };
        }
    };
    this.users = [];
    this.posts = [];
    this.tableElement = table;
};

exports.Table = Table;

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
