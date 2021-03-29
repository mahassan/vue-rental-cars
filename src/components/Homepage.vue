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
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  props: {
    msg: String,
  },
};
</script>
<style lang="scss">
@import url('./Homepage.scss');
</style>