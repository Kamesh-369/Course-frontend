import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Router }from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-use-case-four',
  templateUrl: './use-case-four.component.html',
  styleUrls: ['./use-case-four.component.css']
})
export class UseCaseFourComponent implements OnInit {

  category:any=[];
  url!: any;
  securl:any;
  paymentHandler: any=null;
  payment:boolean=false;
  isPresent:boolean = false;

  constructor(private _categoryservice:CategoriesService,
    private route: ActivatedRoute, private router:Router,
    private toastr: ToastrService) 
    {
      this.route.params.subscribe(value => {
        this.url=value["category"]
        this.securl=value["course"]
        this._categoryservice
        .getCourse(this.url,this.securl).subscribe((result:any)=>{this.category=result});},
        (err =>{
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              console.log(err);
              this.router.navigate(["/login"])
            }
          }
        } )
       
    ) }

    enrollCourse(){
      const Role = localStorage. getItem("token");
      let jwtData = Role!.split('.')[1]
      let decodedJwtJsonData = atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      let email  = decodedJwtData.email;
      console.log(email , this.securl);

      this._categoryservice.enrollCourse(email,this.securl)
      .subscribe((result:any)=>{console.log(result)
        this.toastr.success('Enrolled Successfuly', '', {
          timeOut: 2000,
          progressBar: true,
          progressAnimation: 'decreasing',
        });
      });
    
    }

    // Addons Payment Gateway


    initializePayment(amount: number) {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51L2pazSGyYnCibtI3LOVlwY9kW9QyadslKCkZUx3bqyR2K9kk7fiayEtRZJABUd7PJ82ScSRNG5QsMfEAEDCLM1b00e4W7ZQR7',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log({stripeToken})
         // alert('Stripe token generated!');
          this.isPresent= true; 
          cours();
          
        }
      });

     const cours=()=>{

      const Role = localStorage. getItem("token");
      let jwtData = Role!.split('.')[1]
      let decodedJwtJsonData = atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      let email  = decodedJwtData.email;
      console.log(email , this.securl);

      this._categoryservice.enrollCourse(email,this.securl)
      .subscribe((result:any)=>{console.log(result)
        this.toastr.success('Enrolled Successfuly', '', {
          timeOut: 2000,
          progressBar: true,
          progressAnimation: 'decreasing',
        });
      });
        
      }
    
      paymentHandler.open({
        name: 'Skillup',
        description: 'Pay For the course',
        amount: amount * 100
      });
      console.log(this.isPresent);
      if(this.isPresent){
        console.log(this.isPresent);
        this.enrollCourse();
      }
    }
    
    invokeStripe() {
      
      if(!window.document.getElementById('stripe-script')) {
        const script = window.document.createElement("script");
        script.id = "stripe-script";
        script.type = "text/javascript";
        script.src = "https://checkout.stripe.com/checkout.js";
        script.onload = () => {
          this.paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51L2pazSGyYnCibtI3LOVlwY9kW9QyadslKCkZUx3bqyR2K9kk7fiayEtRZJABUd7PJ82ScSRNG5QsMfEAEDCLM1b00e4W7ZQR7',
            locale: 'auto',
            token: function (stripeToken: any) {
              console.log(stripeToken)
             // alert('Payment has been successfull!');
            //localStorage.setItem('stripeToken', stripeToken );  
                         
            }
          });
        }
        window.document.body.appendChild(script);
      }
      

    }

    
  

  ngOnInit(): void { this.invokeStripe(); }

}