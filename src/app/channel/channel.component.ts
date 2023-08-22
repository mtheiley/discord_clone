import { Component, Input } from '@angular/core';
import { ChannelStateService } from '../services/channel-state.service';
import { IChannel } from '../interfaces/app-channel-interface';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent {
  @Input() channel: IChannel = {
    id: 0,
    name: "",
    messageList: []
  }

  constructor(private channelState: ChannelStateService) {

  }

  setChannel() {
    this.channelState.changeMessage(this.channel);
  }
}
