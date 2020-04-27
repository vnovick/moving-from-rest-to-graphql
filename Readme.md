<h1 align="center">Welcome to moving-from-rest-to-graphql 👋</h1>

Hi, my name is [Vladimir Novick](https://vnovick.com) and this is the source
material for

Moving from REST to GraphQL workshop.

[![Twitter](https://img.shields.io/twitter/follow/VladimirNovick.svg?style=social)](https://twitter.com/VladimirNovick)[![GPL-3.0 License][license-badge]][license][![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)[![PRs Welcome][prs-badge]][prs][![Code of Conduct][coc-badge]][coc]

## Pre-Workshop Instructions/Requirements

- [ ] Setup the project (follow the setup instructions below) (~5 minutes)
- [ ] 📺 Install and setup [Zoom](https://zoom.us/downloads) on the computer you
      will be using (~5 minutes)

## System Requirements

- [git][git] v2 or greater
- [NodeJS][node] v10 or greater
- [npm][npm] v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

For analyzing REST API we will need [Postman](https://www.postman.com/) so
download it.

1. Clone the repo

```
git clone git@github.com:vnovick/moving-from-rest-to-graphql.git
```

2. Install all frontend dependencies

```sh
cd frontend
npm install
```

3. Install all backend dependencies

```sh
cd api
npm install
```

## Running the app

### To get frontend app up and running

```sh
cd frontend
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

### To get api server running

```sh
cd api
npm start
```

This will provide you REST backend that we will convert to GraphQL during our
workshop

## Schedule

Workshop schedule

- Logistics
- Problems with REST
- GraphQL query language
- GraphQL endpoint setup
- Design a GraphQL Schema by analyzing REST api
- Implementing temporary resolvers for Queries
- Batch REST requests with REST Data Source
- Migrate to the same data source
- Implement Mutations

## Working through the exercises

Every exercise will have a separate branch for it. You move between exercise by
changing branches.

In most exercises you will see `TODO:` comments in the code. They serve as
guidelines where you should write your solutions You will also see a list of
files that you will be required to modify. Every file will have `.final.js`
version. If you are stuck, you are welcome to peak at the final solution

## Exercise 1 - exploring project REST api

Start by cloning the exercise repo.

`git checkout exercise-1`

follow
[Instructions.md](https://github.com/vnovick/moving-from-rest-to-graphql/blob/exercise-1/Instructions.md)

## Exercise 2 - Explore GraphQL queries and mutations

`git checkout exercise-2`

follow
[Instructions.md](https://github.com/vnovick/moving-from-rest-to-graphql/blob/exercise-2/Instructions.md)

## Exercise 3 - GraphQL endpoint setup

- `git checkout exercise-3`
- install dependencies:

```sh
cd api
npm install
```

- follow
  [Instructions.md](https://github.com/vnovick/moving-from-rest-to-graphql/blob/exercise-3/Instructions.md)

## Exercise 4 - Design GraphQL Schema

- `git checkout exercise-4`
- install dependencies:

```sh
cd api
npm install
```

- follow
  [Instructions.md](https://github.com/vnovick/moving-from-rest-to-graphql/blob/exercise-4/Instructions.md)

## Exercise 5 - Implementing temporary resolvers for Queries

- `git checkout exercise-5`
- install dependencies:

```sh
cd api
npm install
```

- follow
  [Instructions.md](https://github.com/vnovick/moving-from-rest-to-graphql/blob/exercise-5/Instructions.md)

## Exercise 6 - Batch REST requests with REST Data Source

- `git checkout exercise-6`
- install dependencies:

```sh
cd api
npm install
```

- follow
  [Instructions.md](https://github.com/vnovick/moving-from-rest-to-graphql/blob/exercise-6/Instructions.md)

## Exercise 7 - Migrate to the same data source

- `git checkout exercise-7`
- install dependencies:

```sh
cd api
npm install
```

- follow
  [Instructions.md](https://github.com/vnovick/moving-from-rest-to-graphql/blob/exercise-7/Instructions.md)

## Exercise 8 - Implement Mutations and Input types

- `git checkout exercise-8`
- install dependencies:

```sh
cd api
npm install
```

- follow
  [Instructions.md](https://github.com/vnovick/moving-from-rest-to-graphql/blob/exercise-8/Instructions.md)

## Author

Hi, I am 👤 **Vladimir Novick**

- Website: [https://vnovick.com](https://vnovick.com)
- Twitter: [@VladimirNovick](https://twitter.com/VladimirNovick)
- Twitch: [https://twitch.tv/vnovick](https://twitch.tv/vnovick)
- Youtube: [My Channel](https://youtube.com/c/VladimirNovickDev)
- Github: [vnovick](https://github.com/vnovick)
- LinkedIn: [vnovick](https://linkedin.com/in/vnovick)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check
[issues page](https://github.com/vnovick/moving-from-rest-to-graphql/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/vnovick">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

This material is available for private, non-commercial use under the GPL
version 3. If you would like to use this material to conduct your own workshop,
please contact me at vnovick@gmail.com

---

_This README was generated with ❤️ by
[readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://vnovick.com"><img src="https://avatars1.githubusercontent.com/u/3762909?v=4" width="100px;" alt=""/><br /><sub><b>Vladimir Novick</b></sub></a><br /><a href="https://github.com/vnovick/moving-from-rest-to-graphql/commits?author=vnovick" title="Code">💻</a> <a href="https://github.com/vnovick/moving-from-rest-to-graphql/commits?author=vnovick" title="Documentation">📖</a></td>
  </tr>
</table>

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[yarn]: https://yarnpkg.com/
[license-badge]:
  https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]:
  https://github.com/vnovick/moving-from-rest-to-graphql/blob/master/README.md#license
[prs-badge]:
  https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]:
  https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]:
  https://github.com/vnovick/moving-from-rest-to-graphql/blob/master/CODE_OF_CONDUCT.md
[win-path]:
  https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/vnovick/moving-from-rest-to-graphql/issues/new
