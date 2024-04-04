import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPageRoutingModule } from './input-routing.module';

import { InputPage } from './input.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [InputPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InputPageRoutingModule,
        ComponentsModule
    ]
})
export class InputPageModule {}
