import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-type": "application/json",
  },
  responseType: "json",
  timeout: 3000,
});

// リクエスト共通の設定
apiClient.interceptors.request.use((request) => {
  // ここにリクエスト共通の処理を記述（例: ヘッダーの追加など）

  return request;
});

// レスポンス共通の設定
apiClient.interceptors.response.use(
  (response) => {
    // ここにレスポンス共通の処理を記述（例: レスポンスのデータを加工など）

    return response;
  },
  (error) => {
    switch (error.response?.status) {
      case 401:
        console.error("401 Unauthorized.");
        break;
      case 403:
        console.error("403 Forbidden.");
        break;
      case 404:
        console.error("404 Not Found.");
        break;
      default:
        console.error("An error occurred:", error);
        break;
    }

    return Promise.reject(error);
  }
);

export default apiClient;
