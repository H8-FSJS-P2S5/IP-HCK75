const {
  beforeAll,
  afterAll,
  expect,
  describe,
  test,
} = require("@jest/globals");
const { User, sequelize } = require("../models");
const request = require("supertest");
const app = require("../app");
const { restart } = require("nodemon");
const { hashPassword } = require("../Helpers/bycripts");
const { INTEGER } = require("sequelize");

beforeAll(async () => {
  try {
    await User.destroy({
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
    const data = require("../data/users.json").map((e) => {
      e.password = hashPassword(e.password);
      e.createdAt = e.updatedAt = new Date();
      return e;
    });

    await sequelize.queryInterface.bulkInsert("Users", data, {});
  } catch (error) {
    console.log(error, "beforeALl");
  }
});

test("POST/login succes", async () => {
  const res = await request(app).post("/login").send({
    email: "fdumbar0@biblegateway.com",
    password: "kkkkk",
  });
  console.log(res.status, res.body);
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty("acces_token", expect.any(String));
});

describe("POST /login failed", () => {
  test("Email/Password Invalid", async () => {
    const res = await request(app).post("/login").send({
      email: "fdumbar0@biblegatewa.com",
      password: "kkkkk",
    });
    console.log(res.status, res.body);
    expect(res.status).toBe(401)
    expect(res.body).toHaveProperty("message","invalid email/password")
  });

  test("Email/Password Invalid", async () => {
    const res = await request(app).post("/login").send({
      email: "",
      password: "kkkkk",
    });
    console.log(res.status, res.body);
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty("message","Email is required")
  });

  test("Email/Password Invalid", async () => {
    const res = await request(app).post("/login").send({
      email: "fdumbar0@biblegatewa.com",
      password: "",
    });
    console.log(res.status, res.body);
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty("message","Password is required")
  });

});

test("POST/register",async () => {
    const res = await request(app).post("/register").send({
        email: "aaaaa@biblegateway.com",
        password: "kkkkk",
      });
      console.log(res.status, res.body);
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("email", expect.any(String))
      expect(res.body).toHaveProperty("id", expect.any(Number))
})

describe("Register failed", () => {

  test("Email/Password Invalid", async () => {
    const res = await request(app).post("/register").send({
      email: "",
      password: "kkkkk",
    });
    console.log(res.status, res.body);
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty("message","Validation isEmail on email failed")
  });

  test("Email/Password Invalid", async () => {
    const res = await request(app).post("/register").send({
      email: "fdumbar0@biblegatewa.com",
      
    });
    console.log(res.status, res.body);
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty("message","User.password cannot be null")
  });

});
