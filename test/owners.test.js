const fs = require('fs');
const path = require('path');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server=require("../index");
const { expect } = chai;
chai.use(chaiHttp);

describe('GET /', () => {
    it('should return list of owners', (done) => {
        chai
            .request(server)
            .get('/owners')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.length(2);
                done();
            });
    });
    it('should return owner detail along with pet detail', (done) => {
        chai
            .request(server)
            .get('/owners/1')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.pets).to.have.length(2);
                done();
            });
    });
});
