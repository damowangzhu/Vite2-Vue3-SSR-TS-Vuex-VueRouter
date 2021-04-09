<template>
  <div class="page">
    <router-link to="/home"> Home | </router-link>
    <router-link to="/about"> About |</router-link>
    <router-link to="/test"> Test </router-link>

    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>

<style>
.page {
  padding-top: 25px;
  min-height: 100vh;
  text-align: center;
}
</style>
