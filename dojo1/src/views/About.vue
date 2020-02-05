<template>
  <div class="about">
    <h1>This is an about page</h1>
    <StoreToken></StoreToken>
  </div>
</template>


<script>
// @ is an alias to /src
import StoreToken from '@/components/StoreToken.vue';

export default {
  name: 'about',
  components: {
    StoreToken,
  },
};
</script>
