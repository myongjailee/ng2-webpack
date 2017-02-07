/**
 * Created by mlee on 2/5/2017.
 */
import {Routes, RouterModule} from '@angular/router';
// import {AuthenticationComponent} from "./auth/authentication.component";
// import {KmcAccountComponent} from "./kmcaccount/kmcaccount.component";
import {HomeComponent} from "./home/home.component";
import {TestComponent} from "./home/test.component";
// import {TestComponent} from "./home/test.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'}
    , {path: 'home', component: HomeComponent}
    , {path: 'test', component: TestComponent}
    // , {path: 'auth', component: AuthenticationComponent}
    // ,{ path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
    // , {
    //     path: 'kmcaccount',
    //     component: KmcAccountComponent,
    //     loadChildren: './kmcaccount/kmcaccount.module#KmcAccountModule'
    // }
];

export const routing = RouterModule.forRoot(APP_ROUTES);