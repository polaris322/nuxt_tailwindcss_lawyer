<template>
  <header class="px-10 pt-10">
    <div class="relative">
      <div class="grid grid-cols-2 md:flex justify-between">
        <div class="order-1 min-w-[200px]">
          <img src="/image/logo.webp" alt="logo">
        </div>
        <div class="md:hidden block order-2 sm:pt-2 pt-0">
          <img src="/image/menu_button.webp" class="cursor-pointer float-right" @click="toggleMenu">
        </div>
        <div class="order-4 md:order-3 mt-5 mb-10 md:my-0">
          <div class="flex items-center gap-[20px] float-right">
            <div class="text-lg font-medium text-gray-dark sm:block hidden">
              <span class="block leading-[normal]">Мы на связи</span>
              <span class="block leading-[normal]">24 на 7</span>
            </div>
            <div class="flex gap-[10px]">
              <img src="/image/logos_telegram.webp" alt="logo">
              <img src="/image/logos_whatsapp-icon.webp" alt="logo">
            </div>
          </div>
        </div>
        <div class="order-3 md:order-4 mt-5 mb-10 md:mt-0 md:mb-0 min-w-[200px]">
          <div class="md:text-2xl text-xl text-gray-dark font-semibold leading-[normal]">+7 (812) 578-39-39</div>
          <div class="sm:text-base text-[13px] leading-[normal]">Ежедневно с 9:00 до 19:00</div>
        </div>
      </div>

      <nav
        class="
          xl:hidden block
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-10 md:py-5 px-10
          my-5
          md:block
        "
        :class="openMenu? 'hidden bg-white rounded-[40px]': 'text-right md:block bg-gray-dark text-white rounded-[20px] w-[285px] absolute right-0 top-0'"
      >
        <div :class="openMenu? 'hidden': 'block'" class="w-full md:flex md:items-center md:w-auto" id="menu">
          <div class="flex justify-between pb-[30px]" :class="openMenu? 'hidden' : 'block'">
            <span></span>
            <span class="cursor-pointer" @click="toggleMenu">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <g clip-path="url(#clip0_268_7287)">
                <path d="M7.27284 32.7279L32.7287 7.27208M7.27284 7.27208L32.7287 32.7279" stroke="#F9F9F9" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_268_7287">
                  <rect width="40" height="40" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            </span>
          </div>
          <ul
            class="
              gap-[30px]
              font-medium
              md:flex
              md:justify-between
              leading-[normal]"
          >
            <li :class="openMenu? '' : 'py-[10px]'">
              <a class="block hover:text-turquoise" href="#"
              >Для физических лиц</a
              >
            </li>
            <li :class="openMenu? '' : 'py-[10px]'">
              <a class="block hover:text-turquoise" href="#"
              >Для юридических лиц</a
              >
            </li>
            <li :class="openMenu? '' : 'py-[10px]'">
              <a class="block hover:text-turquoise" href="#"
              >Для самозанятых</a
              >
            </li>
            <li :class="openMenu? '' : 'py-[10px]'">
              <a class="block hover:text-turquoise" href="#"
              >О нас</a
              >
            </li>
            <li :class="openMenu? '' : 'py-[10px]'">
              <a class="block hover:text-turquoise" href="#"
              >Статьи</a
              >
            </li>
            <li :class="openMenu? '' : 'py-[10px]'">
              <a class="block hover:text-turquoise" href="#"
              >Примеры из жизни</a
              >
            </li>
            <li :class="openMenu? '' : 'py-[10px]'">
              <a class="block hover:text-turquoise" href="#"
              >Отзывы</a
              >
            </li>
            <li :class="openMenu? '' : 'py-[10px]'">
              <a class="block hover:text-turquoise" href="#"
              >FAQ</a
              >
            </li>
            <li :class="openMenu? '' : 'py-[10px]'">
              <a class="block hover:text-turquoise" href="#"
              >Контакты</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="font-medium py-10 xl:block hidden">
      Для физических лиц
    </div>
  </header>
</template>

<script setup>
import {ref} from "vue";

const openMenu = ref(true);

function toggleMenu() {
  openMenu.value = !openMenu.value;
}
</script>

<style scoped>

</style>
