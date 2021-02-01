import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state: {
        //存放的键值对就是所要管理的状态
        selected: null,
        todos: [
            {
                icon: 'user',
                name: 'personal',
                tasks: [
                    {
                        id: 1,
                        title: 'Dating',
                        date: new Date(),
                        done: false,
                        delete: false,
                    }
                ],
                colors: ['#ff6262', '#ffa947'],
            },
        ],
        currentIndex: 0,
    },
    getters: {
        todayTasks(state) {
            const tasks = [];
            return tasks;
        }
    },
})

export default store