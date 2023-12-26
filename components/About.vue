<template>
  <div class="sm:px-0 px-5">
    <h2 class="text-turquoise text-center lg:pb-[80px] md:pb-[60px] pb-[40px]">/О НАС</h2>

    <div class="relative">
      <img src="/image/rectangle56.webp" class="sm:block hidden" alt=""/>
      <img src="/image/rectangle56-xs.webp" class="sm:hidden block w-full"  alt=""/>
      <vue-plyr :options="{ quality: { default: '1080p' } }">
        <video
          crossorigin
          playsinline
          data-poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
        >
          <source
            size="1080"
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
            type="video/mp4"
          />
        </video>
      </vue-plyr>
      <div class="sm:block hidden bg-turquoise text-white p-5 rounded-[20px] flex sm:max-w-[350px] w-full initial sm:absolute sm:bottom-[20px] bottom-[60px] left-[10px] md:left-[240px]">
        <div class="flex">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M0 6.5H16V9.5H0V6.5Z" fill="#F9F9F9"/>
              <path d="M6.5 16V0H9.5V16H6.5Z" fill="#F9F9F9"/>
              <path d="M1.28249 12.5962L12.5962 1.28249L14.7175 3.40381L3.40381 14.7175L1.28249 12.5962Z" fill="#F9F9F9"/>
              <path d="M3.4038 1.28248L14.7175 12.5962L12.5962 14.7175L1.28248 3.4038L3.4038 1.28248Z" fill="#F9F9F9"/>
            </svg>
          </div>
          <span class="ml-5 text-sm sm:text-base">
            Юридическая компания “ПОМИРУ 78” была основана в 2010 году и с тех пор успешно работает на рынке юридических услуг.
          </span>
        </div>
      </div>
    </div>

    <div class="sm:hidden block bg-turquoise text-white p-5 rounded-[20px] flex sm:max-w-[350px] w-full initial sm:absolute sm:bottom-[20px] bottom-[60px] left-[10px] md:left-[240px]">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M0 6.5H16V9.5H0V6.5Z" fill="#F9F9F9"/>
          <path d="M6.5 16V0H9.5V16H6.5Z" fill="#F9F9F9"/>
          <path d="M1.28249 12.5962L12.5962 1.28249L14.7175 3.40381L3.40381 14.7175L1.28249 12.5962Z" fill="#F9F9F9"/>
          <path d="M3.4038 1.28248L14.7175 12.5962L12.5962 14.7175L1.28248 3.4038L3.4038 1.28248Z" fill="#F9F9F9"/>
        </svg>
      </div>
      <span class="ml-5 text-sm sm:text-base">
          Юридическая компания “ПОМИРУ 78” была основана в 2010 году и с тех пор успешно работает на рынке юридических услуг.
        </span>
    </div>

    <div class="xl:mt-[94px] md:mt-[60px] mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-5">
      <div>
        <p class="sm:mb-10 mb-5">
          Компания предоставляет широкий спектр юридических услуг, включая консультации по гражданским, уголовным, административным и другим делам, а также услуги по защите прав потребителей и интеллектуальной собственности.
        </p>

        <button class="btn-primary rounded-[40px] px-10 py-5 w-full text-[18px]">посмотрите видео О нас</button>
      </div>

      <div>
        <div class="grid grid-cols-2 sm:gap-10 gap-5">
          <div class="bg-white rounded-[20px] p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 0.754197L13.4779 2.42311L13.7358 2.71437L14.0815 2.53595L16.0625 1.5136L16.8376 3.60368L16.9729 3.96845L17.3598 3.92696L19.5762 3.68925L19.5441 5.91822L19.5385 6.30723L19.9141 6.40828L22.0668 6.98731L21.2316 9.05414L21.0859 9.41485L21.3997 9.64479L23.1978 10.9624L21.6724 12.5879L21.4062 12.8716L21.6157 13.1994L22.8165 15.0776L20.8069 16.0423L20.4561 16.2107L20.5331 16.592L20.9743 18.7771L18.7519 18.9507L18.364 18.981L18.2981 19.3644L17.9202 21.5614L15.7851 20.9204L15.4125 20.8086L15.2125 21.1423L14.0664 23.0543L12.307 21.6854L12 21.4465L11.693 21.6854L9.93359 23.0543L8.78755 21.1423L8.58754 20.8086L8.21492 20.9204L6.07985 21.5614L5.70191 19.3644L5.63595 18.981L5.24809 18.9507L3.02566 18.7771L3.46686 16.592L3.54386 16.2107L3.19314 16.0423L1.1835 15.0776L2.38426 13.1994L2.59382 12.8716L2.3276 12.5879L0.80217 10.9624L2.60032 9.64479L2.91414 9.41485L2.76838 9.05414L1.93317 6.98731L4.08586 6.40828L4.46155 6.30723L4.45594 5.91822L4.42375 3.68925L6.64025 3.92696L7.02707 3.96845L7.16236 3.60368L7.93755 1.5136L9.9185 2.53595L10.2642 2.71437L10.5221 2.42311L12 0.754197Z" stroke="#30AFB8"/>
            </svg>

            <p class="mt-10">
              Более 7 лет успешной юридической практики.
            </p>
          </div>
          <div class="bg-white rounded-[20px] p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M20.5475 20.2146C20.2291 20.6227 19.7128 20.8801 18.9768 20.9386C18.2384 20.9974 17.3182 20.8508 16.2686 20.4922C14.1715 19.7758 11.6522 18.2455 9.22624 16.0558C6.80025 13.8661 4.96167 11.4632 3.94159 9.36613C3.43102 8.3165 3.13706 7.36717 3.06264 6.5748C2.98846 5.785 3.13438 5.19336 3.4528 4.78518C3.77122 4.37699 4.28755 4.11968 5.02352 4.06111C5.76189 4.00235 6.6821 4.1489 7.73174 4.50748C9.82884 5.22392 12.3481 6.75428 14.7741 8.94394C17.2001 11.1336 19.0386 13.5365 20.0587 15.6336C20.5693 16.6832 20.8633 17.6326 20.9377 18.4249C21.0119 19.2147 20.8659 19.8064 20.5475 20.2146Z" stroke="#30AFB8"/>
              <path d="M20.5473 4.78539C20.8658 5.19357 21.0117 5.7852 20.9375 6.57501C20.8631 7.36738 20.5691 8.31671 20.0586 9.36634C19.0385 11.4634 17.1999 13.8663 14.7739 16.056C12.3479 18.2457 9.82867 19.776 7.73156 20.4925C6.68192 20.851 5.76172 20.9976 5.02335 20.9388C4.28737 20.8803 3.77104 20.623 3.45263 20.2148C3.13421 19.8066 2.98828 19.2149 3.06246 18.4251C3.13688 17.6328 3.43085 16.6834 3.94142 15.6338C4.9615 13.5367 6.80007 11.1338 9.22606 8.94414C11.6521 6.75449 14.1713 5.22412 16.2684 4.50769C17.318 4.14911 18.2382 4.00256 18.9766 4.06132C19.7126 4.11989 20.2289 4.3772 20.5473 4.78539Z" stroke="#30AFB8"/>
            </svg>

            <p class="mt-10">
              В команде 23 юриста с большим стажем юридической праткики;
            </p>
          </div>
          <div class="bg-white rounded-[20px] p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M13 5.5H19V11.5" stroke="#30AFB8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 5.5L5 19.5" stroke="#30AFB8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p class="mt-10">
              Высокие стандарты профессионализма и этики;
            </p>
          </div>
          <div class="bg-white rounded-[20px] p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <circle cx="12" cy="12.5" r="11.5" stroke="#30AFB8"/>
            </svg>

            <p class="mt-10">
              Соблюдаем все требования законодательства.
            </p>
          </div>
        </div>

        <p class="sm:text-[18px] sm:text-base pt-10">
          Компания активно участвует в общественной жизни, проводит благотворительные акции и поддерживает социальные проекты. Благодаря своей работе, компания вносит значительный вклад в развитие правовой культуры и повышение правовой грамотности населения.
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>
