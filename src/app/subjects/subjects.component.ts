import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let s: Subject<number> = new Subject<number>();
    s.subscribe(n => console.log(n));
    s.next(1);
    s.next(2);
    s.next(3);
    s.next(4);
    s.complete();
  }

}
