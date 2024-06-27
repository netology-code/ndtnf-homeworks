# Домашнее задание к занятию «2.4. Потоки RxJS»

**Правила выполнения домашней работы.** 
* Выполняйте домашнее задание в отдельной ветке проекта на GitHub.
* В поле для сдачи работы прикрепите ссылку на ваш проект в Git.
* На проверку можно отправить как все задачи вместе, так и каждую задачу по отдельности. 
* Во время проверки вашей домашней работы по частям будет стоять статус «На доработке».
* Любые вопросы по решению задач можете задавать в чате учебной группы.

### Подготовьте рабочую среду для дальнейшей работы.

#### Клонируйте проект из репозитория.

Разверните стартовый проект у себя на локальной машине.

**Выполните задания.**

**Задание 1.**

Сделайте обращение к GitHub API, как в примерах на лекции, с использованием RxJS. 
Пример реализации этого запроса предоставлен в стартовом проекте.
```sh
https://api.github.com/search/repositories?q=${текст запроса}
```

**Задание 2.**

С использованием RxJS сделайте запросы к любому общедоступному API (например, аналогичное с GitHub API [GitLab](https://docs.gitlab.com/ee/api/README.html#basic-usage)).
```sh
https://gitlab.com/api/v4/projects?search=${текст запроса}
```

В основе мы используем стартовый пакет NestJS

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
