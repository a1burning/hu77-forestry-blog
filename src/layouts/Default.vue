<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
  <!-- header -->
    <header class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
      <div class="container">
        <div class="left">
          <g-link :to="{ name: 'home' }" class="home-link">
            <img 
              src="../../static/logo.svg"
              :alt="settings.site_name" 
              class="logo"
            />
          </g-link>
        </div>
        <nav class="nav right">
          <g-link class="nav__link" to="/journal">Journal</g-link>
          <g-link class="nav__link" to="/contact">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <!-- content -->
    <slot/>
    <!-- footer -->
    <footer class="footer">
      <div class="container">
        <span v-html="settings.footer" />
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      logo: require("../../static/logo.svg"),
      settings: require("../../static/theme.json")
    }
  }
}
</script>

<style>
/* layout */
* {
  box-sizing: border-box;
}

body {
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-contrast: rgb(0, 0, 0);
  --color-contrast-1: rgb(43, 43, 43);
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

body.dark {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}

h1 {
  letter-spacing: -0.01em;
}

.layout {
  padding: 0;
}

.layout.sticky-header {
  padding: 6rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
/* header */
.header {
    position: relative;
    height: 6rem;
    z-index: 10;
    background-color: #fff;
}
.header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}
.home-link {
    text-decoration: none;
}
.logo {
    height: 1.5rem;
}
.site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;   
}
.nav > * {
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 3rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border 0.15s;
}
.nav > *:last-of-type {
    margin: 0;
}
.nav > *:hover {
    border-color: inherit;
}
.nav > .active {
    border-color: inherit;
}
/* footer */
.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}
</style>