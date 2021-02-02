<template>
  <div class="todo" :class="{todo_selected: selected}">
    <div class="todo_head">
      <div class="todo_icon">
        <i :class="['fa', `fa-${todo.icon}`]"></i>
      </div>
      <div class="todo_menu">
        <i :class="['fa', 'fa-bars']"></i>
      </div>
    </div>
    <div class="todo_body">
      <p class="todo_tips">{{ todo.length }} Tasks</p>
      <h2>{{ todo.type }}</h2>
      <div class="todo_progress">
        <span class="todo_progress_line">
          <i :style="{ width: progress, backgroundImage: progressColor }"></i>
        </span>
        <span class="todo_progress_num">{{ progress }}</span>
      </div>

      <div class="todo_tasks">
          <h4 class="todo_tasks_title" v-if="todayTasks.length">Today</h4>
          <ul>
              <li 
              v-for="task in todayTasks"
              :key="task.id"
              >
                <task :task="task" />
              </li>
          </ul>
          <h4 class="todo_tasks_title" v-if="tomorrowTasks.length">Tomorrow</h4>
          <ul>
              <li 
              v-for="task in tomorrowTasks"
              :key="task.id"
              >
                <task :task="task" />
              </li>
          </ul>
          <h4 class="todo_tasks_title" v-if="outdatedTasks.length">Outdated</h4>
          <ul>
              <li 
              v-for="task in outdatedTasks"
              :key="task.id"
              >
                <task :task="task" />
              </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {today, tomorrow} from '../store/shared.js'
import Task from './Task.vue'
export default {
    components: {
        Task,
    },
    props: {
        todo: {
            type: Object,
            required: true,
        },
        selected: {
            type: String,
        }
    },
    computed: {
        color() {
            return this.todo.colors[0];
        },
        progress() {
            const totalCount = this.todo.tasks.filter(t => !t.deleted).length;
            const doneCount = this.todo.tasks.filter(t => !t.deleted && t.done).length;
            return `${Math.round(doneCount / totalCount) * 100}%`;
        },
        progressColor() {
            const colorBottom = `color-stop(30%, ${this.todo.colors[0]})`;
            const colorTop = `to(${this.todo.colors[1]})`;
            return `-webkit-gradient(linear, left bottom, left top, ${colorBottom}, ${colorTop})`
        },
        todayTasks() {
            return this.todo.tasks.filter(task => 
            {task.date >= today && task.date < tomorrow
            });
        },
        tomorrowTasks() {
            return this.todo.tasks.filter(task => {
                task.date >= tomorrow
            });
        },
        outdatedTasks() {
            return this.todo.tasks.filter(task => {
                task.date < today
            });
        },
    }
}
</script>

<style lang="scss">
    .todo {
        flex: 1;
        margin: 0 8px;
        overflow: hidden;
        box-shadow: 0 10px 10px rgba($color: #000000, $alpha: 0.3);
        color: #666;
    }
    .todo_selected {
        visibility: hidden;
    }
    .todo_head {
        display: flex;
        padding: 20px;
        height: 44px;
        justify-content: space-between;
        align-items: flex-start;
        transform: translate3d(0, 0, 0);
        will-change: transform;
    }
    .todo_body {
        padding: 0 20px;
        transform: translate3d(0, 160px, 0);
        will-change: transform;
    }

</style>
