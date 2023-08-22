import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() content: String = "empty message";
  @Input() time: String = "@DATE@";
  @Input() user: String = "@USER@";
}
