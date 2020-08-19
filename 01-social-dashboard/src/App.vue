<template>
  <div id="app">
    <div class="top-container">
      <div class="top-content">
        <div class="top-title">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: {{sumTotal()}}</p>
        </div>
        <div class="top-switcher">
          <p>Dark Mode</p>
          <button>Trocar</button>
        </div>
      </div>
    </div>

    <div class="main-cards">
      <div class="content" v-for="social in dataBase" :key="social">
        <BigCard
          :socialIcon="social.iconUrl"
          :socialName="social.socialName"
          :socialValue="social.socialValue > 10000 ? social.socialValue : social.socialValue"
          :socialType="social.socialType == 'F' ? 'FOLLOWERS' : 'SUBSCRIBERS'"
          :arrowIcon="social.arrowIcon == 'up' ? 'icon-up.svg' : 'icon-down.svg'"
          :todayValue="social.todayValue"
        />
      </div>
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
  methods: {
    sumTotal() {
      let totalValue = 0;
      for (let i = 0; i < this.dataBase.length; i++) {
        totalValue += this.dataBase[i].socialValue;
      }
      return totalValue;
    },
  },

  data() {
    return {
      dataBase: [
        {
          iconUrl: "icon-facebook.svg",
          socialName: "@nathanf",
          socialValue: 1987,
          socialType: "F",
          arrowIcon: "up",
          todayValue: 12,
        },
        {
          iconUrl: "icon-twitter.svg",
          socialName: "@nathanf",
          socialValue: 1044,
          socialType: "F",
          arrowIcon: "up",
          todayValue: 99,
        },
        {
          iconUrl: "icon-instagram.svg",
          socialName: "@realnathf",
          socialValue: 11000,
          socialType: "F",
          arrowIcon: "up",
          todayValue: 1099,
        },
        {
          iconUrl: "icon-youtube.svg",
          socialName: "Nathan F.",
          socialValue: 8239,
          socialType: "S",
          arrowIcon: "down",
          todayValue: 144,
        },
      ],
    };
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
  width: 100%;
}

#app .top-container {
  height: 200px;
  background-color: hsl(232, 27%, 17%);
}

#app .top-container .top-content {
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  height: 50%;
  margin: auto;
}

#app .top-container .top-content .top-title p {
  color: hsl(228, 34%, 66%);
  margin-top: 5px;
  font-weight: 700;
  font-size: 16px;
}

#app .top-container .top-content .top-switcher {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#app .main-cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  margin: -80px auto auto auto;
}
</style>
