import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        IonicPageModule.forChild(HomePage)
    ],
    exports: [
        HomePage
    ]
})
export class HomePageModule{};