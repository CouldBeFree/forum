export const state = () => ({
    signUp: false,
    login: false,
    isLogged: false,
    user: ''
});

export const mutations = {
    toggleSignUp(state) {
        state.signUp = !state.signUp
    },
    toggleLogin(state) {
        state.login = !state.login
    },
    loggedUser(state, payload) {
        state.isLogged = payload
    },
    setUser(state, payload) {
        state.user = payload
    }
};
