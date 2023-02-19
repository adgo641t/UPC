import { Component, OnInit } from '@angular/core';
import { Partida } from 'src/app/model/partida';
import { PartidasService } from 'src/app/service/partidas.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

   ranking: Partida[] = []  ;

  constructor(private rankingService: PartidasService) { }


  ngOnInit(): void {
    this.rankingService.getPartidas().subscribe(
      (data: Partida[]) => {
         this.ranking = data;
         console.log(this.ranking);
      }
  
    );
  }
}

