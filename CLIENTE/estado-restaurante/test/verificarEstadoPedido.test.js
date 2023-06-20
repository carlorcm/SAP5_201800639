const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index'); 

chai.use(chaiHttp);
const expect = chai.expect;

describe('Verificar estado del pedido al restaurante', () => {
  it('debería verificar el estado del pedido y devolver una respuesta exitosa', (done) => {
    chai.request(app)
      .get('/cliente/verificar-estado-pedido/123?cliente=Juan&restaurante=La%20Pizzería')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Estado del pedido 123 verificado');
        done();
      });
  });
});
