<template>
<section> </section>
</template>

<style scoped>

</style>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'selfDestroy',
    ]),

  },
  created() {
    this.selfDestroy();
  },
};
</script>
