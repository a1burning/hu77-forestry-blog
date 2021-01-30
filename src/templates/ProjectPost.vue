<template>
  <Layout>
    <div class="project">

      <div class="container">

        <div class="project-header">
          <h1 class="project-title">{{ $page.post.title}}</h1>
          <div class="project-info">

            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span 
                  class="category"
                  v-for="(category, index) in $page.post.categories" 
                  :key="index"
                  v-text="category.title"
                />
              </div>
            </div>

            <div class="year-container">
              <span class="label">Year</span>
              <div v-html="$page.post.created_at"/>
            </div>
          </div>
        </div>

        <div v-html="meToHtml($page.post.content)" class="content" />

      </div>

    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: strapiProjectpost(id: $id) {
    id
    title
    bgColor
    fontColor
    content
    created_at(format: "YYYY")
    categories{
      id
      title
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name:'projectPage',
  metaInfo () {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        style: `background-color: ${this.$page.post.bgColor ? this.$page.post.bgColor : 'var(--color-base)'}; color: ${this.$page.post.fontColor ? this.$page.post.fontColor : 'var(--color-contrast)'}`
      }
    }
  },
  methods: {
    meToHtml (markdown) {
      return md.render(markdown)
    }
  }
}
</script>

<style>
/* p img {
  width: 100%
} */
</style>
<style scoped>
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}
</style>
