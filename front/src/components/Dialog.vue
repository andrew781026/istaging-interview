<template>
  <div class="pop-up-container" v-show="show" :class="[closing && 'closing',opening && 'opening']">
    <div class="pop-up-container-root">
      <div class="pop-up-box">
        <div class="pop-up-title flex justifyContent">
          <h3></h3>
          <img class='close' @click='closeDialog()'
               src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMS45OTJwdCIgdmlld0JveD0iMCAwIDUxMS45OTIgNTExLjk5MiIgd2lkdGg9IjUxMS45OTJwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNDE1LjQwMjM0NCA0OTUuNDIxODc1LTE1OS40MDYyNS0xNTkuNDEwMTU2LTE1OS40MDYyNSAxNTkuNDEwMTU2Yy0yMi4wOTc2NTYgMjIuMDkzNzUtNTcuOTIxODc1IDIyLjA5Mzc1LTgwLjAxOTUzMiAwLTIyLjA5Mzc1LTIyLjA5NzY1Ni0yMi4wOTM3NS01Ny45MjE4NzUgMC04MC4wMTk1MzFsMTU5LjQxMDE1Ny0xNTkuNDA2MjUtMTU5LjQxMDE1Ny0xNTkuNDA2MjVjLTIyLjA5Mzc1LTIyLjA5NzY1Ni0yMi4wOTM3NS01Ny45MjE4NzUgMC04MC4wMTk1MzIgMjIuMDk3NjU3LTIyLjA5Mzc1IDU3LjkyMTg3Ni0yMi4wOTM3NSA4MC4wMTk1MzIgMGwxNTkuNDA2MjUgMTU5LjQxMDE1NyAxNTkuNDA2MjUtMTU5LjQxMDE1N2MyMi4wOTc2NTYtMjIuMDkzNzUgNTcuOTIxODc1LTIyLjA5Mzc1IDgwLjAxOTUzMSAwIDIyLjA5Mzc1IDIyLjA5NzY1NyAyMi4wOTM3NSA1Ny45MjE4NzYgMCA4MC4wMTk1MzJsLTE1OS40MTAxNTYgMTU5LjQwNjI1IDE1OS40MTAxNTYgMTU5LjQwNjI1YzIyLjA5Mzc1IDIyLjA5NzY1NiAyMi4wOTM3NSA1Ny45MjE4NzUgMCA4MC4wMTk1MzEtMjIuMDk3NjU2IDIyLjA5Mzc1LTU3LjkyMTg3NSAyMi4wOTM3NS04MC4wMTk1MzEgMHptMCAwIiBmaWxsPSIjZTc2ZTU0Ii8+PC9zdmc+"/>
        </div>
        <div class="pop-up-content">
          <div class="form-group">
            <div class="row">
              <label for="">身分證字號</label>
              <div class="input-block">
                <input type="text" value="A123456789" disabled>
              </div>
            </div>
            <div class="row">
              <label for="">身分證字號</label>
              <div class="input-block">
                <input type="text" value="A123456789" disabled>
                <div class="error-block">
                  sosososo
                </div>
              </div>
            </div>
            <div class="row">
              <label for="">身分證字號</label>
              <div class="input-block">
                <input type="text" value="A123456789" disabled>
              </div>
            </div>
            <div class="row">
              <label for="">身分證字號</label>
              <div class="input-block">
                <input type="text" value="A123456789" disabled>
              </div>
            </div>
            <div class="row">
              <label for="">身分證字號</label>
              <div class="input-block">
                <input type="text" value="A123456789" disabled>
              </div>
            </div>
            <div class="row">
              <label for="">身分證字號</label>
              <div class="input-block">
                <input type="text" value="A123456789" disabled>
              </div>
            </div>
          </div>
        </div>
        <div class="pop-up-action">
          <PrimaryButton type="primary">Save</PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {dialogShow, openDialog, closeDialog} from '@/views/useBook'
import PrimaryButton from '@/components/PrimaryButton.vue'

export default {
  name: 'MyDialog',
  setup () {
    return {dialogShow, openDialog, closeDialog}
  },
  components: {
    PrimaryButton
  },
  data () {
    return {
      closing: false,
      opening: false,
      show: false
    }
  },
  watch: {
    dialogShow (newDialogShow, oldDialogShow) {
      if (newDialogShow !== oldDialogShow) {
        if (newDialogShow) {
          this.show = true
          this.opening = true
          setTimeout(() => this.opening = false, 600)
        } else {
          this.closing = true
          setTimeout(() => {
            this.show = false
            this.closing = false
          }, 600)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/form.scss";

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

  &::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
    background-color: rgba(86, 86, 86, 0.75)
  }
}

.pop-up-container-root {
  height: 100vh;
  overflow: auto;
  z-index: 5;
}

.pop-up-box {
  margin: 128px 32px 32px 32px;
  border-radius: 4px;
  z-index: 6;
  background-color: #fff;
  transition: all 0.3s;
  border: 1px solid #565656;
  width: 500px;

  > .pop-up-title {
    display: flex;
    position: relative;
    min-height: 60px;

    h3 {
      font-weight: bold;
      font-size: 16px;
    }

    .close {
      cursor: pointer;
      position: absolute;
      right: 14px;
      top: 14px;
      height: 32px;
      width: 32px;

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
    max-height: 600px;
  }

  > .pop-up-action {
    padding: 15px;
    display: flex;
    justify-content: center;
  }
}
</style>
