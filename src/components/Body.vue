<template>
  <!-- Main Div Content -->

  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      sticky
      v-b-scrollspy:nav-scroller
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
          class="navElem ml-auto"
          v-for="label in menu_labels"
          :key="label.aboutUs"
        >
          <b-nav-item href="#about_us" v-scroll-to="'#about_us'">{{
            label.aboutUs
          }}</b-nav-item>
          <b-nav-item href="#client_work" v-scroll-to="'#client_work'">{{
            label.clientWork
          }}</b-nav-item>
          <b-nav-item href="#tech" v-scroll-to="'#tech'">{{
            label.tech
          }}</b-nav-item>
          <b-nav-item href="#jobs" v-scroll-to="'#jobs'">{{
            label.jobs
          }}</b-nav-item>
          <b-nav-item href="#contact_us" v-scroll-to="'#contact_us'">{{
            label.contact
          }}</b-nav-item>
          <b-nav-item class="globe_img"></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div id="nav-scroller" style="position: relative;">
      <!-- About Eau de Web -->
      <div class="about_us">
        <b-container class="aboutus_container">
          <!-- About Eau de Web Title -->
          <b-row>
            <b-col>
              <div
                v-for="(aboutUsTitle, aboutUsTitle_key) in aboutus_title"
                :key="aboutUsTitle_key"
              >
                <div data-aos="fade-up" id="about_us">
                  <p class="content_title">{{ aboutUsTitle }}</p>
                  <hr class="content_lineUnder" />
                </div>
              </div>
            </b-col>
          </b-row>
          <!-- About Eau de Web Title End-->

          <!-- About Eau de Web Row -->
          <b-row class="aboutus_row">
            <b-col lg="6" class="aboutus_edw">
              <div v-for="text in aboutus_txt" :key="text.slogan">
                <p v-html="text.slogan" class="slogan" data-aos="fade-up"></p>
                <b-container>
                  <b-row class="name_row" data-aos="fade-up">
                    <b-col cols="2">
                      <img
                        class="name_logo"
                        src="@/assets/img/name.svg"
                        alt="Logo for name"
                      />
                    </b-col>
                    <b-col cols="10">
                      <p
                        v-html="text.nameCard_title"
                        class="nameCard_title"
                      ></p>
                      <p
                        v-html="text.nameCard_descript"
                        class="nameCard_descript"
                      ></p>
                    </b-col>
                  </b-row>
                </b-container>
                <b-container>
                  <b-row class="manifesto_row" data-aos="fade-up">
                    <b-col cols="2">
                      <img
                        class="manifesto_logo"
                        src="@/assets/img/manifesto.svg"
                        alt="Logo for name"
                      />
                    </b-col>
                    <b-col cols="10">
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
            <b-col lg="6" class="aboutusimg_col">
              <div class="aboutus_img" data-aos="fade-up">
                <img src="@/assets/img/aboutus_img.png" alt="Team Photo" />
              </div>
            </b-col>
          </b-row>
          <!-- About Us Row End -->

          <!-- About Us Btns -->
          <b-row>
            <b-col>
              <div>
                <b-container class="aboutusbtn_style">
                  <b-row
                    v-for="text in aboutus_btn"
                    :key="text.contactus_btn"
                    class="aboutus_btn"
                    data-aos="fade-up"
                  >
                    <b-col lg="3">
                      <p
                        v-html="text.contactus_btn"
                        class="contactus_btn"
                        v-scroll-to="'#contact_us'"
                      ></p>
                    </b-col>
                    <b-col lg="3">
                      <p
                        v-html="text.jobs_btn"
                        class="jobs_btn"
                        v-scroll-to="'#jobs'"
                      ></p>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </b-col>
          </b-row>
          <!-- About Us Btns End-->
        </b-container>
      </div>
      <!-- About Eau de Web End -->

      <!-- Client Work -->
      <div class="client_work">
        <b-container fluid>
          <b-row>
            <b-col class="clientwork_col">
              <!-- Client Work Title -->
              <div
                v-for="(clientWorkTitle,
                clientWorkTitle_key) in clientwork_title"
                :key="clientWorkTitle_key"
              >
                <div data-aos="fade-up" id="client_work">
                  <p class="content_title">
                    {{ clientWorkTitle }}
                  </p>
                  <hr class="content_lineUnder" />
                </div>
              </div>
              <!-- Client Work Title End -->
            </b-col>
          </b-row>
          <!-- Client Work Slider -->
          <b-row>
            <b-col>
              <Slider :cwText="clientwork_txt" />
            </b-col>
          </b-row>
          <!-- Client Work Slider End -->
        </b-container>
      </div>
      <!-- Client Work End -->

      <!-- Technologies Used -->
      <div class="tech_used">
        <b-container>
          <b-row>
            <b-col class="techused_col">
              <!-- Tech Used Title -->
              <div
                v-for="(techUsedTitle, techUsedTitle_key) in techused_title"
                :key="techUsedTitle_key"
              >
                <div data-aos="fade-up" id="tech">
                  <p class="content_title">
                    {{ techUsedTitle }}
                  </p>
                  <hr class="content_lineUnder" />
                </div>
              </div>
              <!-- Tech Used Title End -->
            </b-col>
          </b-row>
          <!-- Tech Used First Row -->
          <b-row
            class="content_techused"
            v-for="text in techused_txtone"
            :key="text.semantic_web"
          >
            <b-col md="2" data-aos="fade-up">
              <img
                src="@/assets/img/w3c_logo.svg"
                alt="W3C Logo"
                class="techused_logo"
              />
            </b-col>
            <b-col md="4" data-aos="fade-up">
              <p v-html="text.w3c" class="techused_txt"></p>
            </b-col>
            <b-col md="2" data-aos="fade-up">
              <img
                src="@/assets/img/events_logo.svg"
                alt="Events Logo"
                class="techused_logo"
              />
            </b-col>
            <b-col md="4" data-aos="fade-up">
              <p v-html="text.events" class="techused_txt"></p>
            </b-col>
          </b-row>
          <!-- Tech Used First Row End -->

          <!-- Tech Used Second Row -->
          <b-row
            class="content_techusedtwo"
            v-for="text in techused_txttwo"
            :key="text.semantic_web"
          >
            <b-col md="2" data-aos="fade-up">
              <img
                src="@/assets/img/semanticweb_logo.svg"
                alt="Semantic Web Logo"
                class="techused_logo"
              />
            </b-col>
            <b-col md="4" data-aos="fade-up">
              <p v-html="text.semantic_web" class="techused_txt"></p>
            </b-col>
            <b-col md="2" data-aos="fade-up">
              <img
                src="@/assets/img/semanticweb_logo.svg"
                alt="Semantic Web Logo"
                class="techused_logo"
              />
            </b-col>
            <b-col md="4" data-aos="fade-up">
              <p v-html="text.semantic_webtwo" class="techused_txt"></p>
            </b-col>
          </b-row>
          <!-- Tech Used Second Row End-->
        </b-container>
      </div>

      <!-- Git & Clients -->
      <div class="content_techusedthree">
        <b-container>
          <b-row>
            <b-col>
              <div
                class="techused_textone"
                v-for="text in techused_txtother"
                :key="text.text_one"
              >
                <p v-html="text.text_one" data-aos="fade-up"></p>
              </div>
            </b-col>
          </b-row>
        </b-container>
        <!-- Git & Clients End -->
      </div>
      <!-- Plone -->
      <div class="content_techusedfour">
        <b-container>
          <b-row>
            <b-col lg="6">
              <div class="plone_img" data-aos="fade-up">
                <img src="@/assets/img/plone_img.png" alt="Team Photo" />
              </div>
            </b-col>
            <b-col lg="6">
              <div v-for="text in techused_plone" :key="text.plone_title">
                <b-container>
                  <b-row>
                    <b-col>
                      <p
                        v-html="text.plone_title"
                        class="techused_plonetitle"
                        data-aos="fade-up"
                      ></p>
                      <p
                        v-html="text.plone_text"
                        class="techused_plonetext
      "
                        data-aos="fade-up"
                      ></p>
                    </b-col>
                  </b-row>
                  <b-row class="plone_links" data-aos="fade-up">
                    <b-col>
                      <p
                        v-html="text.plone_linkone"
                        class="techused_plonelink
      "
                      ></p>
                      <p
                        v-html="text.plone_linktwo"
                        class="techused_plonelink
      "
                      ></p>
                      <p
                        v-html="text.plone_linkthree"
                        class="techused_plonelink
      "
                      ></p>
                      <p
                        v-html="text.plone_linkfour"
                        class="techused_plonelink
      "
                      ></p>
                      <p
                        v-html="text.plone_linkfive"
                        class="techused_plonelink
      "
                      ></p>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </b-col>
          </b-row>
        </b-container>
        <!-- Plone End -->
      </div>
      <!-- Technologies Used End -->

      <!-- Jobs -->
      <div class="jobs">
        <b-container>
          <!-- Jobs Title -->
          <b-row>
            <b-col class="jobs_col">
              <div
                v-for="(jobsTitle, jobsTitle_key) in jobs_title"
                :key="jobsTitle_key"
              >
                <div data-aos="fade-up" id="jobs">
                  <p class="content_title">{{ jobsTitle }}</p>
                  <hr class="content_lineUnder" />
                </div>
              </div>
            </b-col>
          </b-row>
          <!-- Jobs Title End-->

          <!-- Jobs Boxes -->
          <b-row class="jobs_content justify-content-md-center">
            <b-col
              v-for="text in jobs_txt"
              :key="text.job_title"
              class="jobs_box"
              data-aos="fade-up"
              lg="3"
            >
              <div>
                <div class="title_div">
                  <p
                    v-html="text.job_title"
                    class="jobs_title
"
                  ></p>
                </div>
                <div class="scrollbar">
                  <p
                    v-html="text.job_description"
                    class="jobs_description
"
                  ></p>
                </div>
                <div class="btn_jobs"><p v-html="text.job_btn"></p></div>
              </div>
            </b-col>
          </b-row>
          <!-- Jobs Boxes End-->
        </b-container>
      </div>
      <!-- Jobs End -->

      <!-- Contact -->
      <div class="contact_us">
        <b-container>
          <b-row>
            <!-- Contact Us Title -->
            <b-col class="contactus_col">
              <div
                v-for="(contactUsTitle, contactUsTitle_key) in contactus_title"
                :key="contactUsTitle_key"
              >
                <div data-aos="fade-up" id="contact_us">
                  <p class="content_titleContact">
                    {{ contactUsTitle }}
                  </p>
                  <hr class="content_lineUnder" />
                </div>
              </div>
            </b-col>
            <!-- Contact Us Title End -->
          </b-row>

          <!-- Text after Contact Us Title -->
          <b-row>
            <b-col class="contactus_text">
              <div v-for="text in contactus_txt" :key="text.contact_text">
                <p v-html="text.contact_text" data-aos="fade-up"></p>
              </div>
            </b-col>
          </b-row>
          <!-- Text after Contact Us Title End -->

          <!-- Contact and Map Row -->
          <b-row class="contactmap_row">
            <b-col lg="6">
              <b-container>
                <b-row
                  class="contactus_row"
                  v-for="text in contactus_txt"
                  :key="text.address_title"
                  data-aos="fade-up"
                >
                  <!-- Address -->
                  <b-col>
                    <p
                      v-html="text.address_title"
                      class="contactus_addresstitle
"
                    ></p>
                    <p
                      v-html="text.address_description"
                      class="contactus_addressdescript
"
                    ></p>

                    <!-- Email-->
                    <p
                      v-html="text.email_title"
                      class="contactus_emailtitle
"
                    ></p>
                    <a
                      :href="`mailto:${text.email_description}`"
                      target="_blank"
                      ><p
                        v-html="text.email_description"
                        class="contactus_emaildescript
"
                      ></p
                    ></a>
                  </b-col>
                  <!-- Phone/Fax -->
                  <b-col>
                    <p
                      v-html="text.phone_title"
                      class="contactus_phonetitle
"
                    ></p>
                    <p
                      v-html="text.phone_description"
                      class="contactus_phonedescript
"
                    ></p>
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
            <!-- Google Maps EDW -->
            <b-col class="edw_map" data-aos="fade-up" lg="6">
              <a
                href="https://www.google.com/maps/place/Eau+de+Web/@44.4660201,26.0824334,15z/data=!4m2!3m1!1s0x0:0xfc73471ea7cf8a74?sa=X&ved=2ahUKEwjDkpnnxv_kAhXRl4sKHf3CAjMQ_BIwE3oECA8QCA"
                ><img src="@/assets/img/edw_map.png" alt=""
              /></a>
            </b-col>
          </b-row>
          <!-- Contact and Map Row End -->
        </b-container>
      </div>
      <!-- Contact End -->
    </div>
  </div>
  <!-- Main Div Content End -->
</template>

<script>
import Slider from "./Slider";

export default {
  data() {
    return {};
  },
  props: {
    menu_labels: Array,
    aboutus_title: Object,
    aboutus_txt: Array,
    aboutus_btn: Array,
    clientwork_title: Object,
    clientwork_txt: Array,
    techused_title: Object,
    techused_txtone: Array,
    techused_txttwo: Array,
    techused_txtother: Array,
    techused_plone: Array,
    jobs_title: Object,
    jobs_txt: Array,
    contactus_title: Object,
    contactus_txt: Array
  },
  components: {
    Slider
  }
};
</script>
<style lang="scss"></style>
