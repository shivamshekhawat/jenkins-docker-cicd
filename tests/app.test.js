
const request = require("supertest");
const app = require("../app/server");

describe("DevOps Demo Application API Tests", () => {

    test("GET / should return welcome message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("Running");
    });

    test("GET /health should return UP status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");
    });

    test("GET /api/users should return three users", async () => {
        const response = await request(app).get("/api/users");

        expect(response.statusCode).toBe(200);
        expect(response.body.users).toHaveLength(3);
    });

});

