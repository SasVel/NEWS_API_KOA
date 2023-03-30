process.env.NODE_ENV = 'test'

import chai from "chai";
import chaiHttp from 'chai-http';
const expect = chai.expect;
const should = chai.should();
import router from '../routes/newsRoutes.js'
const path = `http://localhost:${process.env.API_PORT}`

chai.use(chaiHttp);

describe('newsRouter Tests', () => {

    it('Get All Request Test', (done) => {
        chai.request(router)
        .get('/articles')
        .end((err, res) => {
            console.log(res)
            expect(res).to.have.status = 400;
            done()
        })
    });

})