# Schooler Server
![Schooler-Logo](https://user-images.githubusercontent.com/45785817/93096463-0e2add80-f6c2-11ea-9284-61f7feaeb9a3.jpeg)

Server of **Schooler** powered by NodeJS
> Schooler is an academics manager, planner and organizer - developed using React, MongoDB, Express and NodeJS
- [Schooler](https://github.com/meet59patel/schooler) (Frontend)


 ### Environment file

You need to setup a `.env` file in the root of the repository. The file should look like this: (`.env.template` available in repository)

```bash
DB_URL = #Your database url here
DB_NAME = #Your database name here
NODE_ENV = #Your node environment mode (development or production)
```


### Usage:
- Set Up:
```
git clone https://github.com/meet59patel/schooler-server.git
cd schooler-server
npm install
```

- Run server: (Development)
```
npm run dev
```
- Run server: (Production)
```
npm start
```