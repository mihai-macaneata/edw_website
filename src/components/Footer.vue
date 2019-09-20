<template>
  <!-- Main Div Content -->
  <div>
    <!-- Social media -->
    <div class="socialmedia">
      <b-container>
        <b-row>
          <b-col>
            <div
              v-for="(socialmedia, socialmedia_key) in socialmedia_title"
              :key="socialmedia_key"
              class="footer_socialtitle"
            >
              {{ socialmedia }}
            </div>
          </b-col>
        </b-row>
        <b-row class="social_row" align-h="center">
          <b-col cols="4">
            <a href="https://www.facebook.com/eaudeweb/" target="_blank"
              ><img
                class="fb_logo"
                src="@/assets/img/fb_logo.png"
                alt="Facebook logo"
            /></a>
          </b-col>
          <b-col cols="4">
            <a
              href="https://www.linkedin.com/company/eau-de-web/about/"
              target="_blank"
              ><img
                class="linkedin_logo"
                src="@/assets/img/linkedin_logo.png"
                alt="LinkedIn logo"
            /></a>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- Social media End-->
    <!-- Photos Row-->
    <div class="photos-row">
      <div class="photos_column">
        <img
          src="@/assets/img/photo1.png"
          alt="Photo EDW One"
          class="photos_res"
        />
      </div>
      <div class="photos_column">
        <img
          src="@/assets/img/photo2.png"
          alt="Photo EDW Two"
          class="photos_res"
        />
      </div>
      <div class="photos_column">
        <img
          src="@/assets/img/photo3.png"
          alt="Photo EDW Three"
          class="photos_res"
        />
      </div>
      <div class="photos_column">
        <img
          src="@/assets/img/photo4.png"
          alt="Photo EDW Four"
          class="photos_res"
        />
      </div>
    </div>
    <!-- Photos Row End-->

    <!-- Footer black -->
    <div class="footer_black">
      <b-container>
        <b-row class="footerblack_row">
          <b-col v-for="text in footer_left" :key="text.title">
            <b-container>
              <b-row class="footerright_row">
                <b-col cols="2">
                  <a href="/"
                    ><img
                      class="edw_logo"
                      src="@/assets/img/edw_logo.svg"
                      alt="Eau de Web SRL Logo"
                  /></a>
                  <p v-html="text.title" class="footer_title"></p>
                </b-col>
                <b-col cols="10">
                  <p v-html="text.linksone_footer" class="footer_linksone"></p>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
          <b-col cols="4">
            <div
              v-for="text in footer_right"
              :key="text.linkstwo_footer"
              class="footer_right"
            >
              <p v-html="text.linkstwo_footer" class="footer_linkstwo"></p>
              <p v-html="text.text_footer" class="footer_copyright"></p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- Footer black End-->
  </div>
  <!-- Main Div Content End -->
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    socialmedia_title: Object,
    footer_left: Array,
    footer_right: Array
  }
};
</script>
