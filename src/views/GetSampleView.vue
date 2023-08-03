<template>
  <div>
    <div v-if="userData.name && userData.email">
      <h1>{{ userData.name }}</h1>
      <p>{{ userData.email }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLoginUserStore } from "@/stores/LoginUserStore";

const loginUserStore = useLoginUserStore();

const userData = ref({
  name: "",
  email: "",
});

// ページ読み込み時の初期処理をまとめる関数
const initializePage = async () => {
  await fetchUserData();
};

// ユーザーデータを取得する関数
const fetchUserData = async () => {
  await loginUserStore.fetchUserData();
  userData.value = loginUserStore.user;
};

// ページ読み込み時に初期処理を実行
onMounted(() => {
  initializePage();
});
</script>
