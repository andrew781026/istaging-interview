# IStaging 前端面試題目

---

iStaging 2D FrontEnd Engineer Assessment Test

## [Demo Page](https://andrew781026.github.io/istaging-interview/)

[![screenshot](./docs/screenshot.png)](https://andrew781026.github.io/istaging-interview/)

### 建議修改項目

- [x] infinite scroll - 有 BUG 在上面 => (已修正) 設定的 ?isInfinite=true 才開啟 infinite scroll 的邏輯寫錯
- [x] 當資料全部載入時 , 可以隱藏 "載入更多" 的按鈕 => (已修正) 當資料長度 = 當前載入的數量 , 隱藏 "載入更多" 的按鈕
- [ ] NavBar 進入時 , Back 按鈕會閃一下 (在無 cache 模式會出現) => 原因 : vue-router 還沒載入時 , nav-bar 已顯示 , 因此暫時會有 this.$router.name =
  undefined 的情況
- [ ] Dialog 可改用 2 層 Transition
- [ ] 為了 CI / CD 下載到正確的套件 , 建議不要 ignore package-lock.json

### 目前使用 Tech

> Tech

- 使用 vue ui 建立的腳手架
- vue3 + eslint with Standard + scss + TypeScript

> dependencies

- [dayjs](https://day.js.org/) : 方便操作日期變化
- [isbn-util](https://www.npmjs.com/package/isbn-util) : 驗證文字是不是 ISBN
- [query-string](https://www.npmjs.com/package/query-string) : 將 params 轉換成 query-string
- [@vuepic/vue-datepicker](https://vue3datepicker.com/) : datepicker component

> Tool

- [FlatIcon](https://www.flaticon.com/)
- [fantasticon - convert svg to font icon](https://github.com/tancredi/fantasticon#readme)

### 技術要求

- 用 Vue 2 / 3
- 使用 Vue Router 做分頁
- 使用 CSS 預處理器 or 後處理器 ( sass / postCSS )
- 使用 ESLint
- 需要能相容以下目標瀏覽器 < last 2 versions and > 1 % ( Browserslist query ) >

### 規格需求

#### 1️⃣ UI

- 參考 Figma - https://www.figma.com/file/jeP1aNnM8CHd20MRONce4A/2D-FE-Assessment
- 樣式 ( 配色 . 寬高 . 元件等等 ) 不限制 . 以實作功能為優先

#### 2️⃣ API

- 規格說明 : API Docs - https://demo.api-platform.com/docs
- 因 CORS 問題 , API 請求網址請加 Proxy 服務網址的前綴
    - https://cors-anywhere-dot-vr-cam-161603.uc.r.appspot.com/
    - e.g. GET https://cors-anywhere-dot-vr-cam-161603.uc.r.appspot.com/https://demo.api-platform.com/books
- 使用到的資料欄位 :
    - ISBN
    - 名稱 title
    - 敘述 description
    - 作者 author
    - 出版日期 publicationDate
    - 圖書預覽圖請固定使用 : https://picsum.photos/800/600

#### 功能說明

#### 加分項目 ( 選擇性 )

1. 使用 Composition API
2. 使用 Nuxt.js & SSR 模式
3. 使用 TypeScript
4. 實作 SEO
5. 撰寫 Unit Test
6. 首頁圖書列表實作無限滾動
7. 確保圖書列表載入超過 10,000 筆圖書資料後 , 不影響瀏覽體驗
8. 實作 CI/CD , 並將網站部屬至任一雲端代管服務中
9. 加入其他可以展現個人能力和知識的細節 ( 架構 . 程式碼風格 . UX ...等 )
