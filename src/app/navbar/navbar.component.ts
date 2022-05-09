import { Component, OnInit } from '@angular/core';
import { VerifyService } from '../services/verify.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public verifyService: VerifyService) { }

  ngOnInit(): void {
  }

}
