import { Component, Input } from '@angular/core';
import { IServer } from '../interfaces/app-server-interface';
import { ServerStateService } from '../services/server-state.service';

@Component({
  selector: 'app-server-button',
  templateUrl: './server-button.component.html',
  styleUrls: ['./server-button.component.css']
})
export class ServerButtonComponent {
  @Input() server: IServer = {
    id: 0,
    name: "",
    imageSource: "",
    categoryList: []
  }

  constructor(private serverState: ServerStateService) {

  }

  onButtonClick() {
    this.serverState.changeMessage(this.server);
  }
}
