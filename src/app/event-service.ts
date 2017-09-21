import {Event} from './Event';
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/toPromise';
import {FormGroup} from '@angular/forms';

@Injectable()
export class EventService {
  user: Observable<firebase.User>;
  events: FirebaseListObservable<any[]>;
  selectedEvent: Event;
  event = new Event;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.events = af.list('/events', {
    });
  }
  selectEvent(event: Event){
    this.selectedEvent = event;
  }
  addEvent(addForm: FormGroup) {
    console.log(addForm.value);
    this.event.eventName = addForm.value.name;
    this.event.eventDescr = addForm.value.descr;
    this.events.push(this.event);
  }
  /*updateEvent(key: string, newText: string) {
    this.events.update(key, { text: newText });
  }
  */
  deleteEvent(key: string) {    
    this.events.remove(key); 
  }
  /*
  deleteEverything() {
    this.events.remove();
  }*/
  }