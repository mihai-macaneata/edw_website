<template>
  <div id="app">
    <Header :menu_labels="data.menu_labels" :header_text="data.header_text" :header_btn="data.header_btn "/>
    <Body :body_text="data.body_text"/>
    <Footer :footer_one="data.footer_one" :footer_two="data.footer_two" :footer_three="data.footer_three"/>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Body from '@/components/Body'
import Footer from '@/components/Footer'
import data from '@/assets/data'

export default {
  name: 'app',
  components: {
    Header,
    Body,
    Footer
  },
  data(){
    return {
      data: data
    }
  },
  created() {

  },
  mounted() {

  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
