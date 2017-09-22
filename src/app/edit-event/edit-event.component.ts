import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { EventService } from '../event-service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  editForm: FormGroup;
  constructor(private route: ActivatedRoute,private eventService: EventService, private fb: FormBuilder) { 
    this.createForm();
  }

  update(editForm: FormGroup, key: string){
    console.log(key);
    this.eventService.updateEvent(key, editForm);
    console.log(editForm);
  }

  ngOnInit() {
  }

  createForm(){
    this.editForm = this.fb.group(({
      name: new FormControl(this.eventService.selectedEvent.eventName),
      descr: new FormControl(this.eventService.selectedEvent.eventDescr)
    }));
  };
}
