<template>
  <div class="container">
    <div class="small-content">
      <div class="top-content">
        <p>{{cardTitle}}</p>
        <img v-bind:src="require(`../assets/icons/${cardIcon}`)" />
      </div>
      <div class="bottom-content">
        <p>{{cardValue}}</p>
        <div :class="['percents', cardArrow]">
          <img v-bind:src="require(`../assets/icons/${cardArrow}`)" />
          <p>{{cardPercent}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallCard",
  props: {
    cardTitle: { type: String },
    cardIcon: { type: String },
    cardValue: { type: Number },
    cardArrow: { type: String },
    cardPercent: { type: Number },
  },
};
</script>

<style scoped>
.container {
  width: 250px;
  height: 150px;
  background: var(--cardBg);
  border-radius: 3%;
  transition: background-color 0.5s;
  cursor: pointer;
}

.container:hover {
  background: var(--cardBgHover);
}

.container .small-content {
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
}

.container .top-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
}

.container .bottom-content {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}

.container .bottom-content .percents {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container .top-content {
  color: var(--textBlue);
  font-weight: 700;
  font-size: 14px;
}

.container .bottom-content > p {
  font-weight: 700;
  font-size: 38px;
}

.container .bottom-content .percents p {
  font-weight: 700;
  font-size: 12px;
  margin-left: 5px;
}

.container .bottom-content .percents[class*="up"] {
  color: var(--statusGreen);
}

.container .bottom-content .percents[class*="down"] {
  color: var(--statusRed);
}
</style>