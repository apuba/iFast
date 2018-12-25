<template>
  <div>
      <div>hello wrold</div>
  </div>
</template>

<script>
export default {
  name: "dome",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    // placement: {
    //   type: String,
    //   default: 'left'
    // },
    // showMode: {
    //   type: String,
    //   default: 'overlay'
    // },
    drawerStyle: Object
  },
  data() {
    return {
      key: value
    };
  },

  methods: {
    hideMask() {
      this.$emit("update:show", false);
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawerWidth = this.$refs.drawer.clientWidth;
    });
  },
  watch: {}
};
</script>

<style scoped>
</style>