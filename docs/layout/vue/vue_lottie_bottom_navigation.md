---
title: "Vue展示与操作lottie动画"
tags:
- Vue
- Lottie
---

## 插件

- [lottie-web](https://www.npmjs.com/package/lottie-web)


## 基础使用

1. 安装
```sh
npm install lottie-web
```
2. 基本用法
```javascript
const animation = lottie.loadAnimation({
  container: document.getElementById('domId'), // 绑定dom节点
  renderer: 'svg', // 渲染方式:svg、canvas
  loop: true, // 是否循环播放，默认：false
  autoplay: true, // 是否自动播放, 默认true
  animationData: // AE动画使用bodymovie导出为json数据
})
```
3. 常用方法
```javascript
animation.play(); // 播放，从当前帧开始播放

animation.stop(); // 停止，并回到第0帧

animation.pause(); // 暂停，并保持当前帧

animation.goToAndStop(value, isFrame); // 跳到某个时刻/帧并停止isFrame(默认false)指示value表示帧还是时间(毫秒)

animation.goToAndPlay(value, isFrame); // 跳到某个时刻/帧并进行播放

animation.goToAndStop(30, true); // 跳转到第30帧并停止

animation.goToAndPlay(300); // 跳转到第300毫秒并播放

animation.playSegments(arr, forceFlag); // arr可以包含两个数字或者两个数字组成的数组，forceFlag表示是否立即强制播放该片段

animation.playSegments([10,20], false); // 播放完之前的片段，播放10-20帧

animation.playSegments([[0,5],[10,18]], true); // 直接播放0-5帧和10-18帧

animation.setSpeed(speed); // 设置播放速度，speed为1表示正常速度

animation.setDirection(direction); // 设置播放方向，1表示正向播放，-1表示反向播放

animation.destroy(); // 删除该动画，移除相应的元素标签等。
```

## 案例

### lottie底部导航栏

![BottomNavigationBar](../../images/bottom_navigation_bar.png)

BottomNavigationBar.vue
```vue
<template>
  <ul ref="mainNav" class="main-nav">
    <NavigationItem 
      v-for="(item, index) in tableData"
      :key="index"
      :current-index="index"
      :item-data="item"
      :is-select="index == currentTab"
      @change-index="handleChangeIndex"
    />
  </ul>
</template>
<script>
import NavigationItem from "@/components/index/NavigationItem.vue";
import tabbarName from "@/assets/lotties/tabbar_home.json";
import tabbarReel from "@/assets/lotties/tabbar_reel.json";
import tabbarHot from "@/assets/lotties/tabbar_hot.json";
import tabbarGame from "@/assets/lotties/tabbar_game.json";
import tabbarMy from "@/assets/lotties/tabbar_my.json";
export default {
  components: {
    NavigationItem
  },
  data() {
    return {
      text: "首页",
      isFullScreen: false,
      tableData: [
        {
          status: 0,
          tabName: "首页",
          rootPath: "/",
          lottieUrl: tabbarName,
        },
        {
          status: 0,
          tabName: "漫画",
          rootPath: "/short",
          lottieUrl: tabbarReel,
        },
        {
          status: 0,
          tabName: "书架",
          rootPath: "/hot",
          lottieUrl: tabbarHot,
        },
        {
          status: 0,
          tabName: "游戏",
          rootPath: "/wali",
          lottieUrl: tabbarGame,
        },
        {
          status: 0,
          tabName: "我的",
          rootPath: "/my",
          lottieUrl: tabbarMy,
        },
      ],
      currentTab: 0
    };
  },
  methods: {
    handleChangeIndex(index) {
      this.currentTab = index;
    }
  },
};
</script>
```

NavigationItem.vue
```vue
<template>
  <li @click="handleClick">
    <router-link
      :to="itemData.rootPath"
    >
      <div ref="lavContainer" class="table-item" />
      <p :class="[
        'table-item-name',
        isSelect ? 'current-style': ''
      ]">
        {{ itemData.tabName }}
      </p>
    </router-link>
  </li>
</template>

<script>
import lottie from 'lottie-web'
export default {
  name: "CpNavigationItem",
  props: {
    currentIndex: {
      type: Number,
      default: 0
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    itemData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      anim: null
    }
  },
  watch: {
    isSelect(newVal) {
      if (newVal) {
        this.play();
      } else {
        this.goToAndStop();
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.anim = lottie.loadAnimation({
        container: this.$refs.lavContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: JSON.parse(JSON.stringify(this.itemData.lottieUrl)), 
        // 直接使用 this.itemData.lottieUrl 可能会出现没有及时GC导致内存溢出
        // https://github.com/airbnb/lottie-web/issues/1733
      });
      if (this.isSelect) {
        this.anim.play();
      }
    },
    play() {
      this.anim.play();
    },
    goToAndStop() {
      this.anim.goToAndStop(0, false);
    },
    handleClick() {
      console.log('test');
      this.$emit('change-index', this.currentIndex);
    }
  },
}
</script>
```

## 参考

- [lottie官方文档](https://airbnb.io/lottie/#/README)
- [如何在vue中使用Lottie](https://juejin.cn/post/6983670062293598221)
- [无星的前端之旅（二）——vue 使用 lottie](https://juejin.cn/post/6844904144248160264)