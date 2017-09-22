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
  events: FirebaseListObservable<any[]>;
  eventsArr: Event[];
  selectedEvent: Event;
  event1 = new Event();
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.events = af.list('/events', {
    });
    this.events.subscribe();
  }
  /*getAll(): Event[]{
    this.events.subscribe(arr=>this.eventsArr=arr)
    console.log(this.eventsArr);
    return this.eventsArr;
  }*/
  selectEvent(event1: Event){
    this.selectedEvent = event1;
  }
  addEvent(addForm: FormGroup) {
    console.log(addForm.value);
    this.event1.eventName = addForm.value.name;
    this.event1.eventDescr = addForm.value.descr;
    this.events.push(this.event1);
  }
  updateEvent(key: string, editForm: FormGroup) {
    this.event1.eventName = editForm.value.name;
    this.event1.eventDescr = editForm.value.descr;
    this.events.update(key, this.event1);
  }
  
  deleteEvent(key: string) {    
    this.events.remove(key); 
  }
  /*
  deleteEverything() {
    this.events.remove();
  }*/
  }