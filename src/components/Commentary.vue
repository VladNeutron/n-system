<template>
  <div class="commentary__container" id="commentary">
    <div class="commentary__header">
      <div
        class="commentary__header-title d-flex justify-content-between align-items-center"
      >
        <div class="header-title-name d-flex gap-3">
          <img src="@/assets/css/icons/question_answer.svg" alt="" />
          <h3 class="m-0">Комментарии</h3>
        </div>
        <img src="@/assets/img/filtersClose.svg" class="me-2" alt="" />
      </div>
      <div class="commentary__header-description">
        <p class="text-start m-0 mt-2">Название страницы</p>
      </div>
    </div>
    <div class="commentary__body"></div>
    <div class="commentary__bottom">
      <div class="commentary__bottom-input">
        <div id="editor"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Quill } from "@/assets/js/plugins/quill.min";

export default {
  data() {
    return {
      users: [
        {
          id: 213123,
          name: "Tony",
          image: "@/assets/img/chatAvatar1.png",
        },
        {
          id: 21321354,
          name: "Рандом чел ",
          image: "@/assets/img/chatAvatar2.png",
        },
      ],
      chatHistory: [],
      message: "",
    };
  },
  methods: {},
  computed: {},
  mounted() {
    var quill = new Quill("#editor", {
      theme: "snow",
    });
  },
};
</script>

<style scoped>
.commentary__container {
  width: 560px;
  height: 100vh;
  z-index: 1200;
  position: fixed;
  right: 0px;
  top: 0px;
  background-color: white;
  transition: all 0.8s;
  box-shadow: -10px 0px 40px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}
.commentary__header {
  height: 145px;
  border-bottom: 1px solid #e2e8f0;
  padding: 60px 32px 16px 32px;
}
.commentary__header h3 {
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  letter-spacing: -0.829787px;
  color: #252f40;
}
.commentary__header p {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.442553px;
  color: #a0aec0;
}
.commentary__body {
  height: 500px;
}
.commentary__bottom {
  height: 160px;
}
</style>
