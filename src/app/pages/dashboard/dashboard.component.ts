import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/@service/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user;
  constructor(
    
  ) { }
  
  ngOnInit() {
    
  }

}
