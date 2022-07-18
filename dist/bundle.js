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

},{"./components/Table":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = exports.getUsers = void 0;
var BASE_URL = 'https://jsonplaceholder.typicode.com';
exports.getUsers = fetch(BASE_URL + "/users").then(function (response) {
    return response.json();
}).then(function (data) {
    return data;
});
exports.getPosts = new Promise(function () {
    for (var i = 1; i <= 10; i++) {
        fetch(BASE_URL + "/users/" + i + '/posts/').then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
    }
});
// export const getPosts: Promise<IPosts> = new Promise(`${BASE_URL}/users`)
//     .then(() => {
//     for(let i = 1; i <= 10; i++){
//         fetch('https://jsonplaceholder.typicode.com/users/' + i + '/posts/')
//             .then(response => response.json())
//             .then(data => data)
//         }
//     });

},{}],3:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var index_1 = require("../api/index");

var Table = function Table(table) {
    var _this = this;

    _classCallCheck(this, Table);

    this.tablePrint = function () {
        console.log(_this.users);
        console.log(_this.posts);
        var tbody = document.createElement("tbody");
        for (var i = 0; i < _this.users.length - 1; i++) {
            var row = document.createElement("tr");
            var tdName = document.createElement("td");
            tdName.innerText = _this.users[i].name;
            row.append(tdName);
            var tdUserName = document.createElement("td");
            tdUserName.innerText = _this.users[i].username;
            row.append(tdUserName);
            var tdEmail = document.createElement("td");
            tdEmail.innerText = _this.users[i].email;
            row.append(tdEmail);
            var tdAddress = document.createElement("td");
            tdAddress.innerText = _this.users[i].address;
            row.append(tdAddress);
            var tdPosts = document.createElement("td");
            var ulPosts = document.createElement("ul");
            for (var j = 0; j < _this.posts.length - 1; j++) {
                console.log(_this.users[i].id + " = " + _this.posts[j].userId);
                if (_this.users[i].id == _this.posts[j].userId) {
                    console.log(_this.users[i].id + " = " + _this.posts[j].userId);
                    var liPosts = document.createElement("li");
                    // liPosts.textContent = this.posts[j].title;
                    liPosts.appendChild(document.createTextNode(_this.posts[j].title));
                    ulPosts.appendChild(liPosts);
                    // ulPosts.append(liPosts);
                }
            }
            tdPosts.append(ulPosts);
            row.append(tdPosts);
            tbody.append(row);
        }
        _this.tableElement.append(tbody);
    };
    this.getTable = function () {
        index_1.getUsers.then(function (data) {
            return _this.addUsers(data);
        }).then(function () {
            return new Promise(function () {
                for (var i = 1; i <= _this.users.length; i++) {
                    fetch('https://jsonplaceholder.typicode.com/users/' + i + '/posts/').then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        return _this.addPosts(data);
                    });
                }
                _this.tablePrint();
            });
        });
    };
    // getTable = () => {
    //     getUsers
    //         .then(data => this.addUsers(data))
    //         .then(() => {
    //             getPosts
    //                 .then(data => this.addPosts(data))
    //                 .then(() => this.tablePrint())
    //         })
    // }
    this.addUsers = function (users) {
        for (var field in users) {
            var _users$field = users[field],
                id = _users$field.id,
                name = _users$field.name,
                username = _users$field.username,
                email = _users$field.email;

            var address = users[field].address.street + ", " + users[field].address.suite + ", " + users[field].address.city + ", " + users[field].address.zipcode;
            _this.users.push({
                id: id,
                name: name,
                username: username,
                email: email,
                address: address
            });
        }
    };
    this.addPosts = function (posts) {
        for (var field in posts) {
            var _posts$field = posts[field],
                userId = _posts$field.userId,
                id = _posts$field.id,
                title = _posts$field.title,
                body = _posts$field.body;

            _this.posts.push({
                userId: userId,
                id: id,
                title: title,
                body: body
            });
        }
    };
    this.users = [];
    this.posts = [];
    this.tableElement = table;
    this.getTable();
};

exports.Table = Table;

},{"../api/index":2}]},{},[1])

//# sourceMappingURL=bundle.js.map
