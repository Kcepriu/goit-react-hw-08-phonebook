export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefresing = state => state.auth.isRefresing;
export const selectUser = state => state.auth.user;
export const selectIsError = state => state.auth.isError;
export const selectTextError = state => state.auth.textError;
