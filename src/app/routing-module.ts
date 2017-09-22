import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventsComponent } from './all-events/all-events.component';
import { EditEventComponent } from './edit-event/edit-event.component'

const routes: Routes = [
    {path: '', redirectTo: 'all-events', pathMatch: 'full'},
    {path: 'all-events', component: AllEventsComponent},
    {path: 'edit-event', component: EditEventComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class RoutingModule {
  }