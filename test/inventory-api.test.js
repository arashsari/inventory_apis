/*eslint max-len: ["off", { "ignoreComments": true }]*/

import request from 'supertest';
import { makeServer } from '../src/server';

const wrongProductID = {
    "id": "54f0be26ae8aba",
    "title": "iphone 8",
    "price": "700",
    "category": "Electronics",
    "description": "Brand new Iphone"
};

const product1 = {
    "id": "54f0be26ae8aba260b8f6db8",
    "title": "iphone 8",
    "price": "700",
    "category": "Electronics",
    "description": "Brand new Iphone"
};

const product2 = {
    "id": "14f0be26ae8aba260b8f6db1",
    "title": "ipad 2",
    "price": "200",
    "category": "Electronics",
    "description": "used ipad"
};

let app;

beforeEach(async (done) => {
    app = await makeServer();
    done();
});


it('should GET 404', async function () {

    await request(app)
        .get(`/api/v1/product/54f0be26ae8aba260b8f6db8`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(404, '{"message":"❌ product with the id: 54f0be26ae8aba260b8f6db8 not found"}');
});

it('should POST a product', async function () {
    await request(app)
        .post(`/api/v1/product`)
        .send(product1)
        .type('application/json')
        // .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(201, product1);

});

it('should POST a product FAILED', async function () {
    await request(app)
        .post(`/api/v1/product`)
        .send(JSON.stringify(wrongProductID))
        .type('application/json')
        // .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(400, '{"message":"Validation errors","errors":[{"code":"INVALID_REQUEST_PARAMETER","errors":[{"code":"INVALID_FORMAT","params":["ObjectId","54f0be26ae8aba"],"message":"Object didn\'t pass validation for format ObjectId: 54f0be26ae8aba","path":["body","id"],"description":null}],"in":"body","message":"Invalid parameter (id): Value failed JSON Schema validation","name":"id"}]}');
});

it('should GET a product in the collection', async function () {
    await request(app)
        .get(`/api/v1/product`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(200, [product1]);
});


it('should GET 200', async function () {
    await request(app)
        .get(`/api/v1/product/54f0be26ae8aba260b8f6db8`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(200, product1);
});


it('should DELETE the product 200', async function () {
    await request(app)
        .delete(`/api/v1/product/54f0be26ae8aba260b8f6db8`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(204);
});


it('should GET an empty collection', async function () {
    await request(app)
        .get(`/api/v1/product`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(200, []);
});


it('should GET 404', async function () {
    await request(app)
        .get(`/api/v1/product/54f0be26ae8aba260b8f6db8`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(404);
});

it('should POST a product', async function () {
    await request(app)
        .post(`/api/v1/product`)
        .send(product1)
        .type('application/json')
        // .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(201, product1);

});

it('should POST another product', async function () {
    await request(app)
        .post(`/api/v1/product`)
        .send(product2)
        .type('application/json')
        // .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(201, product2);

});

it('should GET two product in the collection', async function () {
    await request(app)
        .get(`/api/v1/product`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Basic c3Bhcms6dGVzdGluZzE=')
        .expect(200, [product1, product2]);
});


it('AUTH - should GET 401', async function () {
    await request(app)
        .get(`/api/v1/product/54f0be26ae8aba260b8f6db8`)
        .set('Accept', 'application/json')
        .expect(401, '{"message":"Please login to view this page.","code":"server_error"}');
});

it('AUTH - should GET 401', async function () {
    await request(app)
        .get(`/api/v1/product`)
        .set('Accept', 'application/json')
        .expect(401, '{"message":"Please login to view this page.","code":"server_error"}');
});

it('AUTH - should DELETE 401', async function () {
    await request(app)
        .delete(`/api/v1/product/54f0be26ae8aba260b8f6db8`)
        .set('Accept', 'application/json')
        .expect(401, '{"message":"Please login to view this page.","code":"server_error"}');
});


it('AUTH - should GET 401', async function () {
    await request(app)
        .get(`/api/v1/product/54f0be26ae8aba260b8f6db8`)
        .set('Accept', 'application/json')
        .expect(401, '{"message":"Please login to view this page.","code":"server_error"}');
});

it('AUTH - should POST 401', async function () {
    await request(app)
        .post(`/api/v1/product`)
        .send(product2)
        .type('application/json')
        .expect(401, '{"message":"Please login to view this page.","code":"server_error"}');

});
