import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})

export class RedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) { }

  
  ngOnInit() {
    console.log("this should be seen in the console if ngOnInit is working...");
    this.fetchcode();

  }

  fetchcode() {
    console.log(this.route.snapshot.paramMap.get('code'));
    console.log(this.route.snapshot.queryParamMap.get('code'));
  }

}
