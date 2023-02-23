import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Partida } from 'src/app/model/partida';
import { PartidasService } from 'src/app/service/partidas.service';


@Component({
  selector: 'app-create-ranking',
  templateUrl: './create-ranking.component.html',
  styleUrls: ['./create-ranking.component.css']
})

export class CreateRankingComponent {

  newRanking!: Partida;
  id!: number;
  juego!: string;
  jugadores!:  string;
  fecha!: string;
  hora!: string;
  ganador!: string;

  RankingForm = this.formBuilder.group({
    id: '',
    juego: '',
    jugadores: '',
    fecha: '',
    hora: '',
    ganador: '',
  });

  constructor(private rankingService: PartidasService,  private router: Router,private formBuilder: FormBuilder) { }


  CreateNewRanking(): void {

    this.newRanking = new Partida(
      this.RankingForm.get(['id'])?.value,
      this.RankingForm.get(['juego'])?.value,
      this.RankingForm.get(['jugadores'])?.value,
      this.RankingForm.get(['fecha'])?.value,
      this.RankingForm.get(['hora'])?.value,
      this.RankingForm.get(['ganador'])?.value);

      this.rankingService.createPartida(this.newRanking).subscribe(data => {
        this.router.navigate(['/rankings']);
      })

  }
}
