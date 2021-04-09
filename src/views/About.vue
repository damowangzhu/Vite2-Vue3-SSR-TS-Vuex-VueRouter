<template>
  <p class="about">About Page</p>
  <p>{{ mess }}</p>
  <Foo />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    Foo: defineAsyncComponent(() => import('@/components/foo/Foo').then((mod) => mod.Foo))
  },
  setup() {
    const store = useStore();
    const mess = computed(() => store.state.message);

    return { mess };
  }
});
</script>

<style scoped lang="scss">
.about {
  color: red;
}
</style>
