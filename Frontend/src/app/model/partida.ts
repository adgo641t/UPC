export class Partida {
    public id: number;
    public juego:string;
    public jugadores:string;
    public fecha:string;
    public hora: string;
    public ganador: string

    constructor(
            id:number, 
            juego:string, 
            jugadores:string, 
            fecha:string,
            hora:string,
            ganador:string
        )
        {
            this.id = id;
            this.juego = juego;
            this.jugadores = jugadores;
            this.fecha = fecha;
            this.hora = hora;
            this.ganador = ganador;
    }

    get Id(): number {
        return this.id;
    }

    set Id(id:number) {
        this.id = id;
    }
    get Juego(): string {
        return this.juego
    }

    set Juego(juego:string) {
        this.juego = juego;
    }

    get Jugadores(): string {
        return this.Jugadores;
    }

    set Jugadores(jugadores: string) {
        this.Jugadores = jugadores;
    }

    get Fecha(): string {
        return this.fecha;
    }

    set Fecha(fecha: string) {
        this.fecha = fecha;
    }
    get Hora(): string {
        return this.hora;
    }

    set Hora(hora: string) {
        this.hora = hora;
    }

    get Ganador(): string {
        return this.ganador;
    }

    set Ganador(ganador: string) {
        this.ganador = ganador;
    }

}
