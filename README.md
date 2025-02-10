# Testcontainers Node.js Example

[![Testcontainers nodejs example](https://github.com/simonberner/testcontainers-nodejs-example/actions/workflows/ci.yml/badge.svg)](https://github.com/simonberner/testcontainers-nodejs-example/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/simonberner/testcontainers-nodejs-example/blob/main/LICENSE)

## About

- [Getting Started](https://testcontainers.com/getting-started/)
- [Getting Started with Node.js](https://testcontainers.com/guides/getting-started-with-testcontainers-for-nodejs/)

## Containers

For running containers, we have the following options:

- Use Docker Desktop to run the containers locally
- Use [Testcontainers Desktop App](https://testcontainers.com/desktop/) to run containers locally (embedded runtime) or in the Testcontainers cloud (300min for free)
- Use [GitHub Actions to run a Testcontainer](https://www.atomicjar.com/2023/06/running-testcontainers-tests-using-github-actions/)

## Testcontainers Cloud

- [Your Account Dashboard](https://app.testcontainers.cloud)

## GitHub Actions

This project contains a [GitHub Action](https://github.com/simonberner/testcontainers-nodejs-example/actions) which runs the Tests (of course in a Testcontainer) when pushing/merging to main.

## Resources

- [Enable reusable containers](https://testcontainers.com/guides/simple-local-development-with-testcontainers-desktop/#_enable_reusable_containers_to_speed_up_the_development)

### Playwright

It is recommended to use Docker image version that matches Playwright version. If the Playwright version in your Docker image does not match the version in your project/tests, Playwright will be unable to locate browser executables.

- [Playwright module for Testcontainers](https://github.com/javierlopezdeancos/testcontainers-node-playwright)
- [Playwright Docker](https://playwright.dev/docs/docker)
- [Playwright Docker Image Tags](https://playwright.dev/docs/docker#image-tags)
- [Playwright official docker Images](https://mcr.microsoft.com/en-us/product/playwright/about)
- [Docker image to run Playwright with Node.js](https://hub.docker.com/r/microsoft/playwright)

### Postgres

- [Postgres Docker Images](https://hub.docker.com/_/postgres)

## Credits

- The project is based on [this guide](https://testcontainers.com/guides/getting-started-with-testcontainers-for-nodejs/)
