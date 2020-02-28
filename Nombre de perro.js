var animal =['paco','guardian','laika'];
animales.push('paco');
animales[2];
animales.unshift('guardian');
animales.pop('laika');

for(var i= 0; i < animales.length; i++){
    console.log('animales:', animales[i]);
}
var admitidos = animales.filter(function (animal){
return animal != 'paco';
});
admitidos ;
