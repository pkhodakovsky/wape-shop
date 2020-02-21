<template>
  <div class="order-success-popup">
    <div class="inner">
      <h2>Спасибо за Ваш заказ</h2>
      <p>Ожидайте звонка представителя</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSuccessPopup',
};
</script>

<style scoped>
  .order-success-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .7);
  }
  .inner {
    width: 60%;
    height: 60%;
    padding: 10em;
    border-radius: 10px;
    background-color: #646464;
    text-align: center;
    color: #000;
  }
  .inner h2 {
    color: #000;
  }
</style>
