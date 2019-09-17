<template>
  <!-- Main Div Content -->
  <div>
    <!-- About Eau de Web -->
    <div class="about_us" id="about_us">
      <b-container class="aboutus_container">
        <!-- About Eau de Web Title -->
        <b-row>
          <b-col>
            <div v-for="text in about_us" :key="text.title">
              <p v-html="text.title" class="title"></p>
              <hr class="content_lineUnder" />
            </div>
          </b-col>
        </b-row>
        <!-- About Eau de Web Title End-->
        <b-row class="aboutus_row">
          <b-col>
            <div
              v-for="text in about_us"
              :key="text.slogan"
              class="aboutus_edw"
            >
              <p v-html="text.slogan" class="slogan"></p>
              <b-container>
                <b-row class="name_row">
                  <b-col col lg="2">
                    <img
                      class="name_logo"
                      src="@/assets/name.svg"
                      alt="Logo for name"
                    />
                  </b-col>
                  <b-col col lg="10">
                    <p v-html="text.nameCard_title" class="nameCard_title"></p>
                    <p
                      v-html="text.nameCard_descript"
                      class="nameCard_descript"
                    ></p>
                  </b-col>
                </b-row>
              </b-container>
              <b-container>
                <b-row class="manifesto_row">
                  <b-col col lg="2">
                    <img
                      class="manifesto_logo"
                      src="@/assets/manifesto.svg"
                      alt="Logo for name"
                    />
                  </b-col>
                  <b-col col lg="10">
                    <p
                      v-html="text.manifestoCard_title"
                      class="manifestoCard_title"
                    ></p>
                    <p
                      v-html="text.manifestoCard_descript"
                      class="manifestoCard_descript"
                    ></p>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </b-col>
          <b-col>
            <div class="aboutus_img">
              <img src="@/assets/aboutus_img.png" alt="Team Photo" />
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="aboutusbtn_style">
            <div
              v-for="text in about_us"
              :key="text.contactus_btn"
              class="aboutus_btn"
            >
              <p
                v-html="text.contactus_btn"
                class="contactus_btn"
                v-scroll-to="'#contact'"
              ></p>
              <p
                v-html="text.jobs_btn"
                class="jobs_btn"
                v-scroll-to="'#jobs'"
              ></p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- About Eau de Web End -->

    <!-- Client Work -->
    <div class="client_work" id="client_work">
      <div v-for="text in client_work" :key="text.title" class="clientwork_edw">
        <p v-html="text.title" class="clientwork_title"></p>
      </div>
      <div v-for="text in client_work" :key="text.workone_title">
        <p v-html="text.workone_title" class="workone_title"></p>
        <p v-html="text.workone_description" class="workone_description"></p>
        <p v-html="text.workone_btn" class="workone_btn"></p>
      </div>
    </div>
    <!-- Client Work End -->
  </div>
  <!-- Main Div Content End -->
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    about_us: Array,
    client_work: Array,
    tech_used: Array,
    jobs: Array,
    contactUs: Array
  }
};
</script>
<style lang="scss"></style>
