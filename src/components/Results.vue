<template>
  <form @submit.prevent>
    <div class="form-control">
      <label for="pickup">Pick-up Location</label>
      <input
        aria-labelledby="pick up location"
        type="text"
        name=""
        id="pickup"
        @keyup="refreshSearch"
        v-model.trim="searchTerm"
        placeholder="city, airport, station, region, district ..."
      />
    </div>
    <ul class="auto-gen-list">
      <li v-for="(locations, index) in filteredLocations" :key="index">
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
</template>
<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  props: ["filteredLocations"],
  methods: {
    refreshSearch() {
      this.$emit("refreshSearch", this.searchTerm);
    },
  },
};
</script>