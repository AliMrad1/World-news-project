import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/classes/service/shared.service';

@Component({
  selector: 'app-addnewsresponse',
  templateUrl: './addnewsresponse.component.html',
  styleUrls: ['./addnewsresponse.component.css']
})
export class AddnewsresponseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private routeN:Router, private shared:SharedService) { }

  response_msg?:string | null = "";
  redirect : string = "";
  endpoint_link :string ="";
  loading: boolean = true;


  ngOnInit(): void {

    setTimeout(() => {
      this.route.paramMap.subscribe(params => {
        
        console.log(params)
         
          this.response_msg = this.shared.sharedData;
          this.loading = false;  

        if(this.response_msg == null){
            this.redirect = "Redirect Back to Re-try to Add News";
            this.endpoint_link = "news/new"
        }
        else{
            this.redirect = "Redirect Back to Home Page";
            this.endpoint_link = "/";
        }
      
      
      });
    }, 2000);  
  }

  navigate(){
     this.routeN.navigate([`${this.endpoint_link}`]);
  }
}
