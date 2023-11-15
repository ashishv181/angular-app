import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {

  allowAddServer: boolean = false;
  serverId: number = 10;
  serverStatus: string = 'offline';
  
  constructor(){
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000)
  }

  getServerStatus(){
    return this.serverStatus;
  }
}
