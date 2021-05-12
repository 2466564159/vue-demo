import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login'
import Main from './components/Main'
import VideoPlay from './components/VideoPlay'
import ResultContent from './components/ResultContent'
import Pagination from './components/Pagination'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
			component: Login
        },
        {
            path: '/home',
			component: Main,
            children: [
                {
                    path: 'video',
                    component: VideoPlay
                },
                {
                    path: '',
                    components: {
                        default: ResultContent,
                        Pagination: Pagination
                    }
                }
            ]
        }
    ]
})