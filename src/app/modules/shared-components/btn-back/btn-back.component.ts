import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-back',
  templateUrl: './btn-back.component.html',
  styleUrls: ['./btn-back.component.scss'],
})
export class BtnBackComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  goBack() {
    window.history.back()
  }
  
}
