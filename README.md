# Discords

View our site live: https://discord-flask-clone.onrender.com/
Discords is a real time communication website inspired by Discord. This website is written in Flask and React/Redux.


## Index
- Features List and Database Schema: https://github.com/zgierahn/Discord-Clone-Project/wiki

- Frontend and Backend Routes: https://github.com/zgierahn/Discord-Clone-Project/wiki/Routes

- React Components List: https://github.com/zgierahn/Discord-Clone-Project/wiki/React-Component-List

- Redux Store State Tree: https://github.com/zgierahn/Discord-Clone-Project/wiki/Redux-store-state-tree


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
![Top of landing page](/starter-images/top-landing-page.png)





This is a view of the bottom of the Landing Page
![Bottom of landing page](/starter-images/bottom-landing-page.png)





This is our Login page
![Login Page](/starter-images/login-page.png)





This is the main servers and channels area
![Main servers area](/starter-images/server-channels.png)





This is the modal that pops up when you right click on a server to either edit or delete
![Edit Server Modal](/starter-images/edit-server.png)





This is the modal that pops up to create a server when you select the create a server button
![Create Server Modal](/starter-images/create-server.png)
