import { Component } from '@angular/core';
import { VerifyService } from './services/verify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-frontend';

  constructor(private verifyService: VerifyService) { }
}
