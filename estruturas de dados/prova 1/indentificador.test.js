const identificarEstruturas = require('./Indentificador')

test("teste da classe identificadorEstruturas -> Fila",()=>{
    let vet1 = [1,1,1,2,2,2];
    let vet2 = [1,2,3,1,2,3];

    expect(identificarEstruturas(vet1,vet2)).toBe("queue");
  });

 
  test("teste da classe identificadorEstruturas -> Pilha",()=>{
    let vet1 = [1,1,2,2];
    let vet2 = [2,1,1,2];

    expect(identificarEstruturas(vet1,vet2)).toBe("stack");
  });


  test("teste da classe identificadorEstruturas -> Not Sure",()=>{
    let vet1 = [1,1,1,2,2,2];
    let vet2 = [1,2,3,3,2,1];
    expect(identificarEstruturas(vet1,vet2)).toBe("not sure");
  });

  test("teste da classe identificadorEstruturas -> Impossible",()=>{
    let vet1 = [1,2];
    let vet2 = [1,2];
    expect(identificarEstruturas(vet1,vet2)).toBe("impossible");
  });

  test("teste da classe identificadorEstruturas -> Priority Queue",()=>{
    let vet1 = [1,1,1,1,2,1,2];
    let vet2 = [2,5,1,3,5,4,4];
    expect(identificarEstruturas(vet1,vet2)).toBe("priority queue");
  });