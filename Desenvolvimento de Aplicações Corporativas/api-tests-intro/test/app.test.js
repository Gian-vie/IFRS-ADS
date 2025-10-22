const request = require("supertest");
const app = require("../src/app");
test("GET /ping deve retornar 200 e { ok: true }", async () => {
  const res = await request(app).get("/ping");
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ ok: true });
});
