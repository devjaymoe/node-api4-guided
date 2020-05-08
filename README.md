# Web API Deployment Challenge

Guided project for **Web API IV** module.

In this project we will learn how to deploy a Web API to `heroku`.

## Prerequisites

- Sign up for a [heroku](https://www.heroku.com/) free account.

## Instructions

Please fork this repository and follow along **using your fork** as the instructor deploys the API to `heroku`.

## Environment variables

Each developer must configure the following environment variables:

- API_KEY: is used to restrict acces to the POST `/api/shouts` endpoint

## deployment

- make the PORT dynamic. Read the port from the environment.
- provide "start" script in `package.json` that uses `node` to run the API. Heroku will run your application using `npm start`.
- create new application on heroku.
- connect it to the branch to be deployed from the repository on GitHub.