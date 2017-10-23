import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerSetupComponent} from '../player-setup/player-setup.component';
import {CharacterPageComponent} from '../character-page/character-page.component';
import {AddPlayerComponent} from '../add-player/add-player.component';

const routes: Routes = [
    {
        path: '',
        component: PlayerSetupComponent,
    },
    {
        path: 'player/add',
        component: AddPlayerComponent,
    },
    {
        path: 'character/:name',
        component: CharacterPageComponent,
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
