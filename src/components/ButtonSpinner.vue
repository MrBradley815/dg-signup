<template>
  <div class="spin"></div>
</template>

<style>
  .spin {
    display: block;
    width: 16px;
    height: 16px;
    margin: 30px auto;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top-color: #222;
    animation: spin 1s ease infinite;
  }
  @keyframes spin {
    to {
      transform: rotateZ(360deg)
    }
  }
</style>