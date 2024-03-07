import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getFeedPosts } from "./feedActions";
import { feedState } from "./feedTypes";
import { getPostComments } from "../blog/blogActions";


export const getFeedPostsHandler = (builder: ActionReducerMapBuilder<feedState>) => {
    builder
        .addCase(getFeedPosts.pending, (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = ''
            }
        )
        .addCase(getFeedPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            // state.error = action.error.message
            }
        )
        .addCase(getFeedPosts.fulfilled,(state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.error = '';
            state.posts = action.payload.posts;
            console.log(action.payload.posts);
            }
        )
}

export const getPostCommentsHandler = (builder: ActionReducerMapBuilder<feedState>) => {
    builder
        .addCase(getPostComments.pending,
            (state) => {
                // state.isLoadingComments = true;

            }
        )
        .addCase(getPostComments.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                // state.error = action.payload
            }
        )
        .addCase(getPostComments.fulfilled,
            (state, action) => {
                state.posts.map((post) => {
                    if (post.id == action.payload.comments[0].postId) {
                        post.comments = action.payload.comments;
                    }
                    return post
                })

            }
        )
}