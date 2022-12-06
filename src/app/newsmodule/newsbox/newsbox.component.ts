import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'newsbox',
  templateUrl: './newsbox.component.html',
  styleUrls: ['./newsbox.component.css']
})
export class NewsboxComponent implements OnInit {

  @Input() img:string = 'https://media.istockphoto.com/id/1128119311/photo/cubes-with-the-word-news-on-a-newspaper.jpg?s=612x612&w=0&k=20&c=mhxiSEiuOlqqNFpnZ8TqyOCBUJ3DiR_AMRCv-vzdiO4=';
  @Input() name:string= '';
  @Input() category:string= '';
  constructor() { }

  ngOnInit(): void {
  }

}
