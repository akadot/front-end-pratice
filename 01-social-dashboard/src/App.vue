<template>
  <div id="app">
    <div class="top-container">
      <div class="top-content">
        <div class="top-title">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: {{sumTotal()}}</p>
        </div>
        <div class="top-switcher">
          <p>Dark Theme</p>
          <input type="checkbox" id="themeSwitcher" v-model="checked" v-on:click="themeSwitcher()" />
          <label for="themeSwitcher" id="switchLabel"></label>
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
    <div class="github">
      <a href="https://github.com/muril0-0" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <title>social-1_logo-github</title>
          <g fill="#ffffff">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 .4C7.2.4 0 7.6 0 16.4c0 7.1 4.6 13.1 10.9 15.2.8.1 1.1-.3 1.1-.8v-2.7c-4.5 1-5.4-2.1-5.4-2.1-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.5 1.6 2.5 1.6 1.4 2.4 3.7 1.7 4.7 1.3.1-1 .6-1.7 1-2.1-3.6-.4-7.3-1.8-7.3-7.9 0-1.7.6-3.2 1.6-4.3-.2-.4-.7-2 .2-4.2 0 0 1.3-.4 4.4 1.6 1.3-.4 2.6-.5 4-.5s2.7.2 4 .5C23.1 6.6 24.4 7 24.4 7c.9 2.2.3 3.8.2 4.2 1 1.1 1.6 2.5 1.6 4.3 0 6.1-3.7 7.5-7.3 7.9.6.5 1.1 1.5 1.1 3v4.4c0 .4.3.9 1.1.8C27.4 29.5 32 23.5 32 16.4c0-8.8-7.2-16-16-16z"
            />
          </g>
        </svg>
      </a>
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

    themeSwitcher() {
      let input = document.querySelector("#themeSwitcher");
      let style = document.documentElement.style;
      if (input.checked === true) {
        style.setProperty("--topBg", "#f5f7ff");
        style.setProperty("--mainBg", "#ffffff");
        style.setProperty("--cardBg", "#f0f2fa");
        style.setProperty("--cardBgHover", "#d0d7f5");
        style.setProperty("--textBlue", "#63687e");
        style.setProperty("--textWhite", "#1e202a");

        style.setProperty("--switchBg", "#aeb2cb");
        style.setProperty("--switchBtn", "#fff");
      } else {
        style.setProperty("--topBg", "#202337");
        style.setProperty("--mainBg", "#1e202a");
        style.setProperty("--cardBg", "#252a41");
        style.setProperty("--cardBgHover", "#3d4152");
        style.setProperty("--textBlue", "#8b97c6");
        style.setProperty("--textWhite", "#ffffff");

        style.setProperty(
          "--switchBg",
          "linear-gradient(to right, #4899bc 0%, #40c69a 100%)"
        );
        style.setProperty("--switchBtn", "#343956");
      }
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

  --switchBg: linear-gradient(to right, #4899bc 0%, #40c69a 100%);
  --switchBtn: #343956;
  --switchGray: #aeb2cb;
  --switchBtnLight: #fff;

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
  height: 100%;
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

#themeSwitcher {
  height: 0;
  width: 0;
  visibility: hidden;
  -moz-appearance: none;
}

#switchLabel {
  cursor: pointer;
  display: block;
  position: relative;
  margin-left: 10px;
  width: 60px;
  height: 25px;
  border-radius: 50px;
  background: var(--switchBg);
}

#switchLabel:after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: var(--switchBtn);
  transition: 0.3s;
}

#themeSwitcher:checked + #switchLabel:after {
  transform: translateX(200%);
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
  margin: 5px 0;
}

.github {
  margin: 30px 0 10px 0;
  width: 100%;
  text-align: center;
}
</style>
