import { JSONPlaceholderService } from './services/jsonplaceholder.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gettingdata';
  data:Array<any>

  constructor(private JSONPlaceholder: JSONPlaceholderService){
    this.data = new Array<any>()
  }
    getDataFromAPI() {
      this.JSONPlaceholder.getData().subscribe((data) => {
        console.log(data)
        this.data = data

      }); 
      
    }

  }

