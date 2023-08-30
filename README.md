# Discords Project

This was a group project where we decided to make a clone of the popular Discord website. You can view our site live: [Discords](https://group-clone.onrender.com).
Discords is a real time communication site with different chat communities called "Servers", with individual chatrooms within the Servers, called "Channels." 
We have made it possible to sign up and create a user, join servers, and chat live in different Channels all while styled like the original Discord website.

## ⚡ Technologies We Used:
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
- [Link to our Wiki](https://github.com/zgierahn/Discord-Clone-Project/wiki)

- [User Story](https://github.com/zgierahn/Discord-Clone-Project/wiki/User-Story)

- [Frontend and Backend Routes](https://github.com/zgierahn/Discord-Clone-Project/wiki/Routes)

- [React Components List](https://github.com/zgierahn/Discord-Clone-Project/wiki/React-Component-List)

- [Redux Store State Tree](https://github.com/zgierahn/Discord-Clone-Project/wiki/Redux-store-state-tree)

# Features 

## Servers
* Users can create a Server
* Users can read/view other Servers
* Users can update their Server
* Users can delete their Server

## Channels
* Users can create Channels within their Servers
* Users can read/view all of the Channels within a Server
* Users can delete Channels within a Server they have created

## ChatSocket.io
Logged-in Users can
* chat with live message data being transmitted in real time

# Photos
### Landing Page
![top-landing-page](https://github.com/zgierahn/Discord-Clone-Project/assets/122756763/7046b928-cf5f-46f4-8750-5435e7f3f052)

### Landing Page Footer
![bottom-landing-page](https://github.com/zgierahn/Discord-Clone-Project/assets/122756763/b4ee65dd-eb01-4344-9c09-36be19a95ab9)

### Login page
![login-page](https://github.com/zgierahn/Discord-Clone-Project/assets/122756763/2fd792c5-edcc-4626-b49c-d77452509fa8)

### Create a Server Modal
![create-server](https://github.com/zgierahn/Discord-Clone-Project/assets/122756763/c7c77898-63f8-4fe0-b62e-b0ec0abf595f)

### Right Click to Edit or Delete a Server
![edit-server](https://github.com/zgierahn/Discord-Clone-Project/assets/122756763/f762224d-b8e3-485b-9568-7e10c9a7a58f)

### Chat Room Screen-Shot
![server-channels](https://github.com/zgierahn/Discord-Clone-Project/assets/122756763/22c35a70-5a1a-41a7-a4f3-05a0a7f594e1)



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
