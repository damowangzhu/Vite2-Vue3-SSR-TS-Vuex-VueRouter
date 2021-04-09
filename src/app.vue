<template>
  <div class="logo">
    <router-link :to="{ name: 'home' }"> Home | </router-link>
    <router-link :to="{ name: 'about' }"> About |</router-link>
    <router-link :to="{ name: 'test' }"> Test </router-link>

    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>

<script lang="ts">
// import '@/scss/common.scss';
export default {};
</script>
<style>
.logo {
  text-align: center;
}
.container {
  padding: 10px 0;
}
nav {
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  border-radius: 4px;
}
</style>
