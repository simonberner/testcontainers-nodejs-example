async function createCustomerTable(client) {
    const SQL = "CREATE TABLE IF NOT EXISTS customers (id INT NOT NULL, name VARCHAR NOT NULL, PRIMARY KEY (id))";
    await client.query(SQL);
}

async function createCustomer(client, customer) {
    const SQL = "INSERT INTO customers (id, name) VALUES($1, $2)";
    await client.query(SQL, [customer.id, customer.name]);
}

async function getCustomers(client) {
    const SQL = "SELECT * FROM customers";
    const RESULT = await client.query(SQL);
    return RESULT.rows;
}

module.exports = { createCustomerTable, createCustomer, getCustomers }