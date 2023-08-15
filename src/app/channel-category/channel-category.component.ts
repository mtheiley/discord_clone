import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-channel-category',
  templateUrl: './channel-category.component.html',
  styleUrls: ['./channel-category.component.css']
})
export class ChannelCategoryComponent {
  @Input() channelName: String = "UNKNOWN CATEGORY";
}
