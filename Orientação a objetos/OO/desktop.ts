import { Computador } from "./computador";

export class Desktop extends Computador{
    private _teclado: string;
    public get teclado(): string {
        return this._teclado;
    }
    public set teclado(value: string) {
        this._teclado = value;
    }

    private _mose: string;
    public get mose(): string {
        return this._mose;
    }
    public set mose(value: string) {
        this._mose = value;
    }
    
    private _monitor: string;
    public get monitor(): string {
        return this._monitor;
    }
    public set monitor(value: string) {
        this._monitor = value;
    }

    private _fonte: string;
    public get fonte(): string {
        return this._fonte;
    }
    public set fonte(value: string) {
        this._fonte = value;
    }
    
    private _gabinete: string;
    public get gabinete(): string {
        return this._gabinete;
    }
    public set gabinete(value: string) {
        this._gabinete = value;
    }

    constructor(){
        super();
    }

}