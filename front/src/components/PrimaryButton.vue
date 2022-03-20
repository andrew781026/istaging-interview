<template>
  <button class="btn" :class="{'btn-primary':type === 'primary','is-round':round}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    type: String,
    round: Boolean
  }
}
</script>

<style scoped lang="scss">
@import "../scss/app.scss";

/* :focus-visible 教學 - https://www.zhangxinxu.com/wordpress/2019/03/css-focus-visible/ */
button:focus:not(:focus-visible) {
  outline: 0;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.btn:disabled {
  cursor: not-allowed;
  background-color: $gray-color;
  border-color: $gray-color;
}

.btn-primary {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
}

.btn-primary:hover, .btn-primary:active {
  color: #fff;
  background-color: darken($primary-color,10%);
  border-color:  darken($primary-color,10%);
}

.btn-primary:focus {
  color: #fff;
  background-color: darken($primary-color,10%);
  border-color: darken($primary-color,10%);
  box-shadow: 0 0 0 0.25rem lighten($primary-color,30%);
}

.btn.is-round {
  border-radius: 999px;
}

@media (max-width: 576px) {
  .btn-primary {
    width: 33.33%;
  }
}
</style>
