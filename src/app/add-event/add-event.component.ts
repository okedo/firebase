import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventService } from '../event-service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  addForm: FormGroup;
  constructor(private eventService: EventService, private fb: FormBuilder) {
this.createForm();
}
createForm(){
  this.addForm = this.fb.group(({
    name: new FormControl(''),
    descr: new FormControl('')
  }));
};

save(addForm: FormGroup){
  this.eventService.addEvent(addForm);
}

  ngOnInit() {
  }

}
