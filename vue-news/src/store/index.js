import Vue from 'vue'
import Vuex from 'vuex';
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex);
// 상태관리도구,
// 여러 컴포넌트간 공유되는 데이터 속성
export const store = new Vuex.Store({
    state: {
        user: {},
        item: {},
        list: [],
    },
    getters: {
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedItem(state) {
            return state.item;
        },
    },
    mutations,
    actions
});