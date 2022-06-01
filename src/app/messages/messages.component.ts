import { Component, OnInit } from '@angular/core';
//below not needed for json
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //for Json read in front end =empty constructor below
  //The messageService property must be public because you're going to bind to it in the template.
  //Angular only binds to public component properties.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
