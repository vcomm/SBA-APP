<template>
  <div class="status">
    <div class="coord">
      <span style=" margin-left: 10px;">X: <strong>{{ coord.x }}</strong></span>
      <span style=" margin-left: 10px;">Y: <strong>{{ coord.y }}</strong></span>
    </div>
  </div>
  <div class="factory">
    <!--<canvas class="image" ref="imagemap"/>-->
    <div class="image">
      <img ref="imagemap" :src="url" width="794" height="1123">
    </div>  
    <div class="dbrecord"/>
  </div>
</template>

<script>


export default {
  name: 'Factory',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data(){
    return{
        coord:{
          x: NaN,
          y: NaN
        }
    }
  },
  created() {
    
  },
  mounted() {
    this.image = this.$refs.imagemap
    this.image.addEventListener("mousemove", (event) => {
      const rect = this.image.getBoundingClientRect();
      this.coord.x = event.clientX - Math.round(rect.left);
      this.coord.y = event.clientY - Math.round(rect.top);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status {
  background-color:#f0ebeb6e;
  margin: auto;
  border-radius: 5px;
  border: 1px solid black;  
  width: 99.9%; /* Full width */
  height: 6vh; /* Full height */
}
.coord {
  padding-top: 10px;
  text-align: left;  
}
.factory {
  display: flex;
  text-align: left;
  margin-top: 10px;
}
.image {
  background-color:#f0ebeb6e;
  border-radius: 5px;
  border: 1px solid black;
  text-align: left;
  /*width: 70%;  Full width */
  /*height: 90vh;  Full height */
}
.dbrecord {
  background-color:#f0ebeb6e;  
  border-radius: 5px;
  border: 1px solid black;  
  margin-left: 10px;
  width: 30%;   /* Full width */
  height: 90vh; /* Full height */
}
</style>
