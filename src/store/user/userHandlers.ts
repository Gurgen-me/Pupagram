import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { userLogin, getCurUser } from "./userActions";
import { userState } from "./userTypes";


export const userLoginHandler = (builder: ActionReducerMapBuilder<userState>) => {
    builder
    .addCase(userLogin.pending,
        (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.error = ''
        }
    )
    .addCase(userLogin.rejected,
        (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = action.error.message
        }
    )
    .addCase(userLogin.fulfilled,
        (state, action) => {
            localStorage.setItem('token', action.payload.token)
            state.isLoading = false;
            state.isSuccess = true;
            state.error = '';
            state.curUser = action.payload;
            state.token = action.payload.token;
        }
    )
}

export const getCurUserHandler = (builder: ActionReducerMapBuilder<userState>) => {
    builder
    .addCase(getCurUser.rejected,
        (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = action.error.message
        }
    )
    .addCase(getCurUser.fulfilled,
        (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.error = '';
            state.curUser = action.payload;
        }
    )
}
