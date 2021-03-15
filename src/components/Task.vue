<template>
    <transition name="fade">
        <div class="task" v-if="!task.deleted">
            <input :id="task.id" type="checkbox" v-model="task.done">
            <label :for="task.id">{{task.title}}</label>
            <transition>
                <span class="task_delete" v-show="task.done" @click="deleteTask">
                    <i class="fa fa-trash"></i>
                </span>
            </transition>
        </div>
    </transition>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props: {
        task: {
            type: Object,
        }
    },
    methods: {
        ...mapMutations(['deleteTask'])
    }
}
</script>

<style lang="scss">
.task {
    display: flex;
    padding: 10px 0;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    input {
        display: none;
        &:checked + label::after {
            display: inline-block;
        }
    }
}
</style>