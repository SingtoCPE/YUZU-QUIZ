<template>
  <v-card
    class="d-flex align-center justify-center"
    color="white"
    height="650"
    flat
  >
    <v-card elevation="10" class="pa-2" outlined tile>
      <h1 class="text-center">สิ่งที่ผมทำตามโจทย์กำหนดไม่ได้</h1>
      <v-divider />
      <ul class="my-2">
        <li>
          หน้าโชว์ employee ผมทำ เลือกเช็คบล๊อค employee แล้วกดลบไม่ได้ครับ
        </li>
        <li>validate ทำได้ไม่ดีพอครับ มันเป็นแปลก ๆ ครับ</li>
        <li>
          ตอนแก้ไข ผมทำให้ dropdown โชว์ข้อมูลของ employee
          ที่เราจะแก้ไขไม่ได้ครับ แต่ค่าดึงมาได้ครับ ถ้าแก้ไขเลย ไม่เลือก list
          ใน dropdown ข้อมูลจะเป็นข้อมูลเก่าที่ดึงมาครับ
        </li>
      </ul>
      <h3 class="text-center">
        ** ผ่านหรือไม่ผ่าน ก็ไม่เป็นไรครับ ขอบคุณมาก ๆ ครับ
        ที่หยิบยื่นโอกาสมาให้ผมครับ **
      </h3>
    </v-card>
  </v-card>
</template>
<script>
export default {
  name: "Dashboard"
};
</script>
