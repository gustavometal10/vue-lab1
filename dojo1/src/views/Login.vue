<template>
<div class="container">
    <form-login />
</div>
</template>

<style scoped>
 .container {
   height: 100vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: flex-start;
 }
</style>

<script>

import FormLogin from '@/components/FormLogin.vue';

export default {
  name: 'login',
  components: {
    FormLogin,
  },
};
</script>
