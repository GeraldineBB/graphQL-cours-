'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Post = require('../types/Post');

var _Post2 = _interopRequireDefault(_Post);

var _FakeDatabase = require('../../FakeDatabase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    post: {
        type: _Post2.default,
        description: "Get a specific post",
        args: {
            id: {
                type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) // arg is required
            }
        },
        resolve: function resolve(parent, _ref) {
            var id = _ref.id;

            return _FakeDatabase.fakeDatabase.getBlogPost(id);
        }

    }
};