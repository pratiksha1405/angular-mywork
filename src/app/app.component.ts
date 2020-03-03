import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  UserName:any;
  name="LOGIN PAGE"
  myFun(event){
    var txt;
    if (confirm("Press a button!")) {
  window.location.href='app2.component.ts';
} else {
  alert( "You pressed Cancel!");
}

  }
log(x){
  console.log(x);
}

}
