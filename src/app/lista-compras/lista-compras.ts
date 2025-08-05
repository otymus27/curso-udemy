import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemLista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss',
})
export class ListaCompras {
  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() {
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    if (this.item == '') {
      console.log('Item não pode ficar vazio');
      alert('Item não pode ser vazio');
    } else {
      this.lista.push(itemLista);
    }

    //console.log('Item recebido: ', this.item);
    this.item = '';
    //console.table(this.lista);
  }

  riscarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista() {
    this.lista = [];
  }
}
