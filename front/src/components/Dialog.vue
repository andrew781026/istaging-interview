<template>
  <div class="pop-up-container" v-show="show" :class="[closing && 'closing',opening && 'opening']">
    <div class="pop-up-container-root">
      <div class="pop-up-box">
        <div class="pop-up-title flex justifyContent">
          <i class="icon icon-close close" @click='closeDialog()'></i>
        </div>
        <div class="pop-up-content">
          <div class="form-group">
            <FormItem label="Name" :required="true" :error-msg="errMsg.title">
              <input type="text" v-model="dialogBook.title" @input="singleValidate('title',$event.target.value)">
            </FormItem>
            <FormItem label="Author" :required="true" :error-msg="errMsg.author">
              <input type="text" v-model="dialogBook.author" @input="singleValidate('author',$event.target.value)">
            </FormItem>
            <FormItem label="Pub date" :required="true" :error-msg="errMsg.publicationDate">
              <Datepicker v-model="dialogBook.publicationDate"
                          @input="singleValidate('publicationDate',$event.target.value)"/>
            </FormItem>
            <FormItem label="ISBN" :required="true" :error-msg="errMsg.isbn">
              <input type="text" v-model="dialogBook.isbn" @input="singleValidate('isbn',$event.target.value)">
            </FormItem>
            <FormItem label="Description" :required="true" :error-msg="errMsg.description">
              <textarea v-model="dialogBook.description"
                        @input="singleValidate('description',$event.target.value)"></textarea>
            </FormItem>
          </div>
        </div>
        <div class="pop-up-action">
          <PrimaryButton type="primary" @click="save(dialogBook)">
            <i class="icon icon-save"></i>
            Save
          </PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  dialogShow,
  closeDialog,
  dialogBook,
  dialogType,
  updateSingleBook,
  addSingleBook
} from '@/views/useBook'
import PrimaryButton from '@/components/PrimaryButton.vue'
import FormItem from '@/components/FormItem.vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import {validate as isbnValidate} from 'isbn-util'

const requiredValidator = (value, message) => (value !== 0 && value) ? null : message

const validateSingleAttr = (rules, attr, value, trigger) => {
  const singleRuleArr = rules[attr]
  let msg = ''
  const activeRules = singleRuleArr.filter(rule => trigger ? rule.trigger === trigger : true)

  for (const singleRule of activeRules) {
    if (singleRule.required) msg = requiredValidator(value, singleRule.message)
    else if (singleRule.validator) msg = singleRule.validator(value)
    // 如果有錯誤訊息的 msg , 就直接回傳那個文字
    if (msg) return {attr, msg}
  }

  return {attr, msg}
}

export default {
  name: 'MyDialog',
  setup() {
    return {dialogShow, dialogBook, dialogType, closeDialog}
  },
  components: {
    PrimaryButton,
    FormItem,
    Datepicker
  },
  data() {
    // ISBN-10 or ISBN-13
    const validateISBN = (value) => {
      if (!isbnValidate(value)) return '格式不正確，請輸入 ISBN-10 或 ISBN-13'
      else return null
    }

    // 模仿 element-ui 的 form 驗證的 rule
    const rules = {
      title: [
        {required: true, message: '書名為必填欄位', trigger: 'change'}
      ],
      author: [
        {required: true, message: '作者為必填欄位', trigger: 'change'}
      ],
      publicationDate: [
        {required: true, message: '發行日期為必填欄位', trigger: 'change'}
      ],
      isbn: [
        {required: true, message: 'ISBN為必填欄位', trigger: 'change'},
        {validator: validateISBN, trigger: 'change'}
      ],
      description: [
        {required: true, message: '描述為必填欄位', trigger: 'change'}
      ]
    }

    return {
      closing: false,
      opening: false,
      show: false,
      errMsg: {},
      rules
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
  },
  methods: {
    singleValidate(attr, value) {
      // 驗證對應的參數
      const obj = validateSingleAttr(this.rules, attr, value, 'change')
      this.errMsg[attr] = obj.msg
    },
    validate() {
      const errMsgs = Object.keys(this.rules).map(attr => validateSingleAttr(this.rules, attr, this.dialogBook[attr]))
      // 將產生的 errMsgs 放到畫面上
      errMsgs.forEach(item => this.errMsg[item.attr] = item.msg)
      return errMsgs.map(({msg}) => msg).join('')
    },
    save() {
      const newSingleBook = {
        title: this.dialogBook.title,
        author: this.dialogBook.author,
        publicationDate: this.dialogBook.publicationDate,
        isbn: this.dialogBook.isbn,
        description: this.dialogBook.description
      }

      const noError = !this.validate()
      if (noError && this.dialogType === 'create') addSingleBook(newSingleBook, this.$router)
      else if (noError && this.dialogType === 'edit') updateSingleBook(this.dialogBook.id, newSingleBook)
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
