# Discords Project

This was a group project where we decided to make a clone of the popular Discord website. You can view our site live: [Discords](https://group-clone.onrender.com).
Discords is a real time communication site with different chat communities, "Servers", with individual chatrooms within the Servers called "Channels." 
We have made it possible to sign up and create a user, join servers, and chat live in different Channels.

## ⚡ Technologies We used:
![Socket.io](https://img.shields.io/badge/Socket.io-010101.svg?style=for-the-badge&logo=socketdotio&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC.svg?style=for-the-badge&logo=Redux&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000.svg?style=for-the-badge&logo=Flask&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)



## Index
- [MVP Core Feautures](https://github.com/zgierahn/Discord-Clone-Project/wiki/User-Story)

- [Features List and Database Schema](https://github.com/zgierahn/Discord-Clone-Project/wiki)

- [Frontend and Backend Routes](https://github.com/zgierahn/Discord-Clone-Project/wiki/Routes)

- [React Components List](https://github.com/zgierahn/Discord-Clone-Project/wiki/React-Component-List)

- [Redux Store State Tree](https://github.com/zgierahn/Discord-Clone-Project/wiki/Redux-store-state-tree)


## Installation Instructions

1. Install dependencies
```bash
pipenv install -r requirements.txt
```
2. Create a **.env** file based on the example with proper settings for your development environment

4. Replace the value for `SCHEMA` with a unique name, **making sure you use the snake_case convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

```bash
pipenv shell
```
```bash
flask db upgrade
```
```bash
flask seed all
```
```bash
flask run
```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


## To-dos/Future Features
- Allowing the user to update a message
- Allowing the user to update a reaction
- Allowing the user to update a user photo




This is a view of the top of the Landing Page
https://github.com/zgierahn/Discord-Clone-Project/wiki/Images





This is a view of the bottom of the Landing Page
https://github.com/zgierahn/Discord-Clone-Project/wiki/Images





This is our Login page
https://github.com/zgierahn/Discord-Clone-Project/wiki/Images





This is the main servers and channels area
https://github.com/zgierahn/Discord-Clone-Project/wiki/Images





This is the modal that pops up when you right click on a server to either edit or delete
https://github.com/zgierahn/Discord-Clone-Project/wiki/Images





This is the modal that pops up to create a server when you select the create a server button
https://github.com/zgierahn/Discord-Clone-Project/wiki/Images
