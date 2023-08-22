import { Component } from '@angular/core';
import { IServer } from '../interfaces/app-server-interface';

@Component({
  selector: 'app-server-bar',
  templateUrl: './server-bar.component.html',
  styleUrls: ['./server-bar.component.css']
})
export class ServerBarComponent {
  serverList : IServer[] = [
    {
      id: 0,
      name: "Vi Study",
      imageSource: "",
      categoryList: [{
            id: 0,
            name: "TEXT CHANNELS",
            channelList: [{
                id: 0,
                name: "general",
                messageList: [{
                    id: 0,
                    user: {
                        id: 0,
                        name: "mtheiley",
                        imageSource: ""
                      },
                    time: "12:02",
                    content: "hello",
                    type: "text"
                  }
                ]
              }
            ]
          }
        ]},
      {
        id: 1,
        name: "CS Club",
        imageSource: "",
        categoryList: []
      }
  ]
}
