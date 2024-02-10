<template>
  <q-card class="my-card" @click="$emit('click')">
    <img src="https://i.ibb.co/XbsPPmQ/image.png" />

    <q-card-section>
      <div class="text-h6 ellipsis">Vue3 완벽 마스터 기본편</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        Vue 3 전체적인 스펙을 깊이있게 다뤄요
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
interface Props {
  thumbnail: string;
  title: string;
  subtitle: string;
}
defineProps<Props>();
defineEmits<{
  click: [];
}>();
</script>
