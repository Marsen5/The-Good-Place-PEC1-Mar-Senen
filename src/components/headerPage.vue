<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="js" setup>
const props = defineProps({
  title: String,
  description: String,
});
</script>


<style lang="scss" scoped>
@import "../style.scss";

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $color-primary; 
  color: white;
  padding: 4em;

  p{
    color: white;
    text-align: center;
  }
}

</style>


