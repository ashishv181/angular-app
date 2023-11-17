import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit{
  ngOnInit(): void {
    console.log('init method of server component');
  }

  allowAddServer: boolean = false;
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverName: string = '';
  
  constructor(){
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000)
  }


  getServerStatus(){
    return this.serverStatus;
  }

  addServer(){
    this.serverStatus = 'online';
    console.log('add server clicked');
  }

  addServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log('inside add server name');
  }
}
