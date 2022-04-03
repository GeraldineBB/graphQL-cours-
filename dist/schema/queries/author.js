'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Author = require('../types/Author');

var _Author2 = _interopRequireDefault(_Author);

var _FakeDatabase = require('../../FakeDatabase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list of objects Post
exports.default = {
    author: {
        type: _Author2.default,
        description: "Get a specific author",
        args: {
            id: {
                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) // arg is required
            }
        }, // we need an argument to know which specific author we want
        // we say that this query accepts an arg called id 
        // resolve function to access the data and fetch them
        // resolve: function (parent, args) {
        //     return fakeDatabase.getAuthor(args.id);
        // }

        // with destructuring
        resolve: function resolve(parent, _ref) {
            var id = _ref.id;

            return _FakeDatabase.fakeDatabase.getAuthor(id);
        }

    }
};