<template>
  <Layout>
    <div class="container">

      <div class="contact-header">
        <h1 class="contact-title">Say hi!</h1>
        <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
      </div>

      <form class="contact-form" name="contact" @submit.prevent="onSubmit">

        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label>
            <input 
              type="text" 
              name="name" 
              v-model="form.name" placeholder="Name"
              required
              id="name"/>
          </div>
          <div>
            <label for="email" class="label">Your email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              v-model="form.email"
              placeholder="Email Address"/>
          </div>
        </div>

        <div class="message">
          <label for="message" class="label">Message</label>
          <textarea 
            name="message"
            id="message"
            v-model="form.message"></textarea>
        </div>
        <!-- alert succ-->
        <div class="alert alert-success" v-show="success" role="alert">
          Send Success!
        </div>
        <!--alert err-->
        <div v-show="err"> 
          <div class="alert alert-danger" role="alert" v-for="(value, key) in errorArr" :key="key">
          Err: {{ key + ' : ' + value}}
          </div>
        </div>
        <button class="button" type="submit">Submit form</button>
      </form>
    </div>
  </Layout>
</template>


<script>
import axios from 'axios'
export default {
  name: 'ContactPage',
  metaInfo () {
    return {
      title: 'Contact'
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      success: false,
      err: false,
      errorArr: {}
    }
  },
  methods: {
    async onSubmit () {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.GRIDSOME_API_URL + '/say-his',
          data: this.form
        })
        this.showAlert(true)
        this.resetFrom()
      }catch (err) {
        if(err.response && err.response.data && err.response.data.data.errors) {
          this.errorArr = err.response.data.data.errors
        } else {
          this.errorArr = {
            err : '未知错误'
          }
        }
        this.showAlert(false)
      }
    },
    // 重置表单
    resetFrom () {
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    },
    // 显示提示框
    showAlert(isSucc){
      const sucStr = isSucc ? 'success': 'err'
      this[sucStr] = true
      setTimeout(() => {
        this[sucStr] = false
      },3000)
    }
  } 
}
</script>

<style scoped>
.contact-header {
  padding: 2rem 0 4rem 0;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
.alert {
  color: #fff;
  padding: 10px;
}
.alert-success{
  background-color: #67C23A;
}

.alert-danger{
  background-color: #F56C6C;
}
</style>

