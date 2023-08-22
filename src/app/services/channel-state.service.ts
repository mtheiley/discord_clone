import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IChannel } from '../interfaces/app-channel-interface';

@Injectable({
  providedIn: 'root'
})
export class ChannelStateService {

  private messageSource = new BehaviorSubject<IChannel>({
    id: 0,
    name: "@channelName@",
    messageList: []
  });
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: IChannel) {
    this.messageSource.next(message);
  }
}
