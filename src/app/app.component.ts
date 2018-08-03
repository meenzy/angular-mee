import { Component, OnInit, Injector } from "@angular/core";
import { GovService } from '../providers/api/gov.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private readonly injector: Injector) {}
  
  private govService: GovService = this.injector.get(GovService);
  public title :string = 'The Dashboard Data';
  public data: string = 'default data';
  
  ngOnInit(): void {
    this.getGovDataOnScreen();
  }
  public getGovDataOnScreen() {
    this.data = this.govService.getGovJson();
  }
}