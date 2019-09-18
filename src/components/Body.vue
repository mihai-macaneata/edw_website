<template>
  <!-- Main Div Content -->
  <div>
    <!-- About Eau de Web -->
    <div class="about_us">
      <b-container class="aboutus_container">
        <!-- About Eau de Web Title -->
        <b-row>
          <b-col id="about_us">
            <div v-for="text in about_us" :key="text.title">
              <p v-html="text.title" class="aboutus_title"></p>
            </div>
            <hr class="content_lineUnder" />
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
                  <b-col cols="2">
                    <img
                      class="name_logo"
                      src="@/assets/name.svg"
                      alt="Logo for name"
                    />
                  </b-col>
                  <b-col cols="10">
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
                  <b-col cols="2">
                    <img
                      class="manifesto_logo"
                      src="@/assets/manifesto.svg"
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
                v-scroll-to="'#contact_us'"
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
    <div class="client_work">
      <b-container>
        <b-row>
          <b-col class="clientwork_col" id="client_work">
            <!-- Client Work Title -->
            <div v-for="(text, text_key) in client_work" :key="text_key">
              <p class="clientwork_title">{{ text.title }}</p>
            </div>
            <hr class="content_lineUndertwo" />
            <!-- Client Work Title End -->
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <img src="@/assets/ec_logo.svg" alt="" class="workone_logo" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="3"></b-col>
          <b-col cols="5">
            <div
              v-for="(text, text_key) in client_work"
              :key="text_key"
              class="content_workone"
            >
              <p v-html="text.workone_title" class="workone_title"></p>
              <p
                v-html="text.workone_description"
                class="workone_description"
              ></p>
            </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
        <b-row>
          <b-col>
            <div
              v-for="(text, text_key) in client_work"
              :key="text_key"
              class="btn_workone"
            >
              <p v-html="text.workone_btn"></p>
            </div>
          </b-col>
        </b-row>
        <b-row><b-col></b-col></b-row>
      </b-container>
    </div>
    <!-- Client Work End -->
    <!-- Technologies Used -->
    <div class="tech_used">
      <b-container>
        <b-row>
          <b-col class="techused_col" id="tech_used">
            <div v-for="(text, text_key) in tech_used" :key="text_key">
              <p v-html="text.title" class="techused_title"></p>
            </div>
            <hr class="content_lineUnderthree" />
          </b-col>
        </b-row>
        <b-row class="content_techused">
          <b-col cols="2">
            <img src="@/assets/w3c_logo.svg" alt="W3C Logo" />
          </b-col>
          <b-col cols="4">
            <div v-for="(text, text_key) in tech_used" :key="text_key">
              <p v-html="text.w3c" class="techused_w3c"></p>
            </div>
          </b-col>
          <b-col cols="2">
            <img src="@/assets/events_logo.svg" alt="W3C Logo" />
          </b-col>
          <b-col cols="4">
            <div v-for="(text, text_key) in tech_used" :key="text_key">
              <p v-html="text.events" class="techused_events"></p>
            </div>
          </b-col>
        </b-row>
        <b-row class="content_techusedtwo">
          <b-col cols="2">
            <img src="@/assets/semanticweb_logo.svg" alt="Semantic Web Logo" />
          </b-col>
          <b-col cols="4">
            <div v-for="(text, text_key) in tech_used" :key="text_key">
              <p v-html="text.semantic_web" class="techused_semanticweb"></p>
            </div>
          </b-col>
          <b-col cols="2">
            <img src="@/assets/semanticweb_logo.svg" alt="Semantic Web Logo" />
          </b-col>
          <b-col cols="4">
            <div v-for="(text, text_key) in tech_used" :key="text_key">
              <p v-html="text.semantic_web" class="techused_semanticweb"></p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- Git & Clients -->
    <div class="content_techusedthree">
      <b-container>
        <b-row>
          <b-col class="techused_textone">
            <div v-for="(text, text_key) in tech_used" :key="text_key">
              <p v-html="text.text_one"></p>
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
          <b-col>
            <div class="plone_img">
              <img src="@/assets/plone_img.png" alt="Team Photo" />
            </div>
          </b-col>
          <b-col>
            <div v-for="(text, text_key) in tech_used" :key="text_key">
              <p
                v-html="text.plone_title"
                class="techused_plonetitle
"
              ></p>
            </div>
            <b-container>
              <b-row>
                <b-col>
                  <div v-for="(text, text_key) in tech_used" :key="text_key">
                    <p
                      v-html="text.plone_text"
                      class="techused_plonetext
      "
                    ></p>
                  </div>
                </b-col>
              </b-row>
              <b-row class="plone_links">
                <b-col>
                  <div v-for="(text, text_key) in tech_used" :key="text_key">
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
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
      <!-- Plone End -->
    </div>
    <!-- Technologies Used End -->

    <!-- Jobs -->
    <div class="jobs">
      <b-container>
        <b-row>
          <b-col class="jobs_col" id="jobs">
            <div v-for="(text, text_key) in jobs" :key="text_key">
              <p
                v-html="text.title"
                class="jobs_title
"
              ></p>
            </div>
            <hr class="content_lineUnderfour" />
          </b-col>
        </b-row>
        <b-row class="jobs_content">
          <b-col>
            <div class="jobs_box">
              <div v-for="(text, text_key) in jobs" :key="text_key">
                <p
                  v-html="text.job_titleone"
                  class="jobs_titleone
"
                ></p>
                <p
                  v-html="text.job_descriptionone"
                  class="jobs_descriptionone
"
                ></p>
                <div class="btn_jobs"><p v-html="text.job_btnone"></p></div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="jobs_box">
              <div v-for="(text, text_key) in jobs" :key="text_key">
                <p
                  v-html="text.job_titletwo"
                  class="jobs_titletwo
    "
                ></p>
                <p
                  v-html="text.job_descriptiontwo"
                  class="jobs_descriptiontwo
    "
                ></p>
                <div class="btn_jobs"><p v-html="text.job_btntwo"></p></div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="jobs_box">
              <div v-for="(text, text_key) in jobs" :key="text_key">
                <p
                  v-html="text.job_titlethree"
                  class="jobs_titlethree
    "
                ></p>
                <p
                  v-html="text.job_descriptionthree"
                  class="jobs_descriptionthree
    "
                ></p>
                <div class="btn_jobs"><p v-html="text.job_btnthree"></p></div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- Jobs End -->

        <!-- Contact -->
    <div class="contact_us">

    <b-container>
      <b-row>
<b-col class="contactus_col" id="contact_us">
  <div v-for="(text, text_key) in contact_us" :key="text_key">
    <p
      v-html="text.title"
      class="contactus_title
"
    ></p>
  </div>
  <hr class="content_lineUnderfive" />
</b-col>
      </b-row>
      </b-container>
    </div>
    <!-- Contact End -->

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
    contact_us: Array
  }
};
</script>
<style lang="scss"></style>
