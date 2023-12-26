<template>
  <div class="bg-white md:p-[60px] p-10 rounded-[40px] overflow-hidden">
    <h1 class="text-turquoise text-center">юридические</h1>
    <div class="block lg:flex items-center">
      <h1 class="text-turquoise">услуги <span class="text-gray-dark">онлайн</span></h1>
      <h3 class="max-w-[300px] sm:text-[18px] text-[16px] xl:ml-[60px] lg:ml-[40px] m-auto">По всей России, в том числе для иностранных граждан в вопросах миграции РФ</h3>
    </div>

    <div class="rounded-[20px] bg-gray-dark py-10 sm:px-[60px] px-5 sm:mt-[60px] mt-10 relative">
      <img src="/image/image4.webp" class="absolute top-0 sm:-right-[85px] -right-[185px]" />
      <h3 class="text-white text-center"><span class="text-turquoise">/</span>Запишитесь на консультацию</h3>
      <h3 class="text-white">или задайте вопрос</h3>
      <form class="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5">
        <div class="relative">
          <input type="text" id="name" class="block rounded-t-lg px-5 pb-2.5 pt-5 w-full text-white bg-gray-dark border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-turquoise peer" placeholder=" " />
          <label for="name" class="text-sm absolute text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-turquoise peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ваше имя</label>
        </div>
        <div class="relative">
          <input type="text" id="phone" class="block rounded-t-lg px-5 pb-2.5 pt-5 w-full text-white bg-gray-dark border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-turquoise peer" placeholder=" " />
          <label for="phone" class="text-sm absolute text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-turquoise peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Номер телефона</label>
        </div>
        <div class="relative">
          <input type="text" id="question" class="block rounded-t-lg px-5 pb-2.5 pt-5 w-full text-white bg-gray-dark border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-turquoise peer" placeholder=" " />
          <label for="question" class="text-sm absolute text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-turquoise peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Задайте вопрос</label>
        </div>
        <div>
          <button type="button" class="btn-primary rounded-[40px] px-10 py-5 w-full  text-[18px]">ЗАПИСАТЬСЯ ОНЛАЙН</button>
        </div>
      </form>
      <div class="pt-5 text-white text-sm leading-[130%] text-center">
        Нажимая кнопку, Вы соглашаетесь с <a href="#" class="underline">Политикой конфиденциальности</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>
