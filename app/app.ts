// app.ts
import { module, element, bootstrap } from 'angular';
import '@uirouter/angularjs';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../app/home/home.component';
import { McDatesComponent} from './mc-dates/mc-dates.component';
import { UserComponent } from '../app/user/user.component';
import { UserService } from '../app/services/user.services';
require('angular-moment');

import './app.less';

export let app = module('app', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'angularMoment'
])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider.state({
            name: 'app',
            url: '/app',
            component: AppComponent.NAME
        }).state(
            {
                name: 'app.home',
                url: '/home',
                component: HomeComponent.NAME
            }).state(
            {
                name: 'app.user',
                url: '/user?id',
                component: UserComponent.NAME,
            });

        $urlRouterProvider.otherwise('/app');
    }])
    .component(AppComponent.NAME, new AppComponent())
    .component(HomeComponent.NAME, new HomeComponent())
    .component(UserComponent.NAME, new UserComponent())
    .component(McDatesComponent.NAME, new McDatesComponent())
    .service(UserService.NAME, UserService);
    // .constant('moment', require('moment-timezone'));
element(document).ready( () => {
    bootstrap(document, ['app']);
});
