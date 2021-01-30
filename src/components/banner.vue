<template>
  <div class="banner">
    <h1 class="banner-title">{{ title }}</h1>
    <h2 class="banner-subtitle">{{ subTitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    title : {
      type: String
    },
    subTitle: {
      type: String
    }
  }
}
</script>

<style>
.banner {
    text-align: center;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
}

.banner-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.banner-title p,
.banner-subtitle p {
    margin: 0;
    padding: 0;
}
.banner-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}
</style>
