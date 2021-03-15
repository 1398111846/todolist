<template>
    <div class="app_bar">
        <span class="app_bar_left">
            <i :class="['fa', `fa-${left}`, 'fa-2x']"></i>
        </span>
        <h1>{{title}}</h1>
        <span class="app_bar_right">
            <i :class="['fa', `fa-${right}`, 'fa-2x']"></i>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default:'',
        },
        left: {
            type: String,
            default:'chevron-left',
        },
        right: {
            type: String,
            default:'ellipsis-v',
        }
    }
}
</script>

<style lang="scss">
    .app_bar {
        display: flex;
        align-items: center;
        height: 44px;
        font-size: 9px;
        z-index: 1;

        h1 {
            display: flex;
            justify-content: center;
            flex: 1;
        }
        span {
            padding: 0 20px;
        }
    }
</style>