import {
    RouterFactory,
    nativeScrollBehavior
} from 'meteor/akryum:vue-router2'

import routerDefs from '/client/routes.js'

const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior
})

RouterFactory.configure(factory => {
    factory.addRoutes(routerDefs)
})

export default routerFactory