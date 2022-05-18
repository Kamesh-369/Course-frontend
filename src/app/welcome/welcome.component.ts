import { Component, OnInit } from '@angular/core';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  category:any=[];
  

  constructor(public verifyService: VerifyService) { }


  

  ngOnInit(): void {
  }

}
