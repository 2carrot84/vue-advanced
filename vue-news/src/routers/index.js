import Vue from 'vue'
import VueRouter from 'vue-router';
import userView from "@/views/UserView";
import itemView from "@/views/ItemView";
import createListView from '../views/CreateListView'


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
            component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
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
