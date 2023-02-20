import { Component, OnInit } from '@angular/core';
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


  constructor(private rankingService: PartidasService,  private router: Router) { }


  /**
   * This method call the Ranking service
   * and gets the data from NodeJS response
   */
  ngOnInit(): void {
    this.rankingService.getPartidas().subscribe(
      (data: Partida[]) => {
         this.ranking = data;
         console.log(this.ranking);
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


}

