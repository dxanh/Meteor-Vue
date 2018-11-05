# Meteor-Vue

Start app using Vue + Meteor options
- Akryum’s Vue support packages (tracker, vuex, router…)
- Vuetify 
- Meteor accounts

## Installation

    curl https://install.meteor.com/ | sh
    
## Creat app
    mkdir Meteor-Vue
    
    cd Meteor-Vue
    
    meteor create meteor-vue-app
    
### Fire up the meteor app
    cd meteor-vue-app
    meteor
    
## Add vue support

    meteor npm i vue-meteor-tracker

### Add vue component from akryum

    meteor add akryum:vue-component
    
### Add vue stylus support from akryum

    meteor add akryum:vue-stylus

### Add vue router

    meteor add akryum:vue-router2

### Remove Blaze support

    meteor remove blaze-html-templates
    
### Add more package

    meteor add static-html akryum:vue akryum:vue-component session
    
Removing the Blaze “demo” app 


## Installing Vue through npm

    meteor npm i vue

## Implements Vue

Edit client/main.js file

```js
import {Meteor} from "meteor/meteor";
import {Vue} from "vue";

import App from 'imports/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    el: 'body',
    replace: false,
    components: {
      App
    }
  });
});
```
App.vue component
    mkdir /imports/ui
    
Create /import/ui/App.vue 

```js
<template>
    <h1>{{ greeting }}</h1>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Hello World - My first Meteor-Vue-App"
    };
  }
};
</script>
```

    

    
