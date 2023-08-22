import { Component, OnInit } from '@angular/core';
import { IServer } from '../interfaces/app-server-interface';
import { ServerStateService } from '../services/server-state.service';

@Component({
  selector: 'app-channel-bar',
  templateUrl: './channel-bar.component.html',
  styleUrls: ['./channel-bar.component.css']
})
export class ChannelBarComponent implements OnInit {
  currentServer : IServer = {
    id: 0,
    name: "@ServerName@",
    imageSource: "",
    categoryList: []
  };

  constructor(private serverState: ServerStateService) {

  }

  ngOnInit() {
    this.serverState.currentMessage.subscribe(message => this.currentServer = message);
  }
}
