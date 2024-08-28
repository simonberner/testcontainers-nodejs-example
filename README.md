# Testcontainers Node.js Example

- [Getting Started](https://testcontainers.com/getting-started/)
- [Getting Started with Node.js](https://testcontainers.com/guides/getting-started-with-testcontainers-for-nodejs/)

## Containers

For running containers, we currently have the following options:

- We can use Docker Desktop to run the containers locally
- We can use Testcontainers Desktop to run containers locally (embedded runtime) or in the cloud (300min for free)
- [Enable reusable containers](https://testcontainers.com/guides/simple-local-development-with-testcontainers-desktop/#_enable_reusable_containers_to_speed_up_the_development)

## Testcontainers Cloud

- [Your Account Dashboard](https://app.testcontainers.cloud)

## GitHub Actions

This project contains a [GitHub Action](https://github.com/simonberner/testcontainers-nodejs-example/actions) which runs the Tests (of course in a Testcontainer) when pushing/merging to main.

[![Testcontainers nodejs example](https://github.com/simonberner/testcontainers-nodejs-example/actions/workflows/ci.yml/badge.svg)](https://github.com/simonberner/testcontainers-nodejs-example/actions/workflows/ci.yml)

## Credits

- The project is based on [this guide](https://testcontainers.com/guides/getting-started-with-testcontainers-for-nodejs/)