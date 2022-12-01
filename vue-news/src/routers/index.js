import Vue from 'vue'
import VueRouter from 'vue-router';
import userView from "@/views/UserView";
import itemView from "@/views/ItemView";
import createListView from '../views/CreateListView'
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";


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
            // component: createListView('NewsView'),
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView'),
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView('JobsView'),
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
