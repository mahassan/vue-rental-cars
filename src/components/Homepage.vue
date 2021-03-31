<template>
  <div class="container">
    <div class="searchBox">
      <div class="card">
        <h1>Where are you going?</h1>
        <form>
          <label for="pickup">Pick-up Location</label>
          <input
            aria-labelledby="pick up location"
            type="text"
            name=""
            id="pickup"
            placeholder="city, airport, station, region, district ..."
          />
          <ul>
            <li v-for="(locations, index) in data" :key=index><a href="#">{{locations.country}}</a></li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Homepage",
  data() {
    return {
      data: [],
      //error: false,
    };
  },
  mounted() {
    axios.post("https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=10&solrTerm=manchester")
    .then(res => {
      this.data = res.data.results.docs;
    });
  },
};
</script>
<style lang="scss">
@import url("./Homepage.scss");
</style>