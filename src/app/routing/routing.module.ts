import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerSetupComponent} from '../player-setup/player-setup.component';
import {CharacterPageComponent} from '../character-page/character-page.component';
import {AddPlayerComponent} from '../add-player/add-player.component';
import {SelectCharactersComponent} from '../select-characters/select-characters.component';
import {ViewGamesComponent} from '../view-games/view-games.component';
import {PlayerCartComponent} from '../player-cart/player-cart.component';
import {ReviewOrderComponent} from "../review-order/review-order.component";
import {PlaceOrderComponent} from "../place-order/place-order.component";
import {SplashComponent} from "../splash/splash.component";

const routes: Routes = [
    {
        path: '',
        component: SplashComponent,
        pathMatch: 'full'
    },
    {
        path: 'devour',
        component: SelectCharactersComponent,
        pathMatch: 'full'
    },
    {
        path: 'discover',
        component: ViewGamesComponent,
        pathMatch: 'full'
    },
    {
        path: 'player',
        redirectTo: '/player/setup',
        pathMatch: 'full'
    },
    {
        path: 'player/add/:number',
        component: AddPlayerComponent,
        pathMatch: 'full'
    },
    {
        path: 'player/cart',
        component: PlayerCartComponent,
        pathMatch: 'full'
    },
    {
        path: 'player/setup',
        component: PlayerSetupComponent,
        pathMatch: 'full'
    },
    {
        path: 'character/:name',
        component: CharacterPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'review',
        component: ReviewOrderComponent,
        pathMatch: 'full'
    },
    {
        path: 'success',
        component: PlaceOrderComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/player/setup',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutingModule {
}
