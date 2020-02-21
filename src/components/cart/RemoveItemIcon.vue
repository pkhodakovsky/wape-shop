<template>
  <div class="remove-item" @click="$emit('click')">
    <svg viewBox="0 0 24.99 24.99" id="icon-close-empty">
      <path
        d="M18.15,6.84a1,1,0,0,0-1.41,0l-4.24,4.24L8.25,6.84A1,1,0,0,0,6.84,8.25l4.24,
                4.24L6.84,16.74a1,1,0,1,0,1.41,1.41l4.24-4.24,4.24,4.24a1,1,0,0,0,
                1.41-1.41l-4.24-4.24,4.24-4.24A1,1,0,0,0,18.15,6.84Z"></path>
      <path
        d="M21.33,3.65a12.49,12.49,0,1,0,0,17.68A12.52,12.52,0,0,0,21.33,3.65Zm-.71,
                17a11.49,11.49,0,1,1,0-16.26A11.51,11.51,0,0,1,20.63,20.63Z"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'RemoveItem',
};
</script>

<style scoped>
  .remove-item {
    position: absolute;
    top: 1em;
    right: 1em;
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
  }
  .remove-item svg {
    fill: gray;
  }
  .remove-item:hover svg {
    fill: white;
  }

  @media screen and (max-width: 1023px) {
    .cart-item .remove-item {
      margin-top: 1em;
    }
  }
</style>
