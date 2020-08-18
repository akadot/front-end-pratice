<template>
  <div id="app">
    <div class="top-section">
      <div class="top-title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers:</p>
      </div>
      <div class="top-switcher">
        <p>Dark Mode</p>
        <button>Trocar</button>
      </div>
    </div>
    <div class="main-cards">
      <BigCard
        socialIcon="icon-facebook.svg"
        socialName="@zedalambreta"
        socialValue="1000"
        socialType="FOLLOWERS"
        arrowIcon="icon-down.svg"
        todayValue="99"
      />
      <BigCard
        socialIcon="icon-twitter.svg"
        socialName="@zedalambreta"
        socialValue="5000"
        socialType="FOLLOWERS"
        arrowIcon="icon-up.svg"
        todayValue="30"
      />
      <BigCard
        socialIcon="icon-instagram.svg"
        socialName="@zedalambreta"
        socialValue="10000"
        socialType="FOLLOWERS"
        arrowIcon="icon-up.svg"
        todayValue="3"
      />
      <BigCard
        socialIcon="icon-youtube.svg"
        socialName="@zedalambreta"
        socialValue="500"
        socialType="SUBSCRIBERS"
        arrowIcon="icon-down.svg"
        todayValue="100"
      />
    </div>
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

html,
body {
  height: 100vw;
}

html,
body,
a,
input,
label,
button {
  font-family: "Inter", sans-serif;
}

body {
  background-color: hsl(230, 17%, 14%);
}

#app {
  max-width: 80%;
  margin: auto;
}

#app .top-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

#app .main-cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
