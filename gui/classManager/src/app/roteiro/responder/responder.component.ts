import { Component } from '@angular/core';

@Component({
  selector: 'responder-roteiro',
  templateUrl: './responder.component.html',
  //styleUrls: [ './responderRoteiro.component.scss' ]
})
export class ResponderRoteiroComponent{

  nextQuestao(parentDiv){
    console.log(parentDiv);
  }
}
