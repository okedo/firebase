import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { EventService } from '../event-service';
import {Router} from '@angular/router';
import { Event} from '../event'

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  eventsArray : Event[];
  constructor(private eventService: EventService, private router: Router){
  }
  delete(key: string){
    this.eventService.deleteEvent(key);
  }
  edit(event){
    this.router.navigateByUrl('edit-event');
    this.eventService.selectedEvent=event;
    console.log(this.eventService.selectedEvent);
  }
  ngOnInit() {
  /*  this.eventsArray = this.eventService.getAll();
    console.log(this.eventService);*/
  }

}
