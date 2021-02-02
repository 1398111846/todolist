import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state: {
        selected: null,
        todos: [
            {
                icon: 'home',
                type: 'personal',
                tasks: [
                    {
                        id: 1,
                        title: 'Dating',
                        date: new Date(),
                        done: false,
                        delete: false,
                    }
                ],
                colors: ['#fbc8d4', '#9795f0'],
            },
            {
                icon: 'briefcase',
                type: 'work',
                tasks: [
                    {
                        id: 2,
                        title: 'Write Paper',
                        date: new Date(),
                        done: false,
                        delete: false,
                    }
                ],
                colors: ['#ffecd2', '#fcb69f']
            },
            {
                icon: 'leanpub',
                type: 'study',
                tasks: [
                    {
                        id: 3,
                        title: 'Learn JS',
                        date: new Date(),
                        done: false,
                        delete: false,
                    }
                ],
                colors: ['#13547a', '#80d0c7']
            }
        ],
        currentIndex: 1,
    },
    getters: {
        todayTasks(state) {
            const tasks = [];
            return tasks;
        }
    },
})

export default store