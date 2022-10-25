const tmp = "TMP";
console.log(tmp);
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    console.info("created");
  },
  mounted() {
    console.info("mounted");
  }
}