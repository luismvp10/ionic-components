import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SearchbarPageRoutingModule} from './searchbar-routing.module';

import {SearchbarPage} from './searchbar.page';
import {PipesModule} from '../../pipes/pipes.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchbarPageRoutingModule,
        PipesModule
    ],
    declarations: [SearchbarPage],

})
export class SearchbarPageModule {
}
