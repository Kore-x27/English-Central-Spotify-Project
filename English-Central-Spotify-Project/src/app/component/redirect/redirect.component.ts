import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';


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

  }

  fetchcode() {
    // console.log(this.route.snapshot.paramMap.get('code'));
    console.log(this.route.snapshot);
  }

}
