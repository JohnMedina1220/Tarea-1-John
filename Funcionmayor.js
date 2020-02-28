function mayor(lista){
    var mayor = lista[0];
  for(i=1;i<lista.length;i++){
      if(lista[i] > mayor)
          mayor=lista[i];
  }
return mayor;
}

var num1=3;
var num2=6;
var num3=1;
var num4=5;
var miLista = [num1,num2,num3,num4];
alert(mayor(miLista));
