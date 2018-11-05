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
    meteor add akryum:vue-component
    meteor add akryum:vue-stylus
    meteor add akryum:vue-router2

Remove Blaze support

    meteor remove blaze-html-templates
    
### Add more package

    meteor add static-html akryum:vue akryum:vue-component session
    
Removing the Blaze “demo” app (/client/main.css, main.html)


## Installing Vue through npm

    meteor npm i vue@2.5.17

## Implements Vue

Edit client/main.js file

```js
import {Meteor} from "meteor/meteor";
import Vue from "vue";

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
<div>
    <h1>{{ greeting }}!</h1>

    <button @click="count()">Click me</button>

    <p>
      You have clicked: {{ counter }} times.
    </p>

</div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Hello World - Meteor-Vue-App",
      counter: 0
    };
  },
  methods: {
    count() {
      this.counter++;
    }
  }
};
</script>

```


    

    
