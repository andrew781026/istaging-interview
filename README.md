# IStaging 前端面試題目

---

iStaging 2D FrontEnd Engineer Assessment Test

### 目前使用 Tech

> Tech

- 使用 vue ui 建立的腳手架
- vue3 + eslint with Standard + scss + TypeScript

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
