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

beforeAll(async () => {
  try {
    await Plant.destroy({
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
    const data = require("../data/plants.json").map((e) => {
      e.createdAt = e.updatedAt = new Date();
      return e;
    });

    await sequelize.queryInterface.bulkInsert("Plants", data, {});
  } catch (error) {
    console.log(error, "beforeALl");
  }
});

test.only("Get/Plants succes", async () => {
  const res = await request(app)
    .get("/plants")
    .send({
      id: 1,
      name: "Pohon Ficus",
      type: 1,
      watersNeeds: "Medium",
      lightNeeds: "Bright indirect light",
      temperatureRange: "15-25°C",
      soilType: "Well-draining soil",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqW2YFH1YEqtxI0eY-3MHExHmtDTm1linHeA&s",
      createdAt: "2024-10-01T10:59:32.955Z",
      updatedAt: "2024-10-01T10:59:32.955Z",
      Type: {
        id: 1,
        name: "Indoor",
        createdAt: "2024-10-01T10:59:32.944Z",
        updatedAt: "2024-10-01T10:59:32.944Z",
      },
    });
    console.log(res.status, res.body);
    expect 
});
