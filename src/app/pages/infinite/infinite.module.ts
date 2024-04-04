import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitePageRoutingModule } from './infinite-routing.module';

import { InfinitePage } from './infinite.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [InfinitePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfinitePageRoutingModule,
        ComponentsModule
    ]
})
export class InfinitePageModule {}
