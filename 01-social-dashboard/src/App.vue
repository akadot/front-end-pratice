<template>
  <div id="app">
    <BigCard
      socialIcon="icon-facebook.svg"
      socialName="Zé da Lambreta"
      socialValue="1000"
      socialType="FOLLOWERS"
      arrowIcon="icon-down.svg"
      todayValue="99"
    />
    <BigCard
      socialIcon="icon-twitter.svg"
      socialName="Zé da Biz"
      socialValue="5000"
      socialType="FOLLOWERS"
      arrowIcon="icon-up.svg"
      todayValue="30"
    />
    <BigCard
      socialIcon="icon-instagram.svg"
      socialName="Zé da Hornet"
      socialValue="10000"
      socialType="FOLLOWERS"
      arrowIcon="icon-up.svg"
      todayValue="3"
    />
    <BigCard
      socialIcon="icon-youtube.svg"
      socialName="Zé da Twister"
      socialValue="500"
      socialType="SUBSCRIBERS"
      arrowIcon="icon-down.svg"
      todayValue="100"
    />
  </div>
</template>

<script>
import BigCard from "./components/BigCard.vue";
export default {
  name: "App",
  components: {
    BigCard,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background-color: hsl(230, 17%, 14%);
}

#app {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
