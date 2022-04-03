import { GraphQLList } from "graphql";
import Post from '../types/Post'; 
import { fakeDatabase } from '../../FakeDatabase'; 


// list of objects Post
export default {
    posts: {
        type: new GraphQLList(Post),
        description: "Get a list of recent blog posts",
        args: {}, // if we want arguments later
        // resolve function to access the data and fetch them
        resolve: function(){
            return fakeDatabase.getBlogPosts(); 
        }

    }
}