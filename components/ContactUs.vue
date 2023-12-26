<template>
<div class="sm:px-0 px-5 text-white">
  <h2 class="text-center text-gray-dark"><span class="text-turquoise">/</span>ОСТАЛИСЬ</h2>
  <h2 class="text-turquoise section-title"><span class="text-gray-dark">ВОПРОСЫ?</span> НАПИШИ НАМ</h2>

  <div class="flex sm:hidden block text-gray-dark mb-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M0 6.5H16V9.5H0V6.5Z" fill="#30AFB8"/>
      <path d="M6.5 16V0H9.5V16H6.5Z" fill="#30AFB8"/>
      <path d="M1.28249 12.5962L12.5962 1.28249L14.7175 3.40381L3.40381 14.7175L1.28249 12.5962Z" fill="#30AFB8"/>
      <path d="M3.4038 1.28248L14.7175 12.5962L12.5962 14.7175L1.28248 3.4038L3.4038 1.28248Z" fill="#30AFB8"/>
    </svg>
    <span class="ml-5 text-base">
      Оставьте сови данные и наш консультант свяжется с вами в ближайшее время время и проконсультирует
    </span>
  </div>

  <div class="grid sm:grid-cols-2 grid-cols-1">
    <div class="bg-gray-dark rounded-[20px] lg:rounded-[40px] p-5 sm:p-10">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="text-[18px] sm:block hidden">
          Оставьте сови данные и наш консультант свяжется с вами в ближайшее время время и проконсультирует
        </div>
        <div>
          <form class="grid grid-cols-1 gap-[20px]">
            <div class="relative">
              <input type="text" id="name" class="block rounded-t-lg px-5 pb-2.5 pt-5 w-full text-white bg-gray-dark border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-turquoise peer" placeholder=" " />
              <label for="name" class="text-sm absolute text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-turquoise peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ваше имя</label>
            </div>
            <div class="relative">
              <input type="text" id="phone" class="block rounded-t-lg px-5 pb-2.5 pt-5 w-full text-white bg-gray-dark border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-turquoise peer" placeholder=" " />
              <label for="phone" class="text-sm absolute text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-turquoise peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Номер телефона</label>
            </div>
            <div>
              <button type="button" class="btn-primary rounded-[40px] px-10 py-5 w-full text-[18px]">СВЯЗАТЬСЯ СО МНОЙ</button>
            </div>
            <p class="text-base">
              Нажимая кнопку, Вы соглашаетесь с <a href="#" class="underline">Политикой конфиденциальности</a>
            </p>
          </form>
        </div>
      </div>
    </div>
    <img src="/image/woman-with-laptop.webp" class="h-full sm:block hidden"/>
    <img src="/image/woman-with-laptop-mobile.webp" class="w-full sm:hidden block"/>
  </div>

  <div class="lg:pt-[120px] md:pt-[80px] pt-[60px] md:pb-[80px] pb-[60px]">
    <div class="relative text-white">
      <img src="/image/map-mobile.webp" class="md:block hidden w-full" />
      <img src="/image/map.webp" class="md:hidden block w-full" />
      <div class="md:rounded-[40px] rounded-[20px] bg-turquoise p-5 md:p-10 lg:w-1/3 sm:w-1/2 w-[90%] absolute lg:left-[280px] md:left-[320px] left-[5%] lg:top-[20%] md:top-[3%] top-[30%]">
        <h4>+7 (812) 578-39-39</h4>
        <p class="text-base sm:text-sm">Ежедневно с 9:00 до 19:00</p>

        <p class="lg:text-[18px] md:text-base sm:text-sm pt-[20px]">Единая почта:</p>
        <h4>pomiru78@yandex.com</h4>

        <div class="flex justify-between pt-[20px]">
          <div>
            <span class="block text-base">Напишите</span>
            <span class="block text-base">нам:</span>
          </div>
          <div class="flex">
            <img src="/image/logos_telegram_dark.webp" class="mr-[10px]"/>
            <img src="/image/logos_whatsapp-icon_dark.webp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ContactUs"
}
</script>

<style scoped>

</style>
