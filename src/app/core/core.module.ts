import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsRepository } from './repository/utils/utils.repository';
import { UtilsWebRepository } from '../data/repository/utils/utils-web.repository';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [],
    providers: [

        { provide: UtilsRepository, useClass: UtilsWebRepository },

    ]
})

export class CoreModule { }
