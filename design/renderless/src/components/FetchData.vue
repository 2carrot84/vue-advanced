<script>
import axios from 'axios';

export default {
  name: "FetchData",
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
        .then(response => {
          this.response = response;
          this.loading = false;
        })
        .catch(error => {
          console.error(error)
        });
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
}
</script>