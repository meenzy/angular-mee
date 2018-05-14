import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent{
  title :string = 'The Dashboard Data binding Branch 1';
  branch1 : string = 'branch 1 string';
  branch2 : string = 'branch 2 code';
  code : string = '200';
}