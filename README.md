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
Add App.vue component

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
## Configuring Vue router

Edit meteor-vue-app/client/configs/router.config.js

```js
import {
    RouterFactory,
    nativeScrollBehavior
} from 'meteor/akryum:vue-router2'

import routerDefs from 'client/routes.js'

const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior
})

RouterFactory.configure(factory => {
    factory.addRoutes(routerDefs)
})

export default routerFactory

```
Change client/main.htlm
```js
<body>
    <app></app>
</body>
```

## Installing and using the router

Edit client/main.js

```js
import {
  Meteor
} from "meteor/meteor";
import Vue from "vue";

import AppComponent from '/imports/ui/App.vue'

import routerFactory from '/client/configs/router.config'

Meteor.startup(() => {
  const router = routerFactory.create()

  new Vue({
    router,
    render: h => h(AppComponent)
  }).$mount('app')
})
```
Defining the routes
meteor-vue-app/client/router.js
```js
import HomeComponent from '/imports/ui/Home.vue'
import NotFoundComponent from '/imports/ui/NotFound.vue'

const routes = [{
        path: '/',
        component: HomeComponent
    },
    {
        path: '*',
        component: NotFoundComponent
    }
]

export default routes
```

Adding the router-view component
Edit /imports/ui/App.vue

```js
<template>
<div>
  <router-view></router-view>
</div>
</template>

<<style lang="stylus">
  body
    background-color #212121

    p
      color white 
      padding 20px
</style>
```
Moving app to /imports/ui/Home.vue

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
      greeting: 'Hello World - Meteor-Vue-App',
      counter: 0
    }
  },
  methods: {
    count() {
      this.counter++
    }
  }
}
</script>
```
Creating a 404 route component

```js
<template>
  <div>
    404 Oops!
  </div>
</template>

```
## Adding vuetify

    meteor npm i vuetify

Adding vuetify to main Vue instance
Edit client/main.js
```js
import {
  Meteor
} from "meteor/meteor";
import Vue from "vue";
import Vuetify from 'vuetify'

import AppComponent from '/imports/ui/App.vue'

import routerFactory from '/client/configs/router.config'

Meteor.startup(() => {
  const router = routerFactory.create()

  Vue.use(Vuetify)

  new Vue({
    router,
    render: h => h(AppComponent)
  }).$mount('app')
})
```
Adding the related styles
Edit client/main.html
```js
<head>
    <link rel="stylesheet" href="fonts/material-icons/material-icons.css">
</head>

<body>
    <app></app>
</body>
```

Edit client/main.js
```js
import {
  Meteor
} from "meteor/meteor";
import Vue from "vue";


import AppComponent from '/imports/ui/App.vue'

import routerFactory from '/client/configs/router.config'
import '/client.configs/vuetify.config'

Meteor.startup(() => {
  const router = routerFactory.create()

  new Vue({
    router,
    render: h => h(AppComponent)
  }).$mount('app')
})
```
    
