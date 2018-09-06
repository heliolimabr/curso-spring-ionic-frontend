import { EnderecoDTO } from './../../models/endereco.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua Quinze",
        numero: "29",
        complemento: "Apto 290",
        bairro: "São Pedro",
        cep: "49000000",
        cidade: {
          id: "1",
          nome: "Uberlândia",
          estado: {
            id: "1",
            nome: "Minas Gerais"
          }
        }
      },
      {
        id: "2",
        logradouro: "Rua Jão",
        numero: "20",
        complemento: "Apto 290",
        bairro: "São Lucas",
        cep: "49140000",
        cidade: {
          id: "3",
          nome: "Sâo Paulo",
          estado: {
            id: "2",
            nome: "São Paulo"
          }
        }
      }
    ]
  }

}
