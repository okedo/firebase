import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventsComponent } from './all-events/all-events.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { TestComponent } from './test/test.component';
import {PageComponent} from './page/page.component';

const routes: Routes = [
  {path: '', redirectTo: 'test', pathMatch: 'full'},
    {path: 'test', component: TestComponent},
    {path: 'edit-event', component: EditEventComponent},
    {path: 'page', component: PageComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class RoutingModule {
  }