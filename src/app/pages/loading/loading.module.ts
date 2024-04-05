import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingPageRoutingModule } from './loading-routing.module';

import { LoadingPage } from './loading.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
    declarations: [LoadingPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoadingPageRoutingModule,
        ComponentsModule
    ]
})
export class LoadingPageModule {}
