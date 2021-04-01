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
            v-model="searchTerm"
            @change="filteredLocations()"
            placeholder="city, airport, station, region, district ..."
          />
          <ul class="auto-gen-list">
            <li v-for="(locations, index) in data" :key="index">
              <a href="#">
                <div
                  :class="{
                    airport: locations.placeType == 'A',
                    city: locations.placeType == 'C',
                    train: locations.placeType == 'T',
                  }"
                >
                  {{ locations.bookingId | stripId }}
                </div>

                <div class="location">
                  {{ locations.name }}
                  {{ locations.iata ? `(${locations.iata})` : "" }}
                  <br />
                  <span class="geographic">
                    {{ locations.region ? locations.region : "" }}
                    {{ locations.country ? locations.country : "" }}
                  </span>
                </div>

                <div class="popular" v-show="locations.isPopular">
                  <span> popular </span>
                </div>
              </a>
            </li>
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
      searchTerm: "",
      //error: false,
    };
  },
  mounted() {
    axios
      .post(
        `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=10&solrTerm=manchester`
      )
      .then((res) => {
        this.data = res.data.results.docs;
      });
  },
  computed: {
    filteredLocations() {
      return this.data.filter((posts) => {
        return posts.city.includes(this.searchTerm);
      });
    },
  },
};
</script>
<style lang="scss">
@import url("./Homepage.scss");
</style>