import { Component } from '@angular/core';
import { ChannelStateService } from '../services/channel-state.service';
import { IChannel } from '../interfaces/app-channel-interface';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent {

  currentChannel: IChannel = {
    id: 0,
    name: "@ChannelName@",
    messageList: [] 
  }

  constructor(private channelState: ChannelStateService) {

  }

  ngOnInit() {
    this.channelState.currentMessage.subscribe(message => this.currentChannel = message);
  }
}
