// norint terminale iskviesti si faila:
// rasome "node ." (be kabuciu, of course)

const Sarasas = require('./Sarasas');

const automobiliai = new Sarasas();

automobiliai.prideti('audi');
automobiliai.prideti('volvo');
automobiliai.prideti('tesla');
automobiliai.prideti('zapas');
automobiliai.prideti('gazelka');

automobiliai.redaguoti(10, 'mazda');
automobiliai.redaguoti(-1, 'mazda');
automobiliai.redaguoti(2.5, 'mazda');

automobiliai.redaguoti(3, 'opel');

automobiliai.spausdinti();

