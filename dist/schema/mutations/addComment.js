'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Comment = require('../types/Comment');

var _FakeDatabase = require('../../FakeDatabase');

exports.default = {
    addComment: {
        type: _Comment.Comment,
        description: "Add a new comment for a blog post",
        args: {
            comment: { type: _Comment.CommentInputType }
        },
        resolve: function resolve(parent, _ref) {
            var comment = _ref.comment;

            return _FakeDatabase.fakeDatabase.addNewComment(comment);
        }

    }
};