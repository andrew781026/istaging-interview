<template>
  <div class="pop-up-container" v-show="show" :class="[closing && 'closing',opening && 'opening']">
    <div class="pop-up-container-root">
      <div class="pop-up-box">
        <div class="pop-up-title flex justifyContent">
          <i class="icon icon-close close" @click='closeDialog()'></i>
        </div>
        <div class="pop-up-content">
          <div class="form-group">
            <FormItem label="Name" :required="true" :error-msg="errMsg.name">
              <input type="text" v-model="dialogBook.title">
            </FormItem>
            <FormItem label="Author" :required="true" :error-msg="errMsg.author">
              <input type="text" v-model="dialogBook.author">
            </FormItem>
            <FormItem label="Pub date" :required="true" :error-msg="errMsg.publicationDate">
              <input type="date" v-model="dialogBook.publicationDate">
            </FormItem>
            <FormItem label="ISBN" :required="true" :error-msg="errMsg.isbn">
              <input type="text" v-model="dialogBook.isbn">
            </FormItem>
            <FormItem label="Description" :required="true" :error-msg="errMsg.description">
              <textarea v-model="dialogBook.description"></textarea>
            </FormItem>
          </div>
        </div>
        <div class="pop-up-action">
          <PrimaryButton type="primary">
            <i class="icon icon-save"></i>
            Save
          </PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {dialogShow, openDialog, closeDialog, dialogBook} from '@/views/useBook'
import PrimaryButton from '@/components/PrimaryButton.vue'
import FormItem from '@/components/FormItem.vue'

export default {
  name: 'MyDialog',
  setup() {
    return {dialogShow, dialogBook, openDialog, closeDialog}
  },
  components: {
    PrimaryButton,
    FormItem
  },
  data() {
    return {
      closing: false,
      opening: false,
      show: false,
      params: [
        {name: 'title', label: 'Name'},
        {name: 'author', label: 'Author'},
        {name: 'publicationDate', label: 'Pub date'},
        {name: 'isbn', label: 'ISBN'},
        {name: 'description', label: 'Description'}
      ],
      errMsg: {}
    }
  },
  watch: {
    dialogShow(newDialogShow, oldDialogShow) {
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
    backdrop-filter: blur(4px);
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
    max-height: 600px;
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
