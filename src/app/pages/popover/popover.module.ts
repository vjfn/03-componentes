import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [PopoverPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PopoverPageRoutingModule,
        ComponentsModule
    ]
})
export class PopoverPageModule {}
