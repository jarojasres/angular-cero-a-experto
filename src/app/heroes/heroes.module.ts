import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './component/hero/hero.component';
import { ListComponent } from './component/list/list.component';



@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule { }
