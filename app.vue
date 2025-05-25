<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Global SEO is now handled in layouts/default.vue
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Serif:ital,wght@0,400..700;1,400..700&display=swap');

body {
  font-family: 'Noto Sans', sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Noto Serif', serif;
}

/* Basic fade-in animations if not using Tailwind JIT extended animations */
.animate-fadeInDown {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fadeInUpDel_1 {
  animation: fadeInUp 0.8s ease-out 0.1s forwards;
}

.animate-fadeInUpDel_2 {
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

.animate-fadeInUpDel_3 {
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
}

.animate-fadeInUpDel_4 {
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
}

.animate-fadeInUpDel_5 {
  animation: fadeInUp 0.8s ease-out 0.5s forwards;
}

.animate-fadeInUpDel_6 {
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
}

.animate-fadeInUpDel_7 {
  animation: fadeInUp 0.8s ease-out 0.7s forwards;
}

.animate-fadeInUpDel_8 {
  animation: fadeInUp 0.8s ease-out 0.8s forwards;
}


@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
