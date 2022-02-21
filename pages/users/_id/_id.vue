<template>
  <div>
    <p>Welcome to the page {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  validate(data) {
    console.log(data);
    return true;
  },
};
</script>

<style>
</style>