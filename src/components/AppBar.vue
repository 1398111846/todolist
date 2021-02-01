<template>
    <div class="app-bar">
        <span class="app-bar-left">
            <i :class="['fa', `fa-${left}`, 'fa-lg']"></i>
        </span>
        <h1>{{title}}</h1>
        <span class="app-bar-right">
            <i :class="['fa', `fa-${right}`, 'fa-lg']"></i>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default:'todo',
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
    .app-bar {
        display: flex;
        align-items: center;
        height: 44px;
        font-size: 12px;
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