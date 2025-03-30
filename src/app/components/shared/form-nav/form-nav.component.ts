import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-nav',
  templateUrl: './form-nav.component.html',
  styleUrls: ['./form-nav.component.css']
})
export class FormNavComponent implements OnInit {
  @Input() title?: string;
  @Input() formType?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
