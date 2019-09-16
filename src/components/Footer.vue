<template>
  <!-- Main Div Content -->
  <div>
    <!-- Footer Info -->
    <div class="footer_info" id="contact">
      <!-- Bubbles Img -->
      <div class="img">
      <div class="grid">
        <div class="row">
            <!-- More information -->
            <div class="col col-4-of-4 col-m-4-of-4 col-s-4-of-4">
              <div v-for="text in footer_one" :key="text.more_info">
                <div class="more_info">
                  {{ text.more_info }}
                </div>
                <div class="more_textone">
                  <p v-html="text.more_textone"></p>
                </div>
                <div class="more_texttwo">
                  <p v-html="text.more_texttwo"></p>
                </div>
              </div>
            </div>
            <!-- More information end -->

            <!-- Contact -->
            <div class="col col-4-of-4 col-m-4-of-4">
              <div v-for="text in footer_two" :key="text.contact">
                <div class="contact">
                  {{ text.contact }}
                </div>
                <div class="contact_contents">
                  <div class="secretariat">
                    {{ text.secretariat }}
                    <a :href="`mailto:${text.secretariat_email}`" target="_blank" class="emails">{{
                      text.secretariat_email
                    }}</a>
                  </div>
                  <div class="chair">
                    {{ text.chair }}
                    <a :href="`mailto:${text.chair_email}`" target="_blank" class="emails col-s-4-of-4">{{
                      text.chair_email
                    }}</a>
                  </div>
                </div>
              </div>
              <!-- Contact End -->
            </div>
        </div>
        <!-- End Row -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- Bubble Img End -->
    </div>
    <!-- Footer Info End -->

    <!-- Footer Powered By -->
    <div class="footer_text">
      <div class="grid">
        <div
          class="row footer_center"
          v-for="text in footer_three"
          :key="text.text_one"
        >
          <!-- Csirts Network Text-->
          <div class="col col-1-of-4 col-m-2-of-4 col-s-2-of-4 csirts_network">
            {{ text.text_one }}
          </div>
          <!-- Csirts Network Text End -->

          <!-- Enisa Logo -->
          <div class="col col-1-of-2 col-m-2-of-4 col-s-2-of-4 enisa_logo">
            <a :href="text.link_one">

            <!-- <img
              src="@/assets/enisa_logo.png"
              alt="Enisa logo"
              class="enisa-logo"
            /> -->
            </a>
          </div>
          <!-- Enisa Logo End -->
          <!-- Check Enisa -->
          <div class="col col-1-of-2 col-m-4-of-4 check_enisa">
            <span class="col-s-4-of-4"> {{ text.text_two }} </span>
            <!-- links -->
            <span class="col-s-4-of-4 links_enisa">
              <a :href="text.link_one" class="enisalink_one" target="_blank">{{
                text.link_one_text
              }}</a>
              <span class="between_links"> / </span>
              <a :href="text.link_two" class="enisalink_two" target="_blank">{{
                text.link_two_text
              }}</a>
            </span>
          </div>
          <!-- Check Enisa End -->
        </div>
        <!-- End Row -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- Footer Powered By End -->
  </div>
  <!-- Main Div Content End -->
</template>

<script>
export default {
  props: {
    footer_one: Array,
    footer_two: Array,
    footer_three: Array
  }
};
</script>
