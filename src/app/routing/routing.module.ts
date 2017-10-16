import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerSetupComponent } from '../player-setup/player-setup.component';
import {CharacterPageComponent} from "../character-page/character-page.component";

const routes: Routes = [
    {
        path: '',
        component: PlayerSetupComponent,
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
export class RoutingModule { }
