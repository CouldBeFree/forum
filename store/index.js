export const state = () => ({
    signUp: false
});

export const mutations = {
    toggleSignUp(state) {
        state.signUp = !state.signUp
    }
};