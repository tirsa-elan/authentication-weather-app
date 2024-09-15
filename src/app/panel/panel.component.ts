import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  providers: [AuthService]
})
export class PanelComponent implements OnInit {

  userFullname=localStorage.getItem('fullName')
  constructor(private authService: AuthService) { }
 
  ngOnInit() {
  
  }

}
