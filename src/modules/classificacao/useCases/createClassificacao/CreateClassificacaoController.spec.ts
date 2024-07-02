import request from "supertest";
import { app } from "@shared/infra/http/app";



describe("Car rou8tes available", () => {

  it("should be able to list available car", () => {
    request(app).get("/car/available").expect(200)
  })
})