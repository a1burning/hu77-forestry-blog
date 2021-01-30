<template>
  <Layout>
    <div class="container">
      <Banner :title="pageInfo.title" :subTitle="pageInfo.subtitle"/>
      <projectListPage :projectList="projectList" />
    </div>
    <journalListPage :journalList="journalList" />
  </Layout>
</template>

<page-query>
query {
  forstry: allStrapiForstry {
    edges {
      node {
        id
        title
        subtitle
      }
    }
  }
  projectList: allStrapiProjectpost (sort: { order: ASC}){
    edges {
      node {
        id
        title
        cover {
          url
        }
        categories {
          id
          title
        }
      }
    }
  }
  journalList: allStrapiJournalpost {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
import Banner from '../components/banner.vue'
import projectListPage from '../components/projectList.vue'
import journalListPage from '../components/journalList.vue'
export default {
  name:'HomePage',
  metaInfo () {
    return {
      title: 'Home'
    }
  },
  components: {
    Banner,
    projectListPage,
    journalListPage
  },
  computed: {
    pageInfo() {
      return this.$page.forstry.edges[0].node
    },
    projectList() {
      return this.$page.projectList.edges
    },
    journalList() {
      return this.$page.journalList.edges
    }
  }
}
</script>
