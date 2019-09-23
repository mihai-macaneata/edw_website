<template>
  <div id="app">
    <!-- Header Navigation -->
    <div class="nav_contents">
      <b-container>
        <b-row>
          <b-col cols="2">
            <a href="#"
              ><img
                class="edw_logo"
                src="@/assets/img/edw_logo.svg"
                alt="Eau de Web SRL Logo"
            /></a>
          </b-col>
          <b-col cols="10">
            <div class="navElem">
              <ul
                v-for="label in data.menu_labels"
                :key="label.aboutUs">
                <li v-scroll-to="'#about_us'">
                  {{ label.aboutUs }}
                </li>
                <li v-scroll-to="'#client_work'">
                  {{ label.clientWork }}
                </li>
                <li v-scroll-to="'#tech_used'">{{ label.tech }}</li>
                <li v-scroll-to="'#jobs'">{{ label.jobs }}</li>
                <li v-scroll-to="'#contact_us'">{{ label.contact }}</li>
                <li class="globe_img">img</li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- Header Navigation End -->

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
import $ from "jquery";

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
  },
  mounted() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
        $(".nav_contents").css("background", "#1e1e1e");
      } else {
        $(".nav_contents").css("background", "transparent");
      }
    });

     // $("#nav").scrollspy({ offset: -25 });
  },
  props: {
    menu_labels: Array
  }
};
</script>

<style lang="scss"></style>
