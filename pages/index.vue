<template>
  <div>
    <section class="md:px-10 sm:px-5 px-0">
      <SignUpForm />
    </section>

    <section class="section">
      <Intro />
    </section>

    <section class="section sm:hidden block">
      <WhyUs />
    </section>

    <section  class="section">
      <About />
    </section>

    <section class="sm:block hidden section">
      <WhyUs />
    </section>

    <section class="section">
      <Lawyers />
    </section>

    <section class="section">
      <AskUs />
    </section>

    <section class="section">
      <HowTo />
    </section>

    <section class="section">
      <Feedbacks />
    </section>

    <section class="section">
      <News />
    </section>

    <section class="section">
      <Faq />
    </section>

    <section class="section">
      <ContactUs />
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
