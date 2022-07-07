import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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
    this.fetchcode();
    console.log("this should be seen in the console if ngOnInit is working...");

  }

  fetchcode() {
    console.log(this.route.snapshot.paramMap.get('code'));
    //console.log(this.route.snapshot);
  }

}
