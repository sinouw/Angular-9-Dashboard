import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';

import { EventsListComponent } from './events-list/events-list.component';
import { EventsAddComponent } from './events-add/events-add.component';
import { EventsEditComponent } from './events-edit/events-edit.component';

@NgModule({
  declarations: [EventsListComponent,EventsAddComponent,EventsEditComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
