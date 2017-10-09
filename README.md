# NodeBook

Platform for beginner developers to track course progress and connect with other beginning developers.

## Team

  - Alex Simrell
  - Marcus Polk
  - Shane Laymance
  - Shwetha Patrachari

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

This repo is meant to be used in-browser by a target audience of beginning developers.

## Requirements

- Node 8.3.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Tech Stack

#### Front-end
- React
- React Routers
  - Dynamic URL routing is handled using React Routers
  - For example, a user's username is appended to the url address when navigating to their profile
  - For more information: https://reacttraining.com/react-router/web/
- Bootstrap
- Webpack

#### Back-end
- Express
- Passport
  - Passport handles authorization of users on login
  - Passport also handles all session management
  - For more information: http://passportjs.org/
- bcrypt
  - bcrypt hashes passwords which are stored
  - For more information: https://www.npmjs.com/package/bcrypt-nodejs

#### Database Management
- MySQL
- Sequelize

#### Testing
- Mocha
- Chai

### Roadmap

View the project roadmap [here](ROADMAP.md)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
