<template>
  <transition name="dialog-fade">
  <div class="pop-up-container" v-show="dialogShow">
      <div class="mask" ></div>
      <div class="pop-up-container-root" >
        <div class="pop-up-box">
          <div class="pop-up-title flex justifyContent">
            <i class="icon icon-close close" @click='closeDialog()'></i>
            <slot name="header"></slot>
          </div>
          <div class="pop-up-content">
            <slot name="body"></slot>
          </div>
          <div class="pop-up-action">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
  </div>
  </transition>
</template>

<script>
import { dialogShow, closeDialog} from '@/views/useBook'

export default {
  name: 'MyDialog',
  setup() {
    return {dialogShow, closeDialog}
  }
}
</script>

<style scoped lang="scss">

.dialog-fade-enter-active {
  animation: dialog-fade-in .3s
}

.dialog-fade-leave-active {
  animation: dialog-fade-in .3s reverse
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.mask-fade-enter-active {
  animation: dialog-fade-in .3s
}

.mask-fade-leave-active {
  animation: dialog-fade-in .3s reverse
}

@keyframes mask-fade-in {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

.pop-up-container.opening .pop-up-box {
  animation: bounce-in .5s;
}

.pop-up-container.closing .pop-up-box {
  animation: bounce-in .5s reverse forwards;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.pop-up-container {
  min-height: 100vh;
  min-width: 100vw;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;

  .mask {
    content: '';
    position: fixed;
    width: 100%;
    height: 200%;
    left: 0;
    top: 0;
    z-index: 0;
    backdrop-filter: blur(4px);
    background-color: rgba(86, 86, 86, 0.75)
  }
}

.pop-up-container-root {
  min-width: 100vw;
  height: 100vh;
  overflow: auto;
  z-index: 5;
  padding: 64px 32px 32px 32px;
}

.pop-up-box {
  margin: auto;
  border-radius: 4px;
  z-index: 6;
  background-color: #fff;
  transition: all 0.3s;
  border: 1px solid #565656;
  width: 550px;

  > .pop-up-title {
    display: flex;
    position: relative;
    min-height: 60px;

    h3 {
      font-weight: bold;
      font-size: 16px;
    }

    .close {
      color: var(--red);
      cursor: pointer;
      position: absolute;
      right: 12px;
      top: 12px;
      font-size: 32px;

      &:hover {
        filter: opacity(0.3);
      }

      &:active {
        transform: translateY(2px);
      }
    }
  }

  > .pop-up-content {

    font-size: 14px;
    padding: 0 30px;
    line-height: 2em;
    overflow-y: auto;
    max-height: 700px;
  }

  > .pop-up-action {
    padding: 15px;
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 576px) {

  .pop-up-box {
    width: calc(100vw - 64px);
  }
}
</style>
