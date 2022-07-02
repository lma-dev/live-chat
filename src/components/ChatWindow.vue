<template>
  <div class="chat-window">
    <div class="message" ref="msgBox">
      <div class="single" v-for="message in formateMessages" :key="message.id">
        <span class="created-at">{{ message.created_at }}</span>
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { db } from '../firebase/config';
import { computed, onUpdated } from '@vue/runtime-core';
import { formatDistanceToNow } from 'date-fns';
export default {
  setup() {
    let messages = ref([]);
    let msgBox = ref(null);
    //auto scrolling feature
    onUpdated(() => {
      msgBox.value.scrollTop = msgBox.value.scrollHeight;
    });

    let formateMessages = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate());
        return { ...msg, created_at: formatTime };
      });
    });
    db.collection('messages')
      .orderBy('created_at')
      .onSnapshot((snap) => {
        let results = [];
        snap.docs.forEach((doc) => {
          // realtime database
          let document = { ...doc.data(), id: doc.id };
          doc.data().created_at && results.push(document); //same with if condition
        });
        messages.value = results;
      });
    return { messages, formateMessages, msgBox };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px auto;
}
.created-at {
  display: block;
  color: #999;
  font-size: 20px;
  margin-bottom: 10px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.message {
  max-height: 400px;
  overflow: auto;
}
</style>
