import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  result: any;

  constructor() { }

  ngOnInit() { }

  onClickSubmit(data) {
    let one = data.version1;
    let two = data.version2;
    let v1 = data.version1.split('.');
    let v2 = data.version2.split('.');
    if (v1.length < v2.length) {
      v1.push(0);
    }
    else if (v1.length > v2.length) {
      v2.push(0);
    }
    const k = Math.min(v1.length, v2.length);
    for (let i = 0; i < k; ++i) {
      v1[i] = parseInt(v1[i], 10);
      v2[i] = parseInt(v2[i], 10);
      if (v1[i] > v2[i]) {
        this.result = 1;
        break;
      }
      if (v1[i] < v2[i]) {
        this.result = -1;
        break;
      }
      if (v1[i] == v2[i]) {
        this.result = 0;
        continue;
      }
    }

    if (this.result == 1) alert(one + " is before " + two)
    else if (this.result == -1) alert(one + " is after " + two)
    else if (this.result == 0) alert(one + " is equal to " + two)
  }
}
