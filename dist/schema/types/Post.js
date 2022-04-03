"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostInputType = exports.Post = undefined;

var _graphql = require("graphql");

var _Author = require("./Author");

var _Comment = require("./Comment");

var _FakeDatabase = require("../../FakeDatabase");

// chaque object type doit avoir un nom, une description et plusieurs champs
var Post = exports.Post = new _graphql.GraphQLObjectType({
    name: "Post",
    description: "Details of a blog post",
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLInt },
            title: { type: _graphql.GraphQLString },
            content: { type: _graphql.GraphQLString },
            author: {
                type: _Author.Author,
                // resolve function to access to the database
                // la fonction va recevoir une copie de notre objet post
                // et maintenant on veut retourner les info liées à ce post
                // on prend la valeur de post.author (à savoir l'id de l'auteur)
                // pour obtenir les info de l'auteur
                resolve: function resolve(post) {
                    return _FakeDatabase.fakeDatabase.getAuthor(post.author);
                }
            },
            // comments = list of comments, so we will wrap the Type: Comment dans un new graphQl list object
            comments: {
                type: new _graphql.GraphQLList(_Comment.Comment),
                resolve: function resolve(post) {
                    return _FakeDatabase.fakeDatabase.getCommentsForPost(post.id);
                }

            }
        };
    }

});

// export const PostInputType = new GraphQLInputObjectType ({

//     name: "PostInput",
//     fields: {
//         title: { type : new GraphQLNonNull(GraphQLString)},
//         content: { type : new GraphQLNonNull(GraphQLString)},
//         author: { type : new GraphQLNonNull(GraphQLString)}

//     }

// })


var PostInputType = exports.PostInputType = new _graphql.GraphQLInputObjectType({
    name: 'PostInput',
    fields: {
        title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        author: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    }
});