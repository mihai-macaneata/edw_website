<template>
  <!-- Main Div Content -->
  <div>
    <!-- CSIRTS Network Members -->
    <div class="network_members" id="network_members">

            <!-- CSIRTS Network Members Title-->
            <div
              v-for="(text, text_key) in body_text"
              :key="text_key"
              class="networkmembers_title"
            >
              {{ text }}
            </div>
            <!-- CSIRTS Network Members Title End -->
          </div>
    <!-- CSIRTS Network Members End -->
  </div>
  <!-- Main Div Content End -->
</template>

<script>
// import * as Resize from 'iframe-resizer'

export default {
  props: {
    body_text: Object
  },
  data() {
    return {
      iframeHeight: 1200
    };
  },
  mounted() {
    window.addEventListener(
      "message",
      evt => {
        // console.log(evt);
        if (parseInt(evt.data)) {
          this.iframeHeight = parseInt(evt.data) + 80;
        }
      },
      false
    );
  }
};
</script>
<style lang="scss">
iframe {
  border: none;
  overflow-x: hidden;
}
</style>
