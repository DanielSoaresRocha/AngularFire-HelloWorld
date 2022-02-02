import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, setDoc } from "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: any;

  constructor(private firestore: AngularFirestore) {
    this.resgatarDados();
  }

  private resgatarDados(){
    this.firestore.collection('items').valueChanges().subscribe(
      (items) => this.items = items
    );
  }

  adicionarDados(nameItem: string){
    this.firestore.collection('items').add({
      nome: nameItem
    }).then((doc) => {
      doc.update({
        id: doc.id
      })
    })

    /*console.log('Resgatando documento específico: ')
    this.firestore.collection('items').doc('wQO2KHFZrbmQOktYfjCT').get().subscribe(
      (doc) => console.log(doc.data())
    )*/
  }
}
