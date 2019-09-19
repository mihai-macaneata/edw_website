<template>
  <div id="app">
    <Header
      :menu_labels="data.menu_labels"
      :header_text="data.header_text"
      :header_btn="data.header_btn"
    />
    <Body
      :aboutus_title="data.aboutus_title"
      :aboutus_txt="data.aboutus_txt"
      :aboutus_btn="data.aboutus_btn"
      :clientwork_title="data.clientwork_title"
      :clientwork_txt="data.clientwork_txt"
      :techused_title="data.techused_title"
      :techused_txtone="data.techused_txtone"
      :techused_txttwo="data.techused_txttwo"
      :techused_txtother="data.techused_txtother"
      :techused_plone="data.techused_plone"
      :jobs_title="data.jobs_title"
      :jobs_txt="data.jobs_txt"
      :contactus_title="data.contactus_title"
      :contactus_txt="data.contactus_txt"
    />
    <Footer
      :socialmedia_title="data.socialmedia_title"
      :footer_left="data.footer_left"
      :footer_right="data.footer_right"
    />
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
