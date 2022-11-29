import { Component, OnInit } from '@angular/core';
import { Team } from '../classes/Models/Team'; 
import { WorldCupService } from '../classes/service/world-cup.service'; 

@Component({
  selector: 'newsmodule',
  templateUrl: './newsmodule.component.html',
  styleUrls: ['./newsmodule.component.css']
})
export class NewsmoduleComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

}