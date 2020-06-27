export default {
  data() {
    return {
      processing: false
    };
  },
  methods: {
    startProcessing: function() {
      this.processing = true;
      console.log(this.processing);
    },
    endProcessing: function() {
      this.processing = false;
    },
    isProcessing: function() {
      return this.processing;
    }
  }
};
