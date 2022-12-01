import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'homeblockcategory',
  templateUrl: './homeblockcategory.component.html',
  styleUrls: ['./homeblockcategory.component.css']
})
export class HomeblockcategoryComponent implements OnInit {
@Input() category:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
