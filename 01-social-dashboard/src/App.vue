<template>
  <div id="app">
    <div class="top-container">
      <div class="top-content">
        <div class="top-title">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: {{sumTotal()}}</p>
        </div>
        <div class="top-switcher">
          <p>Theme:</p>
          <input type="checkbox" id="themeSwitcher" />
        </div>
      </div>
    </div>

    <div class="main-cards">
      <div class="content" v-for="social in bigData" :key="social" :class="social.class">
        <BigCard
          :socialIcon="social.iconUrl"
          :socialName="social.socialName"
          :socialValue="social.socialValue > 9999 ? (social.socialValue/1000)+'k' : social.socialValue"
          :socialType="social.socialType == 'F' ? 'FOLLOWERS' : 'SUBSCRIBERS'"
          :arrowIcon="social.arrowIcon == 'up' ? 'icon-up.svg' : 'icon-down.svg'"
          :todayValue="social.todayValue"
        />
      </div>
    </div>
    <div class="bottom-container">
      <h1>Overview - Today</h1>
    </div>
    <div class="small-card">
      <div class="small-content" v-for="info in smallData" :key="info">
        <SmallCard
          :cardTitle="info.cardTitle"
          :cardIcon="info.cardIcon"
          :cardValue="info.cardValue > 9999 ? (info.cardValue/1000) + 'k' : info.cardValue"
          :cardArrow="info.cardArrow == 'up' ? 'icon-up.svg' : 'icon-down.svg'"
          :cardPercent="info.cardPercent + '%'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BigCard from "./components/BigCard.vue";
import SmallCard from "./components/SmallCard.vue";

import bigData from "./data/bigData";
import smallData from "./data/smallData";
export default {
  name: "App",
  components: {
    BigCard,
    SmallCard,
  },
  methods: {
    sumTotal() {
      let totalValue = 0;
      for (let i = 0; i < this.bigData.length; i++) {
        totalValue += this.bigData[i].socialValue;
      }
      return totalValue;
    },
  },

  data() {
    return {
      bigData,
      smallData,
    };
  },
};
</script>

<style>
:root {
  --topBg: #202337;
  --mainBg: #1e202a;
  --cardBg: #252a41;
  --cardBgHover: #3d4152;
  --textBlue: #8b97c6;
  --textWhite: #ffffff;
  --textBlack: #1d1d1d;

  --statusGreen: #1db489;
  --statusRed: #dc414c;

  --borderFacebook: #198ff5;
  --borderTwitter: #1ca0f2;
  --borderYoutube: #c4032a;
  --borderInstagram: linear-gradient(to right, #df4996, #fdc468);
}

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
  background-color: var(--mainBg);
}

#app {
  width: 100%;
}

#app .top-container {
  height: 200px;
  background-color: var(--topBg);
}

#app .top-container .top-content {
  color: var(--textWhite);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  height: 50%;
  margin: auto;
}

#app .top-container .top-content .top-title p {
  color: var(--textBlue);
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

#app .main-cards .facebook::before {
  content: "";
  position: absolute;
  background: var(--borderFacebook);
  height: 7px;
  width: 250px;
  border-radius: 5px 5px 0 0;
}
#app .main-cards .twitter::before {
  content: "";
  position: absolute;
  background: var(--borderTwitter);
  height: 7px;
  width: 250px;
  border-radius: 5px 5px 0 0;
}
#app .main-cards .instagram::before {
  content: "";
  position: absolute;
  background: var(--borderInstagram);
  height: 7px;
  width: 250px;
  border-radius: 5px 5px 0 0;
}
#app .main-cards .youtube::before {
  content: "";
  position: absolute;
  background: var(--borderYoutube);
  height: 7px;
  width: 250px;
  border-radius: 5px 5px 0 0;
}

#app .bottom-container {
  max-width: 80%;
  margin: auto;
  margin-top: 60px;
  color: var(--textWhite);
}

#app .small-card {
  color: var(--textWhite);
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

#app .small-card .small-content {
  margin-top: 10px;
}
</style>
