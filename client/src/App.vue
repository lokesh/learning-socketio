<script setup>
import { socket } from "@/socket";
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import ConnectionState from '@/components/ConnectionState.vue';
import ConnectionManager from '@/components/ConnectionManager.vue';

const message = ref('');

// const socket = io('http://localhost:3000');

// Lifecycle hooks
onMounted(() => {
  console.log('App mounted');
});

socket.on("serverMsg", (msg) => {
  console.log('Server:', msg);
});


socket.on("msg", (msg) => {
  console.log('User:', msg);
});


// socket.on("connect", () => {
//   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
// });

// socket.on("disconnect", () => {
//   console.log(socket.id); // undefined
// });

function send() {
  socket.emit('msg', message.value);
}

// socket.emit('chat message', 'Hello from client')
</script>

<template>
  <div class="page">
    <ConnectionState />
    <br /><br /><br />
    <ConnectionManager />
    <br /><br /><br />
    <div>
      <input type="text" v-model="message" />
      <button @click="send">Send message</button>
    </div>
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->

    <RouterView />
    </div>
</template>

<style scoped>

</style>
