<template>
  <div class="container">
    <div class="social-info">
      <img v-bind:src="require(`../assets/icons/${socialIcon}`)" alt="Social Logo" />
      <p>{{socialName}}</p>
    </div>
    <div class="values-info">
      <h1>{{socialValue}}</h1>
      <p>{{socialType}}</p>
    </div>
    <div :class="['today-info', arrowIcon]">
      <img v-bind:src="require(`../assets/icons/${arrowIcon}`)" />
      <p>{{todayValue}}</p>
      <p>Today</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigCard",
  props: {
    socialIcon: { type: String },
    socialName: { type: String },
    socialValue: { type: Number },
    socialType: { type: String },
    arrowIcon: { type: String },
    todayValue: { type: String },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
  min-height: 230px;
  padding: 30px 0;
  border-radius: 3%;
  background-color: var(--cardBg);
  transition: background-color 0.5s;
  cursor: pointer;
}

.container:hover {
  background-color: var(--cardBgHover);
}

.container .social-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container .social-info p {
  color: var(--textBlue);
  font-weight: 700;
  font-size: 12px;
  margin-left: 10px;
}

.container .values-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container .values-info h1 {
  color: var(--textWhite);
  font-size: 52px;
  font-weight: 700;
}

.container .values-info p {
  color: var(--textBlue);
  font-size: 12px;
  letter-spacing: 5px;
}

.container .today-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
}

.container .today-info[class*="up"] {
  color: var(--statusGreen);
}

.container .today-info[class*="down"] {
  color: var(--statusRed);
}

.container .today-info p:nth-child(2) {
  margin: 0 8px;
}
</style>