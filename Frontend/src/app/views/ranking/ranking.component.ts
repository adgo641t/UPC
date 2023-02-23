import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { windowTime } from 'rxjs';
import { Partida } from 'src/app/model/partida';
import { PartidasService } from 'src/app/service/partidas.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

   ranking: Partida[] = []  ;
   selectedRanking!: Partida;
   newRanking!: Partida;
   
   currentPage = 1;
   itemsPerPage = 10;

   displayForm=false;

   id!:number;
   juego!:string;
   jugadores!:string;
   fecha!:string;
   hora!:string;
   ganador!:string;

   UpdateForm = this.formBuilder.group({
    id: '',
    juego: '',
    jugadores: '',
    fecha: '',
    hora: '',
    ganador: '',
  });




  constructor(private rankingService: PartidasService,  private router: Router,private formBuilder: FormBuilder) { }


  /**
   * This method call the Ranking service
   * and gets the data from NodeJS response
   */
  ngOnInit(): void {
    this.rankingService.getPartidas().subscribe(
      (data: Partida[]) => {
         this.ranking = data;
         this.selectedRanking = data[1];
      }
  
    );
  }

  /**
   * Gets the clicked Ranking by button and 
   * gets the data from the clicked Ranking
   * @param ranking 
   */
  onSelect(ranking: Partida): void {
    this.selectedRanking = ranking;
  }


  /**
   * Deletes the clicked Ranking by 
   * the selected Ranking and send 
   * a request to the NodeJS to delete
   * the Ranking
   * @param partida 
   */
  DeleteRanking(partida: Partida): void{
    if(window.confirm('Are you sure you want to delete?')){
     this.rankingService
      .deletePartida(partida) 
          .subscribe(result => {
              if(result === null){
                alert('Error to try to delete');
              } else {
                window.location.reload();
              }
          });
        } else {
          this.return();
        }
  }

  return():void{
    this.router.navigate(['/Ranking'])
  }

  ShowUpdateForm():void {
    this.displayForm = true;
  }

  Update(selectedRanking:Partida): void {
      
    console.log(this.UpdateForm.get(['ganador'])?.value);
    this.newRanking = new Partida(
      this.UpdateForm.get(['id'])?.value,
      this.UpdateForm.get(['juego'])?.value,
      this.UpdateForm.get(['jugadores'])?.value,
      this.UpdateForm.get(['fecha'])?.value,
      this.UpdateForm.get(['hora'])?.value,
      this.UpdateForm.get(['ganador'])?.value
    );
    console.log(this.newRanking);
  }

  GoToRankingForm(): void {
    this.router.navigate(['/Create']);
  }

}

