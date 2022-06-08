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
        <img
          src="@/assets/img/filtersClose.svg"
          @click="closeCommentary"
          class="me-2"
          alt=""
        />
      </div>
      <div class="commentary__header-description">
        <p class="text-start m-0 mt-2">#{{ pageTitle }}</p>
      </div>
    </div>
    <div class="commentary__body">
      <div
        class="message d-flex gap-3 mb-4"
        v-for="message in chatHistory"
        :key="message"
      >
        <div class="message-img">
          <img src="@/assets/img/chatAvatar1.png" alt="ava" />
        </div>
        <div class="message-body">
          <div class="message-name d-flex gap-2">
            <h6 class="m-0">{{ message.name }}</h6>
            <p class="m-0">{{ formatDate(message.date) }}</p>
          </div>
          <div class="message-content text-start">
            <p class="m-0">{{ message.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="commentary__bottom px-4" pb-4>
      <div class="commentary__bottom-input">
        <div id="editor" @keyup.enter="sendMessage"></div>
      </div>
      <div class="buttondiv">
        <button @click="sendMessage" class="send-btn">
          <img src="@/assets/css/icons/send.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Quill from "@/assets/js/plugins/quill.min.js";

export default {
  props: {
    pageTitle: String,
  },
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
      message: {},
      quill: {},
    };
  },
  methods: {
    sendMessage() {
      const messageText = this.quill.getText();

      if (messageText !== "") {
        const messageTime = new Date();
        this.message = {
          userid: this.users[0].id,
          image: this.users[0].image,
          name: this.users[0].name,
          date: messageTime,
          text: messageText,
        };
        this.quill.setText("");

        this.chatHistory.push(this.message);
      }
    },
    formatDate(date) {
      let diff = new Date() - date; // разница в миллисекундах
      if (diff < 1000) {
        // меньше 1 секунды
        return "прямо сейчас";
      }
      let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды
      if (sec < 60) {
        return sec + " сек. назад";
      }
      let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
      if (min < 60) {
        return min + " мин. назад";
      }
      // отформатировать дату
      // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
      let d = date;
      d = [
        "0" + d.getDate(),
        "0" + (d.getMonth() + 1),
        "" + d.getFullYear(),
        "0" + d.getHours(),
        "0" + d.getMinutes(),
      ].map((component) => component.slice(-2)); // взять последние 2 цифры из каждой компоненты
      // соединить компоненты в дату
      return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
    },
    closeCommentary() {
      document
        .querySelector(".commentary__container")
        .classList.remove("commentary-show");
    },
  },
  computed: {},
  mounted() {
    this.quill = new Quill("#editor", {
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
  right: -560px;
  top: 0px;
  background-color: white;
  transition: all 0.8s;
  box-shadow: -10px 0px 40px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}
.commentary-show {
  right: 0;
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
.commentary__header img {
  cursor: pointer;
}
.commentary__body {
  height: 65%;
  padding: 32px 40px 32px 32px;
  overflow-x: auto;
}
.message-name h6 {
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.442553px;
  color: #2d3748;
}
.message-name p {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.387234px;
  color: #a0aec0;
}
.message-content p {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.442553px;
  color: #2d3748;
}
.commentary__bottom {
  height: 160px;
}
#editor {
  height: 100px;
  padding-bottom: 46px;
}
.buttondiv {
  position: relative;
}
.send-btn {
  position: absolute;
  top: -40px;
  right: 10px;
  background-color: #2d3748;
  border-radius: 5px;
  width: 42px;
  height: 30px;
  border: none;
  text-align: center;
}
</style>
