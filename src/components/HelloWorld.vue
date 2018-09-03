<template>

  <div class="hello">
    <mt-header title="标题">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
   
  </div>
</template>

<script>
import LoginService from '../services/LoginService.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      service: new LoginService(),
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    async login() {
        var result = await this.service.login('username', 'password')
        alert(JSON.stringify(result))
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#test {
  margin-top: 24px;
}

.ii{
  font-size: 40px;
}

</style>
