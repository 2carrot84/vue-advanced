import {fetchItemInfo, fetchList, fetchUserInfo} from "@/api";

export default {
    async FETCH_USER({ commit }, username) {
        let response = await fetchUserInfo(username);
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM({commit}, id) {
        let response = await fetchItemInfo(id);
        commit('SET_ITEM', response.data);
        return response;
    },
    // Promise
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(data => {
    //             commit('SET_LIST', data.data);
    //             return data;
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // },
    // async & await
    async FETCH_LIST({ commit }, pageName) {
        try {
            let response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        } catch (e) {
            console.error(e);
        }
    },
}