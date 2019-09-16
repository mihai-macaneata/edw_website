<template>
  <!-- Main Div Content -->
  <div>
    <div class="header_image">
      <!-- Navigation -->
      <nav class="nav_contents">
        <img
          class="edw_logo"
          src="@/assets/edw_logo.svg"
          alt="Eau de Web SRL Logo"
        />
        <div class="navElem">
          <ul v-for="label in menu_labels" :key="label.aboutUs">
            <li v-scroll-to="'#aboutUs'">{{ label.aboutUs }}</li>
            <li v-scroll-to="'#clientWork'">
              {{ label.clientWork }}
            </li>
            <li v-scroll-to="'#tech'">{{ label.tech }}</li>
            <li v-scroll-to="'#jobs'">{{ label.jobs }}</li>
            <li v-scroll-to="'#contact'">{{ label.contact }}</li>
            <li>
              <img
                class="globe_img"
                src="@/assets/globe.svg"
                alt="Globe icon; Choose another language"
              />
            </li>
          </ul>
        </div>
      </nav>
      <!-- Navigation End -->

      <!-- Header Text -->
      <div class="header_text">
        <div v-for="text in header_text" :key="text.title">
          <p v-html="text.title" style="color: white;"></p>
          <p v-html="text.description"></p>
        </div>
      </div>
    </div>

    <div>some text text</div>
    <div>some text text</div>
    <div>some text text</div>
    <div>some text text</div>
    <div>some text text</div>
    <div>some text text</div>
    <div>some text text</div>
    <div>some text text</div>
    <div>some text text</div>
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
    header_btn: Array
  }
};
</script>
