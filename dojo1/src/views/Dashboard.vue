<template>
  <div class="about">
    <h1>Dash top</h1>
    <TableDashboard></TableDashboard>
  </div>
</template>


<script>
// @ is an alias to /src
import TableDashboard from '@/components/TableDashboard.vue';

export default {
  name: 'Dashboard',
  components: {
    TableDashboard,
  },
};
</script>
