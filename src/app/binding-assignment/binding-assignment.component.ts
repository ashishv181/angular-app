import { Component } from "@angular/core";

@Component({
    selector: 'binding-assignment',
    templateUrl:'./binding-assignment.component.html',
    styleUrl: './binding-assignment.component.css'
})

export class BindingAssignmentComponent{
    userName: string = '';
    isUserNameEmpty: boolean = this.checkEmpty();

    checkEmpty() : boolean {
        return this.userName === '';
    }

    resetUsername(){
        this.userName = '';
        console.log('user name reset');
        this.isUserNameEmpty = true;
    }

    getUserName(){
        console.log('username : ', this.userName);
    }

}