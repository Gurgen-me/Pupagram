import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getFeedPosts = createAsyncThunk(
    "feed/getFeedPosts",
    async (pageNum: number, thunkAPI) => {
        try {
            let skip = pageNum * 10 - 10
            let res = await api.get('posts/?limit=10&skip=' + skip);
            if (res.status !== 200) {
                return thunkAPI.rejectWithValue(res.data);
            } 

            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
)


export const getPostComments = createAsyncThunk(
    "feed/getPostComments",
    async (postId: number, thunkAPI) => {
        try {
            let res = await api.get('comments/post/' +  postId);
            if (res.status !== 200) {
                return thunkAPI.rejectWithValue(res.data);
            } 

            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
)