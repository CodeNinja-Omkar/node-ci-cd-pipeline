// test.js
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./app");
const should = chai.should();
chai.use(chaiHttp);
describe("GET /", () => {
  it("should return Hello, CI/CD Pipeline!", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.equal("Hello, CI/CD Pipeline!");
        done();
      });
  });
});
