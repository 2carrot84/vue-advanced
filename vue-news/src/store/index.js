import Vue from 'vue'
import Vuex from 'vuex';
import {fetchAskList, fetchJobsList, fetchNewsList} from "@/api";

Vue.use(Vuex);
// 상태관리도구,
// 여러 컴포넌트간 공유되는 데이터 속성
export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
    },
    actions: {
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
        FETCH_ASK(context) {
            fetchAskList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_ASK', response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_JOBS', response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
});