<template>
  <div class="bg-white rounded-[20px] sm:rounded-[40px] pt-10 sm:px-0 px-5">
    <h2 class="lg:pb-[80px] md:pb-[60px] pb-[40px] text-turquoise text-center">
      /<span class="text-gray-dark">Наши</span> юристы
    </h2>
    <div class="lg:mb-[60px] md:mb-[40px] sm:px-10 px-5 mb-0">
      <ssr-carousel
        :show-dots="true"
        :paginate-by-slide="true"
        :slides-per-page='4'
        :responsive='[
          {
            maxWidth: 1440,
            slidesPerPage: 3,
          },
          {
            maxWidth: 1024,
            slidesPerPage: 3,
          },
          {
            maxWidth: 767,
            slidesPerPage: 1
          }
        ]'
      >
        <template #dot='{ index, disabled }'>
          <svg v-if="disabled" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="mr-[5px] ml-[5px]">
            <circle cx="6" cy="6" r="3.75" fill="#30AFB8"/>
            <circle cx="6" cy="6" r="5.5" stroke="#30AFB8"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" class="mr-[5px] ml-[5px]">
            <circle cx="4" cy="4" r="4" fill="#B2B2B2"/>
          </svg>
        </template>
        <div class="slide" v-for="(lawyer, index) in lawyers" :key="index">
          <LawyerCard :image="lawyer.image"
                      :title="lawyer.title"
                      :sub-title="lawyer.subTitle"
                      :description="lawyer.description" />
        </div>
      </ssr-carousel>
    </div>
    <button type="button" class="btn-primary rounded-[40px] px-10 py-5 sm:my-10 my-5 w-full text-[18px]">вся команда</button>
  </div>
</template>

<script setup>
 import {ref} from "vue";

 const lawyers = ref([
   {
     id: 1,
     image: '/image/users/lawyer1.webp',
     title: 'Виктория Мацкевич',
     subTitle: '112 успешно закрытых дел',
     description: 'Краткое описание должности или результаты достижений.'
   },
   {
     id: 1,
     image: '/image/users/lawyer2.webp',
     title: 'Виктория Мацкевич',
     subTitle: '112 успешно закрытых дел',
     description: 'Краткое описание должности или результаты достижений.'
   },
   {
     id: 1,
     image: '/image/users/lawyer3.webp',
     title: 'Виктория Мацкевич',
     subTitle: '112 успешно закрытых дел',
     description: 'Краткое описание должности или результаты достижений.'
   },
   {
     id: 1,
     image: '/image/users/lawyer4.webp',
     title: 'Виктория Мацкевич',
     subTitle: '112 успешно закрытых дел',
     description: 'Краткое описание должности или результаты достижений.'
   }
 ]);
</script>

<style scoped>
</style>
