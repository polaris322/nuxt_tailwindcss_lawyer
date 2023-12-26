<template>
  <div class="border border-gray-dark p-5 rounded-[10px]">
    <button
      @click="toggleAccordion()"
      class="flex items-center w-full"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
      <div class="flex justify-between items-center w-full">
        <div class="w-full text-left">
          <slot name="title" />
        </div>
        <svg
          class="transition-all duration-200 transform"
          :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,
        }"
          xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M32 14L20 26L8 14" stroke="#30AFB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </button>

    <div v-show="isOpen" :id="`collapse${_uid}`">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>

</style>
