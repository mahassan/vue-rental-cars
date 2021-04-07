<template>
  <div class="container">
    <div class="searchBox">
      <div class="card">
        <h1>Where are you going?</h1>
          <Results 
          @refreshSearch="dataOutput($event)"
          :filteredLocations="filteredLocations" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Results from "./Results"
export default {
  name: "Homepage",
  components: {
    Results
  },
  data() {
    return {
      data: [],
      searchTerm: "",
      //isLoading: true,
    };
  },
  methods: {
    dataOutput(val){
      this.searchTerm = val;
      if (this.searchTerm !== "" && this.searchTerm.length >= 2) {
        //this.isLoading = true;
        axios
          .get(
            `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=10&solrTerm=${this.searchTerm}`
          )
          .then((res) => {
            //this.isLoading = false;
            this.data = res.data.results.docs;
          })
          .catch((err) => {
            console.log("Error is " + err);
          });
      } else {
        this.data = [];
      }
    },
  },
  computed: {
    filteredLocations() {
      return this.data.filter((posts) => {
        return posts;
      });
    },
  },
};
</script>
<style lang="scss">
@import url("./Homepage.scss");
</style>