<template>
  <div>
    <input v-model="postData.name" type="text" placeholder="Name" />
    <input v-model="postData.email" type="email" placeholder="Email" />
    <button @click="postDataToApi">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import apiClient from "@/plugins/axios";

// フォームデータ
const postData = ref({
  name: "",
  email: "",
});

// POST用にデータを加工する必要があれば加工
const transformData = (data) => {
  // 加工する処理
  return;
};

// データをPOST
const postDataToApi = async () => {
  try {
    // データをPOSTするAPIのエンドポイント
    const url = "/api/endpoint";

    // データの加工
    const data = transformData(postData.value);

    // データをPOST
    const response = await apiClient.post(url, data);

    // レスポンスの処理
    console.log(response.data); // レスポンスのデータを表示など、適切な処理を実行
  } catch (error) {
    // エラーだった時の処理を書く(どっかにリダイレクトするとか、そこは要件による)
    console.error("Error posting data:", error);
  }
};
</script>
