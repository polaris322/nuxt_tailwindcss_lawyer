<template>
  <div class="flex sm:px-0 px-5">
    <div class="w-full">
      <h2 class="text-center section-title"><span class="text-turquoise">/как</span> мы работаем</h2>
      <div class="grid sm:grid-cols-3 grid-cols-1 sm:gap-[40px] gap-[20px]">
        <div v-for="(item, index) in howTo" :key="index" class="rounded-[20px] border border-gray-dark p-5">
          <span class="sm:text-[24px] text-base">{{index + 1}}</span>
          <h5 class="text-turquoise py-5">{{item.title}}</h5>
          <p class="sm:text-[18px] text-base pb-[30px]"><span class="text-turquoise">/</span>{{item.description}}</p>
        </div>
      </div>
    </div>
    <img src="/image/pngwing.webp" class="hidden lg:block"/>
  </div>
</template>

<script setup>
import {ref} from "vue";

const howTo = ref([
  {
    title: 'Запись',
    description: 'Оставляете заявку на сайте или связываетесь нами по телефону.'
  },
  {
    title: 'Консультация',
    description: 'Предварительная консультация или личная встреча.'
  },
  {
    title: 'договор',
    description: 'Обсуждаем детали и заключаем договор на основе ваших услугий'
  },
  {
    title: 'START',
    description: 'Сбор необходимых документов. Состалвение заявления.'
  },
  {
    title: 'пРОЦЕСС',
    description: 'Полное сопровождение клиента до завершения дела.'
  },
  {
    title: 'результат',
    description: 'Успешно закрытое дело.'
  }
]);
</script>

<style scoped>

</style>
