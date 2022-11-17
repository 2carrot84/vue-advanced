import Vue from 'vue'
import VueRouter from 'vue-router';
import AskView from "@/views/AskView";
import NewsView from "@/views/NewsView";
import JobsView from "@/views/JobsView";
import userView from "@/views/UserView";
import itemView from "@/views/ItemView";


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/user/:id',
            component: userView,
        },
        {
            path: '/item',
            component: itemView,
        }
    ]
});
