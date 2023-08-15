<template>
  <div id="app" class="min-h-screen flex items-center justify-center">
    <div class="w-full max-w-sm">
      <header class="text-center mb-8">
        <h1 class="text-2xl font-bold">Tuition Class QR Attendance App</h1>
      </header>
      <main class="flex justify-between">
        <div class="w-1/2 bg-gray-100 p-4 rounded-md">
          <qrcode-stream @decode="onQRCodeScan"></qrcode-stream>
        </div>
        <div class="w-1/2 bg-gray-100 p-4 rounded-md">
          <ul>
            <li v-for="student in students" :key="student.id" class="flex items-center justify-between mb-2">
              <span>{{ student.name }}</span>
              <input type="checkbox" v-model="student.present">
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import QrcodeStream from 'vue-qrcode-reader';

export default {
  components: {
    QrcodeStream
  },
  data() {
    return {
      students: [
        { id: 1, name: 'Student A', present: false },
        { id: 2, name: 'Student B', present: false },
        // Add more students as needed
      ]
    };
  },
  methods: {
    onQRCodeScan(result) {
      // Process the scanned QR code result here
      console.log('QR Code scanned:', result);
    }
  }
};
</script>

<style>
/* Include your styling here, either using Tailwind CSS or regular CSS */
</style>
