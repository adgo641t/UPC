import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    let parametros = {
      nom:  "adrian",
      curso: "daw2"
    }

    this.getData.consultaGET(parametros).subscribe(
      data => {
        console.log(data);
      });
  }

}
