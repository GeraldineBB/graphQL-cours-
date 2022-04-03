'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Author = undefined;

var _graphql = require('graphql');

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

var _FakeDatabase = require('../../FakeDatabase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// chaque object type doit avoir un nom, une description et plusieurs champs
var Author = exports.Author = new _graphql.GraphQLObjectType({
    name: "Author",
    description: "All the details of an author on the website",
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLString },
            name: { type: _graphql.GraphQLString },
            email: { type: _graphql.GraphQLString },
            posts: {
                // list of posts => new GraphQLList
                type: new _graphql.GraphQLList(_Post2.default),
                resolve: function resolve(author) {
                    return _FakeDatabase.fakeDatabase.getPostsOfAuthor(author.id);
                }
            }

        };
    }

});