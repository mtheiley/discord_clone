import { Component, Input } from '@angular/core';
import { ICategory } from '../interfaces/app-category-interface';

@Component({
  selector: 'app-channel-category',
  templateUrl: './channel-category.component.html',
  styleUrls: ['./channel-category.component.css']
})
export class ChannelCategoryComponent {
  @Input() category: ICategory = {
    id: 0,
    name: "@CategoryName@",
    channelList: []
  };
}
