import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() test:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
