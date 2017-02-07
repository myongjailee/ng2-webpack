"use strict";
/**
 * Created by mlee on 2/5/2017.
 */
var router_1 = require('@angular/router');
// import {AuthenticationComponent} from "./auth/authentication.component";
// import {KmcAccountComponent} from "./kmcaccount/kmcaccount.component";
var home_component_1 = require("./home/home.component");
var test_component_1 = require("./home/test.component");
// import {TestComponent} from "./home/test.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'test', component: test_component_1.TestComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
