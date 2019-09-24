<template>
  <!-- Main Div Content -->
  <div>
    <div class="header_image">
      <!-- Header Content -->
      <div class="header_content">
        <!-- Header Text -->
        <div class="header_text">
          <!-- Header Title and Description -->
          <div v-for="text in header_text" :key="text.title">
            <p v-html="text.title" class="header_title"></p>
            <p v-html="text.description" class="header_description"></p>
          </div>
          <!-- Header Title and Description End -->
          <!-- Header Btn -->
          <div class="btn_center">
            <div class="header_btn" v-scroll-to="'#about_us'">
              <div
                v-for="(btn, btn_key) in header_btn"
                :key="btn_key"
                class="btn_text"
              >
                {{ btn }}
              </div>
              <div class="arrow_right">
                <!-- <img
                  class="globe_img"
                  src="@/assets/img/arrow_right.svg"
                  alt="Arrow pointing to the right"
                /> -->
                <i class="fa fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <!-- Header Btn End -->
        </div>
        <!-- Header Text End -->
      </div>
      <!-- Header Content End-->
    </div>
  </div>
  <!-- Main Div Content End -->
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    menu_labels: Array,
    header_text: Array,
    header_btn: Object
  }
};
</script>
