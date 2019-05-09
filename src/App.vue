<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
  </div>
</template>

<script>
import mHeader from '@/components/m-header/m-header'
export default {
  name: 'App',
  components:{
    mHeader
  }
}
</script>

<style lang="stylus">
html,body
  height:100%

</style>
