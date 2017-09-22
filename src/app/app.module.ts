import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AllEventsComponent } from './all-events/all-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EventService} from './event-service';
import { EditEventComponent } from './edit-event/edit-event.component';
import { RoutingModule } from './routing-module';
import { TestComponent } from './test/test.component';
import { PageComponent } from './page/page.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA5ZBKNIuJuy8Z3_zqILjayIZl_KAAi4Q8",
  authDomain: "what-to-do-90661.firebaseapp.com",
  databaseURL: "https://what-to-do-90661.firebaseio.com",
  projectId: "what-to-do-90661",
  storageBucket: "what-to-do-90661.appspot.com",
  messagingSenderId: "921286413224"
};

@NgModule({
  declarations: [
    AppComponent,
    AllEventsComponent,
    AddEventComponent,
    EditEventComponent,
    TestComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RoutingModule,
  ],
  providers: [AngularFireAuth, AngularFireDatabase, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
