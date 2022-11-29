import {fetchItemInfo, fetchList, fetchUserInfo} from "@/api";

export default {
    FETCH_USER({ commit }, username) {
        fetchUserInfo(username)
            .then(response => {
                commit('SET_USER', response.data);
            })
            .catch(error => {
                console.error(error);
            })
    },
    FETCH_ITEM({commit}, id) {
        fetchItemInfo(id)
            .then(response => {
                commit('SET_ITEM', response.data);
            })
            .catch(error => {
                console.error(error);
            })
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(data => {
                commit('SET_LIST', data);
            })
            .catch(error => {
                console.error(error);
            })
    }
}