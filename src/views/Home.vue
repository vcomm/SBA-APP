<template>
  <!--<Factory url="https://legaldbol.com/wp-content/uploads/2019/03/79-Best-Australian-Tax-Invoice-Template-No-Gst-in-Photoshop-for-Australian-Tax-Invoice-Template-No-Gst.jpg"/>-->
  <!--<Factory url="http://localhost:3000/master/images/1"/>-->
  <Factory :url="url"/>
</template>

<script>
// @ is an alias to /src
import Factory from '@/components/Factory.vue'

export default {
  name: 'Home',
  components: {
    Factory
  },
  data(){
    return {
      url: 'https://legaldbol.com/wp-content/uploads/2019/03/79-Best-Australian-Tax-Invoice-Template-No-Gst-in-Photoshop-for-Australian-Tax-Invoice-Template-No-Gst.jpg'
    }
  },

}
</script>
