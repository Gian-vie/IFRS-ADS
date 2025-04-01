import { Computador } from "./computador";
import { Desktop } from "./desktop";
import { Notebook } from "./notebook";
import { SmartPhone } from "./smartphone";
import { Software } from "./softweres";
import { Tablet } from "./tablet";

let comp1 = new Computador();

comp1.marca = "DELL";
comp1.capacidadeHD = 1024;
comp1.capacidadeRAM = 32;
comp1.freqProcessador = 3.5;
comp1.qntNucleosProcessador = 8;
comp1.PlacVideoIntegrada = true;
comp1.ligarDesligar();
comp1.abrirProgramas("Visual Studio Code", 2);
comp1.abrirProgramas("Crhome", 20);
comp1.abrirProgramas("Opera", 15);
comp1.listarProgramasAbertos();
comp1.fecharProgramas("firefox", 0);
comp1.fecharProgramas("Crhome", 20);
comp1.ligarDesligar();

let sw1: Software = new Software("Windows 11", 11000, 2000);

let sw2: Software = new Software("Libra Office", 3000, 700);

let sw3: Software = new Software("Chome", 1500, 2000);

comp1.instalarSoftwere(sw1);
comp1.instalarSoftwere(sw2);
comp1.instalarSoftwere(sw3);

let desk1: Desktop = new Desktop();
desk1.ligarDesligar();

let note1: Notebook = new Notebook();
note1.ligarDesligar();

let tab1: Tablet = new Tablet();
tab1.ligarDesligar();

let cell1: SmartPhone = new SmartPhone();
cell1.ligarDesligar();
