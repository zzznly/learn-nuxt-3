<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title> Vue & Nuxt Mastery Class </q-toolbar-title>
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn stretch flat label="Home" no-caps @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <q-btn stretch flat label="About" no-caps @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn stretch flat label="Youtube" no-caps @click="moveYoutube" />
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn stretch flat label="Admin" no-caps @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink
          v-if="!isAuthenticated"
          v-slot="{ navigate }"
          custom
          to="/login"
        >
          <q-btn stretch flat label="login" no-caps @click="navigate()" />
        </NuxtLink>
        <q-btn v-else stretch flat label="logout" no-caps @click="signOut" />
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <q-banner v-if="isAuthenticated" class="bg-primary text-white">{{
        authUser
      }}</q-banner>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
const { authUser, isAuthenticated } = useAuthUser();
const { signOut } = useAuth();
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const moveYoutube = async () => {
  await navigateTo('https://youtube.com/@gymcoding', {
    open: { target: '_blank' },
    external: true,
  });
};
</script>
