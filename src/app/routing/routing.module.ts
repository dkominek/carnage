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
    },
    {
        path: 'devour',
        component: SelectCharactersComponent,
    },
    {
        path: 'discover',
        component: ViewGamesComponent,
    },
    {
        path: 'player', redirectTo: '/player/setup', pathMatch: 'full'
    },
    {
        path: 'player/add/:number',
        component: AddPlayerComponent,
    },
    {
        path: 'player/cart',
        component: PlayerCartComponent,
    },
    {
        path: 'player/setup',
        component: PlayerSetupComponent,
    },
    {
        path: 'character/:name',
        component: CharacterPageComponent,
    },
    {
        path: 'review',
        component: ReviewOrderComponent,
    },
    {
        path: 'success',
        component: PlaceOrderComponent,
    },
    { path: '', redirectTo: '/player/setup', pathMatch: 'full' },
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
