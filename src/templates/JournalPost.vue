<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">

        <div class="journal-header">
          <h1 v-html="$page.post.title" class="journal-title" />
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$page.post.author.firstname+ ' ' + $page.post.author.lastname" />
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div v-text="$page.post.created_at"/>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{ $page.post.timeToRead }} min read</span>
            </div>
          </div>          
        </div>
        <div v-html="meToHtml($page.post.content)" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: strapiJournalpost(id: $id) {
    id
    title
    description
    author{
      firstname
      lastname
    }
    content
    timeToRead
    created_at(format: "D. MMMM YYYY")
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name: 'journalPage',
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        { name: 'author', content: `${this.$page.post.author.firstname+this.$page.post.author.lastname}` },
        { name: 'description', content: `${this.$page.post.description}`}
      ]
    }
  },
  methods: {
    meToHtml (markdown) {
      return md.render(markdown)
    }
  }
}
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
p img {
  width: 100%
}
</style>
