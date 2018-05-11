const server = require('../index');
const browser = require('zombie');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const code = require('code');

lab.experiment('Formulario contacto', function(){
   lab.before(function(){
       return new Promise(function(done){
           this.browser = new browser({site : 'http://localhost:3000' });
           done();
       })
   });
   lab.before(function(){
        return new Promise(function(done){
            this.browser.visit('/contacto', done);
        })
    });

    lab

});