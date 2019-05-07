const fs = require('fs');
const path = require('path');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server=require("../index");
const { expect } = chai;
chai.use(chaiHttp);

describe('GET /', () => {
    it('should return pets detail', (done) => {
        chai
            .request(server)
            .get('/pets/1')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.all.keys('id', 'owner', 'age', 'breed', 'colour', 'name');
                done();
            });
    });
});

describe('/POST', () => {
    it('should create pet with valid request', (done) => {
        chai
            .request(server)
            .post('/addPet')
            .send({                
                name: 'Molly',
                colour: 'browne',
                age: '5 year',
                breed: 'Border Collie',
                owner: 2,
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.all.keys('id', 'owner', 'age', 'breed', 'colour', 'name');
                done();
            });
    });
});
