import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userSelected: any;
  firstName: any;
  lastName: any;
  job: any;
  email: any;


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  /* this.route.queryParams.subscribe(params => {
        console.log(JSON.parse(params['user']));
        this.userSelected =JSON.parse(params['user'])
      }
    ); */
    this.getUserSelected();
}

getUserSelected(){
  this.route.queryParams.subscribe(params => {
    console.log(JSON.parse(params['user']));
    this.userSelected =JSON.parse(params['user'])
    this.firstName = this.userSelected['firstName'];
    this.lastName = this.userSelected['lastName'];
    this.job = this.userSelected['job'];
    this.email = this.userSelected['email'];
  }
  );
}

edit(form: NgForm) {
  console.log(form.value)
  /* this.alertService.showLoading(); */
 /*  this.authService
    .login(form.value.email, form.value.password)
      .subscribe( data => {
        if(data){
          this.alertService.hideLoading();
          console.log(data);
          this.alertService.presentToast('Connexion reussie', 'bottom');
        }
    },
    error => {
      console.log(error);
    },
    () => {
      this.dismissLogin();
      this.navCtrl.navigateRoot('/tabs');
    }
  ); */
}

}
