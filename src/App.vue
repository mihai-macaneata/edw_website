<template>
  <div id="app">
    <!-- Header Navigation -->
    <!-- <div class="nav_contents">
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
          <b-col>
            <div class="navElem">
              <nav id="mainNav">
                <ul
                  v-for="label in data.menu_labels"
                  :key="label.aboutUs"
                  class="nav_list"
                >
                  <li v-scroll-to="'#about_us'" id="#about_us">
                    <a class="test" href="#about_us">{{ label.aboutUs }}</a>
                  </li>
                  <li v-scroll-to="'#client_work'">
                    <a href="#client_work">{{ label.clientWork }}</a>
                  </li>
                  <li v-scroll-to="'#tech_used'">
                    <a href="#tech_used">{{ label.tech }}</a>
                  </li>
                  <li v-scroll-to="'#jobs'">
                    <a href="#jobs">{{ label.jobs }}</a>
                  </li>
                  <li v-scroll-to="'#contact_us'">
                    <a href="#contact_us">{{ label.contact }}</a>
                  </li>
                  <li class="globe_img">.</li>
                </ul>
              </nav>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div> -->
    <!-- Header Navigation End -->

    <!-- <b-navbar
          toggleable="lg"
          type="dark"
          variant="dark"
          sticky
        >
          <b-navbar-brand href="#">
            <img
              class="edw_logo"
              src="@/assets/img/edw_logo.svg"
              alt="Eau de Web SRL Logo"
          /></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav
              class="navElem ml-auto" v-b-scrollspy:nav-scroller
              v-for="label in data.menu_labels"
              :key="label.aboutUs"
            >
              <b-nav-item v-scroll-to="'#about_us'" href="#about_us">{{
                label.aboutUs
              }}</b-nav-item>
              <b-nav-item v-scroll-to="'#client_work'" href="#client_work">{{
                label.clientWork
              }}</b-nav-item>
              <b-nav-item v-scroll-to="'#tech_used'" href="#tech">{{
                label.tech
              }}</b-nav-item>
              <b-nav-item v-scroll-to="'#jobs'" href="#jobs">{{
                label.jobs
              }}</b-nav-item>
              <b-nav-item v-scroll-to="'#contact_us'" href="#contact_us">{{
                label.contact
              }}</b-nav-item>
              <b-nav-item class="globe_img"></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar> -->

    <Header :header_text="data.header_text" :header_btn="data.header_btn" />
    <Body
      :menu_labels="data.menu_labels"
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
      data: data,
      fixed: true
    };
  },
  mounted() {
    //menu to black
    // $(window).scroll(function() {
    //   var scroll = $(window).scrollTop();
    //   if (scroll > 200) {
    //     $(".nav_contents").css("background", "#1e1e1e !important");
    //   } else {
    //     $(".nav_contents")
    //       .css("background", "transparent !important")
    //       .css("padding-bottom", "0px");
    //   }
    // });
    $(window).scroll(function() {
      $("nav").toggleClass("scrolled", $(this).scrollTop() > 200);
    });

    // //add active class
    // $("ul li a").click(function() {
    //   $("ul li a.active").removeClass("active");
    //   $(this).addClass("active");
    // });
  },
  props: {
    menu_labels: Array
  }
};
</script>

<style lang="scss"></style>
