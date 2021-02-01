<template>
  <div class="avatar" :class="{ avatar__selected: !!selected }">
    <div class="avatar_face">
      <img src="../assets/avatar.jpg" />
    </div>
    <h1 class="avatar_name">Hi, Suki!</h1>
    <p class="avatar_tips">
      It is a wonderful life. <br>You have {{ todayTasks.length }} tasks to do
      today.
    </p>
    <p class="avatar_date">Today: {{ today | dateString }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      today: new Date(),
    };
  },
  computed: {
    ...mapState(["selected"]), //vuex?
    ...mapGetters(["todayTasks"]),
  },
  filters: {
    //dateString?
    dateString(val) {
      return val
        .toDateString()
        .toUpperCase()
        .replace(/(\s\d{4})$/, ", $1");//正则?
    },
  },
};
</script>

<style lang="scss">
    .avatar {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0 40px;
        height: 300px;
        transition: all 0.5s ease;
    }
    
    .avatar__selected {
        transform: translate3d(0, 20px, 0);
        opacity: 0;
    }
    .avatar_face {
        height: 44px;
        width: 44px;
        border-radius: 100%;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        img {
            height: 100%;
            width: 100%;
            display: block;
        }
    }

    .avatar_name {
        margin-top: 32px;
        padding: 0 6px;
        font-size: 32px;
        letter-spacing: 0.8px;
        font-weight: 400;
    }

    .avatar_tips {
        margin-top: 16px;
        padding: 0 6px;
        font-size: 13px;
        font-weight: 200;
        opacity: 0.8;
        line-height: 1.6em;
    }

    .avatar_date {
        margin-top: 16px;
        margin-bottom: 16px;
        padding: 0 6px;
        font-size: 14px;
    }
</style>