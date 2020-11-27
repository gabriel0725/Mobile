import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss'],
})

export class CadastroPage implements OnInit {
  public formulariozinho = {
    username: '',
    email: '',
    myDate: '',
    cep: '',
    number: '',
    complement: '',
    phone: '',
    senha: '',
    }

  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  // register: boolean;
  // login: boolean;
  storage: any;

  constructor(public formBuilder: FormBuilder) { }

  // exibirResgistrar(){
  //   this.login = false;
  //   this.register = true;
  // }
  // exibirLogin(){
  //   this.login = true;
  //   this.register = false;
  // }
  ngOnInit() {
    // this.ionicForm = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.minLength(2)]],
    //   email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    //   dob: [this.defaultDate],
    //   mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //   cep: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //   num: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    //   complemento: ['', [Validators.required, Validators.minLength(2)]]
    // })
  }

  saveData(){
    this.storage.set('key', this.formulariozinho);
   
  }

  loadData()
{
  this.storage.get(this.key).then((val) => {
    console.log('key', val);
   
  });
}
  key(key: any) {
    throw new Error('Method not implemented.');
  }
  public logForm(){
    console.log("informaçoes do cadastro: \n nome: " + this.formulariozinho)
  
  }
  

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }
}