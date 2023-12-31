import { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import chai from 'chai';
import "mocha";
chai.should();
chai.use(chaiHttp);

describe("Receipt list API", () => {
  // Test get receipt list
  describe("GET /receipt", () => {
    it("It should GET all receipts", (done) => {
      chai
        .request(server)
        .get("/receipt")
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.an('array');
          done();
        });
    });
  });

  // Test create receipt list
  describe("POST /receipt", () => {
    it("It should Create new and GET all receipts", (done) => {
      const value = {
        organize: "Google",
        dept: "Dev",
        date: "2023/10/22",
        number: 123456,
        deliverName: "tai",
        warehouseName: "tai",
        location: "Hanoi",
        makerName: "tai",
        ownerWarehouseName: "tai",
        accountName: "tai",
      };

      chai
        .request(server)
        .post("/receipt")
        .send(value)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.an('array');
          done();
        });
    });
  });

  // Test delete receipt list
  describe("DELETE /receipt", () => {
    it("It should DELETE receipt by id and GET all receipts", (done) => {
      const id = 9;
      chai
        .request(server)
        .delete(`/receipt/${id}`)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.an('array');
          done();
        });
    });
  });
});

describe("Receipt detail API", () => {
  // Test get product list

  describe("GET /detail/:id", () => {
    it("It should GET all products of receipt by id", (done) => {
      const id = 3;
      chai
        .request(server)
        .get(`/detail/${id}`)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property("receipt");
          expect(response.body).to.have.property("products");
          done();
        });
    });
  });

  // Test create product
  describe("POST /detail/:id", () => {
    it("It should Create new product of receipt by id", (done) => {
      const value = {
        receiptId: 3,
        name: "tai",
        codeNumber: 123456,
        unit: "$",
        count: 10,
        realCount: 8,
        price: 10,
      };
      const id = 3;
      chai
        .request(server)
        .post(`/detail/${id}`)
        .send(value)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.an('array');
          done();
        });
    });
  });

  // Test delete product
  describe("DELETE /detail/product/:id", () => {
    it("It should DELETE product of receipt by id ", (done) => {
      const id = 9;
      chai
        .request(server)
        .delete(`/detail/product/${id}`)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.property("message").eq("success");
          done();
        });
    });
  });
});