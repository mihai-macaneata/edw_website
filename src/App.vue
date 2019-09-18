<template>
  <div id="app">
    <Header
      :menu_labels="data.menu_labels"
      :header_text="data.header_text"
      :header_btn="data.header_btn"
    />
    <Body
      :about_us="data.about_us"
      :client_work="data.client_work"
      :tech_used="data.tech_used"
      :jobs="data.jobs"
      :contact_us="data.contact_us"
    />
    <Footer :footer="data.footer"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import data from "@/assets/data";

export default {
  name: "app",
  components: {
    Header,
    Body,
    Footer
  },
  data() {
    return {
      data: data
    };
  }
};
</script>

<style lang="scss"></style>
