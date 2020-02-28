var Carros=  [{ marca: 'Mazda', modelo: 2029 },
{ marca: 'Chevrolet', modelo: 2017 },
{ marca: 'Jeep', modelo: 2018 },
{ marca: 'Ferrari', modelo: 2015 },
{ marca: 'Nissan', modelo: 2021];

    for(var i= 0; i < Carros.length; i++){
    console.log('Carros:', Carros[i]);
}
var admitidos = Carros.filter(function (Carros){
return Carros != 'Jeep';
});
admitidos ;
