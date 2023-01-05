import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms'
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../services/modal.service';
import { AlertComponent } from './alert/alert.component';
import { DotsComponent } from './dots/dots.component';
import { DotsLabelComponent } from './dots-label/dots-label.component';


@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    DotsComponent,
    DotsLabelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    DotsComponent,
    DotsLabelComponent
  ]
  // ,  providers:[    ModalService  ]
})
export class SharedModule { }