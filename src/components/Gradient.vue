<template>
    <div class="gradient">
        <gradient-color
            v-for="(item, index) in todos"
            :key="item.name"
            :colors="item.colors"
            :active="index == currentIndex"
        /> 
    </div>
</template>

<script>
import { mapState } from 'vuex';
import GradientColor from './GradientColor';
export default {
    components: {
        GradientColor
    },
    computed: {
        ...mapState(['todos', 'currentIndex']),
    }
}
</script>

<style lang="scss">
.gradient {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
}
</style>