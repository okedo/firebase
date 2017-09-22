import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { EventService } from '../event-service';
import {Router} from '@angular/router';
import { Event} from '../event'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  events$: FirebaseListObservable<any[]>;
  constructor(private eventService: EventService, private af : AngularFireDatabase, private router: Router) { }

  ngOnInit() {
    this.events$ = this.af.list('/events');
    console.log(this.events$);
  }
  delete(key: string){
    this.eventService.deleteEvent(key);
  }
  edit(event){
    this.router.navigateByUrl('edit-event');
    this.eventService.selectedEvent=event;
    console.log(this.eventService.selectedEvent);
  }
}

