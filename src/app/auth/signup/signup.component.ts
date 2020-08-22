import { Component, OnInit } from '@angular/core';
import  { AbstractControl,FormGroup, FormControl, Validators}from '@angular/forms';
import {AuthService} from '../../services/auth.service';
@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	regForm:FormGroup;
	successMessage:string;
	constructor(private _authser:AuthService) {
		this.regForm = new FormGroup({
			email:new FormControl(null, Validators.email),
			username:new FormControl(null, Validators.required ),
			password:new FormControl(null, Validators.required),
			cnfPass:new FormControl(null,this.passValidator)
		});
		this.regForm.controls.password.valueChanges
		.subscribe((x)=>{
			this.regForm.controls.cnfPass.updateValueAndValidity()
		})
	}

	ngOnInit(): void {
	}

	passValidator(control:AbstractControl){
		if(control && (control.value!=null||control.value!=undefined)){
			const cnfPassValue = control.value
			const passControl = control.root.get('password')
			if(passControl){
				const passValue = passControl.value;
				if(passValue !== cnfPassValue || passValue === ''){
					return {
						isError:true
					};
				}
			}
		}
		return null;
	}

	isValid(controlName){
		return this.regForm.get(controlName).invalid && this.regForm.get(controlName).touched;
	}

	register(){
		console.log(this.regForm.value)
		this._authser.submitRegister(this.regForm.value)
		.subscribe((data)=>{
			this.successMessage = 'Registration Success'
		},(err)=>this.successMessage = 'some error')
	}
}
