import { Component } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent {
  messageList: {user: String, time: String, message: String}[] = [
    {user: "mtheiley", time: "Today at 21:03", message: "Hello Kelly"},
    {user: "kellyzh", time: "Today at 21:10", message: "Hi Matt!"},
    {user: "mtheiley", time: "Today at 21:12", message: "I can now add messages to my discord clone. They even allow for word wrapping so that\
    they don't overflow out of the page. How cool is that?????"},
    {user: "kellyzh", time: "Today at 21:24", message: "That is pretty cool, have to admit"},
    {user: "mtheiley", time: "Today at 21:03", message: "Hello Kelly"},
    {user: "kellyzh", time: "Today at 21:10", message: "Hi Matt!"},
    {user: "mtheiley", time: "Today at 21:12", message: "I can now add messages to my discord clone. They even allow for word wrapping so that\
    they don't overflow out of the page. How cool is that?????"},
    {user: "kellyzh", time: "Today at 21:24", message: "That is pretty cool, have to admit"},
    {user: "mtheiley", time: "Today at 21:03", message: "Hello Kelly"},
    {user: "kellyzh", time: "Today at 21:10", message: "Hi Matt!"},
    {user: "mtheiley", time: "Today at 21:12", message: "I can now add messages to my discord clone. They even allow for word wrapping so that\
    they don't overflow out of the page. How cool is that?????"},
    {user: "kellyzh", time: "Today at 21:24", message: "That is pretty cool, have to admit"},
  ]
}
