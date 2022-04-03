import {Comment, CommentInputType } from '../types/Comment';
import { fakeDatabase } from '../../FakeDatabase';

export default {
    addComment: {
        type: Comment,
        description: "Add a new comment for a blog post",
        args: {
            comment: {type: CommentInputType}
        }, 
        resolve: function (parent, {comment}) {
            return fakeDatabase.addNewComment(comment);
        }

    }
}