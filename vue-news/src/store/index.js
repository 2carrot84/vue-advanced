import Vue from 'vue'
import Vuex from 'vuex';
import {fetchNewsList} from "@/api";

Vue.use(Vuex);
// 상태관리도구,
// 여러 컴포넌트간 공유되는 데이터 속성
export const store = new Vuex.Store({
    state: {
        news: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        }
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
        }
    }
});