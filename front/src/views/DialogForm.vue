<template>
  <Dialog>
    <template #body>
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
    </template>
    <template #footer>
      <PrimaryButton type="primary" @click="save(dialogBook)">
        <i class="icon icon-save"></i>
        Save
      </PrimaryButton>
    </template>
  </Dialog>
</template>

<script>
import {
  dialogShow,
  closeDialog,
  dialogBook,
  dialogType,
  updateSingleBook,
  addSingleBook
} from './useBook'
import Dialog from '@/components/Dialog.vue'
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
  name: 'DialogForm',
  setup() {
    return {dialogShow, dialogBook, dialogType, closeDialog}
  },
  components: {
    Dialog,
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

</style>
