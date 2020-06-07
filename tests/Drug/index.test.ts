import { expect } from "chai";
import { Drug } from '../../src/Drug';


describe('Drug', function () {
    it('price', function () {
      const result = Drug.regularPriceFormat(25, 16).toString()
      expect(result).equal('25.16');
    }); 
    it('create drug', (done) => {
      try {
        new Drug('Analgin', Drug.regularPriceFormat(22, 50), 1, 1, new Date('2021-04-04'));
        done();
      } catch (err){
        done(err)
      }
    });
    it('create Grug with invalid price', function () {
      expect((() =>new Drug('Paracetamol', Drug.regularPriceFormat(22, 150), 1, 1, new Date('2021-04-04'))))
      .to.throw('Invalid price');
    })
    it('create drug with invalid expiration date', function () {
      expect((() =>new Drug('Aspirin', Drug.regularPriceFormat(22, 90), 2, 2, new Date('2020-01-01'))))
      .to.throw('Invalid expiration date');
    })
    it('is expired', function () {
      expect(new Drug('Pancreatin', Drug.regularPriceFormat(40, 90), 3, 3, new Date('2020-12-12')).isExpired())
      .equals(false)
    })
    it('get properties', function () {
      const drug = new Drug('Mezim', Drug.regularPriceFormat(12, 20), 3, 4, new Date('2020-12-12'));
      const [category, label, price, producer] = 
      [drug.getCategory(), drug.getLabel(), drug.getPrice().toString(), drug.getProducer()]
      expect(category).equals(4)
      expect(label).equals('Mezim')
      expect(price).equals('12.20')
      expect(producer).equals(3)
    })
})