'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Post = require('../types/Post');

var _Post2 = _interopRequireDefault(_Post);

var _FakeDatabase = require('../../FakeDatabase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list of objects Post
exports.default = {
    posts: {
        type: new _graphql.GraphQLList(_Post2.default),
        description: "Get a list of recent blog posts",
        args: {}, // if we want arguments later
        // resolve function to access the data and fetch them
        resolve: function resolve() {
            return _FakeDatabase.fakeDatabase.getBlogPosts();
        }

    }
};