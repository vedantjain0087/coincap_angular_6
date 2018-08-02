import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  //socket: SocketIOClient.Socket;
  socket = io.connect('https://coincap.io');
  dataset : number[] = [];
  url = "https://coincap.io/front";

  constructor(private http : HttpClient) {
    

    this.socket.on('trades', function (tradeMsg) {
      this.http.get(this.url).subscribe(data => {
        this.dataset = data;
      });
    }.bind(this));

   }



  ngOnInit() {
  }

}
