"use strict";
exports.__esModule = true;
var computador_1 = require("./computador");
var desktop_1 = require("./desktop");
var notebook_1 = require("./notebook");
var smartphone_1 = require("./smartphone");
var softweres_1 = require("./softweres");
var tablet_1 = require("./tablet");
var comp1 = new computador_1.Computador();
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
var sw1 = new softweres_1.Software("Windows 11", 11000, 2000);
var sw2 = new softweres_1.Software("Libra Office", 3000, 700);
var sw3 = new softweres_1.Software("Chome", 1500, 2000);
comp1.instalarSoftwere(sw1);
comp1.instalarSoftwere(sw2);
comp1.instalarSoftwere(sw3);
var desk1 = new desktop_1.Desktop();
desk1.ligarDesligar();
var note1 = new notebook_1.Notebook();
note1.ligarDesligar();
var tab1 = new tablet_1.Tablet();
tab1.ligarDesligar();
var cell1 = new smartphone_1.SmartPhone();
cell1.ligarDesligar();
