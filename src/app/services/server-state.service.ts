import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IServer } from '../interfaces/app-server-interface';

@Injectable({
  providedIn: 'root'
})
export class ServerStateService {

  private messageSource = new BehaviorSubject<IServer>({
    id: 0,
    name: "@ServerName@",
    imageSource: "",
    categoryList: []
  });
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: IServer) {
    this.messageSource.next(message);
  }
}
