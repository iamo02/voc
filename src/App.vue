<template>
  <v-app>
    <v-app-bar
      app
      color="#FEC224"
      dark
    >
    </v-app-bar>

    <v-main>
       <Content />
    </v-main>

 <v-bottom-navigation
    background-color="#FEC224"
    dark
    
  >
    <v-toolbar-title>Krungsri Consumer</v-toolbar-title>
  </v-bottom-navigation>


  </v-app>
</template>

<script>
import Content from "@/components/core/Content";

export default {
  name: 'App',

  components: {
    Content
    
  },

  data: () => ({
    //
  }),
};
</script>
