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

  
  ngOnInit(): void {
    this.fetchcode();
    console.log("does this work?"); //DELETE IN FINAL VERSION
    console.log(this.route.snapshot.queryParams);
  }

  fetchcode(): any {
    console.log(this.route.snapshot.paramMap.get('code'));
  }

}
