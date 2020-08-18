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
    <div class="today-info">
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
    todayValue: { type: Number },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: hsl(228, 28%, 20%);
}

.container .social-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container .social-info p {
  color: hsl(228, 34%, 66%);
}

.container .values-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container .values-info h1 {
  color: hsl(0, 0%, 100%);
}

.container .values-info p {
  color: hsl(228, 34%, 66%);
}

.container .today-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>