const { Client } = require("pg");
const { PostgreSqlContainer } = require("@testcontainers/postgresql");
const { createCustomerTable, createCustomer, getCustomers } = require("../../customer-repository");

describe("Customer repository", () => {
    jest.setTimeout(60000);

    let postgresContainer;
    let postgresClient;

    beforeAll(async () => {
        // setup container (reusable to speed up testing) and client
        postgresContainer = await new PostgreSqlContainer("postgres:16.4-alpine").withReuse(true).start();
        postgresClient = new Client({ connectionString: postgresContainer.getConnectionUri() });
        // create customer table
        await postgresClient.connect();
        await createCustomerTable(postgresClient);
    })

    // Tear down the client and container
    afterAll(async () => {
        await postgresClient.end();
        await postgresContainer.stop();
    })

    // Test
    it('should create and return multiple customers', async () => {
        const customer1 = { id: 1, name: "John Doe" };
        const customer2 = { id: 2, name: "Jane Doe" };

        // create customer in postgres container
        await createCustomer(postgresClient, customer1);
        await createCustomer(postgresClient, customer2);

        // get customer from the postgres container
        const customers = await getCustomers(postgresClient);
        // assert
        expect(customers).toEqual([customer1, customer2]);
    });
});