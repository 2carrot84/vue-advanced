import {fetchAskList, fetchItemInfo, fetchJobsList, fetchNewsList, fetchUserInfo} from "@/api";

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    FETCH_ASK({commit}) {
        fetchAskList()
            .then(response => {
                commit('SET_ASK', response.data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then(response => {
                context.commit('SET_JOBS', response.data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    FETCH_USER({ commit }, username) {
        fetchUserInfo(username)
            .then(response => {
                commit('SET_USER', response.data);
            })
            .catch(error => {
                console.error(error);
            })
    },
    FETCH_ITEM({ commit }, id) {
        fetchItemInfo(id)
            .then(response => {
                commit('SET_ITEM', response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }
}