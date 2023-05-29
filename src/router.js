import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage";
import AuthPage from "@/pages/AuthPage";
import ListenersPage from "@/pages/ListenersPage";
import OptionsPage from "@/pages/OptionsPage";
import ListenerPage from "@/pages/ListenerPage";
import ChartPage from "@/pages/ChartPage";

const routes = [
    {
        path: "/",
        name: "Home",
        meta:{layout:"main"},
        component: HomePage
    },
    {
        path: "/settings",
        name: "settings",
        meta:{layout:"main"},
        component: OptionsPage
    },
    {
        path: "/charts",
        name: "charts",
        meta:{layout:"main"},
        component: ChartPage
    },
    {
        path: "/listeners",
        name: "Listeners",
        meta:{layout:"main"},
        component: ListenersPage
    },
    {
        path: "/listeners/:id",
        name: "Listener",
        meta:{layout:"main"},
        component: ListenerPage
    },
    {
        path: "/login",
        name: "login",
        meta:{layout:"auth"},
        component: AuthPage
    },
   ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;