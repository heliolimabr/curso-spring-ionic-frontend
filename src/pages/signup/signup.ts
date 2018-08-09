import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from '../../../node_modules/ionic-angular/components/app/menu-controller';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup : FormGroup

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
      this.formGroup = this.formBuilder.group({
        nome: ['Fulano', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
        email: ['fulano@gmail.com', [Validators.required, Validators.email]],
        tipo: ['1', [Validators.required]],
        cpfOuCnpj: ['38554651006', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha: ['123', [Validators.required]],
        logradouro: ['Rua Tal', [Validators.required]],
        numero: ['100', [Validators.required]],
        complemento: ['Apto 3', []],
        bairro: ['Centro', []],
        cep: ['100202111', [Validators.required]],
        telefone1: ['79993248954', [Validators.required]],
        telefone2: ['', []],
        telefone3: ['', []],
        estadoId: [null, [Validators.required]],
        cidadeId: [null, [Validators.required]]
      });
  }


  signupUser(){
    
  }

  
}
