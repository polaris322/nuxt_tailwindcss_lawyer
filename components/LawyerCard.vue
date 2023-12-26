<template>
  <div class="">
    <img :src="image" />
    <h4 class="text-turquoise py-5">{{title}}</h4>
    <p class="pb-5">{{subTitle}}</p>
    <p class="text-[18px] pb-5">{{description}}</p>
    <div class="lg:flex md::max-lg:block sm:max-md:block flex gap-[10px]">
      <button class="btn-default rounded-[40px] p-3 text-[12px] sm:text-base sm:max-md:mb-[5px] lg:mb-0 mb-0">Арбитражный юрист</button>
      <button class="btn-default rounded-[40px] p-3 text-[12px] sm:text-base sm:max-md:mt-[5px] lg:mt-0 mt-0">Страховой юрист</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
  image: String,
  description: String
});
</script>

<style scoped>

</style>
