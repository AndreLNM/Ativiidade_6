//André Martinho

function vlMaiorQueMedia(...valores) {
    const media=valores.reduce((soma,valor)=>soma+valor,0)/valores.length;
    const vlMaior=valores.filter(valor=>valor>media);
    return vlMaior;
  }
  
  const lista=[10, 12, 15, 35, 40];
  const resultado=vlMaiorQueMedia(...lista);
  console.log('Função 1: ', resultado);


  function menorVlLista(...valores){
    if (valores.length === 0){
      return undefined;
    }
    return Math.min(...valores);
  }
  
  const lista2=[10, 12, 15, 35, 40];
  const menorValor=menorVlLista(...lista2);
  console.log('Função 2: ', menorValor);

  function somaDaLista(lista){
    if (lista.length === 0){
      return 0;
    }
    const soma=lista.reduce((acumulador,valor)=>acumulador+valor, 0);
    return soma;
  }
  
  const lista3=[10, 12, 15, 35, 40];
  const resultado2=somaDaLista(lista3);
  console.log('Função 3: ', resultado2);
  
  function vlMenor20(lista){
    const valoresMenores=lista.filter(valor=>valor<20);
    return valoresMenores;
  }

  const lista4=[10,12,15,35,40];
  const resultado3=vlMenor20(lista);
  console.log('Função 4: ', resultado3);
  