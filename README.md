# EHI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Database server

Run `json-server --watch src/data/contact.json` for database server. Here I have user json server as alternative to real database which i have used for API purpose as well

## Node Modules

Run `npm install` to download node modules.

## To generate production ready build

Run `ng build --prod`

## Folder structure

src > It is the main folder which contains entire source code with different different component.

src > app folder : 
    Contains app module and app component which is root component. app component is use to bootstrap application.

src > app > ehi-contact-list folder : 
    Contains component which is responsible to display list of all contacts

src > app > update-contact folder : 
    Contains component which is responsible for displaying form to enter new details of contact as well as update existing contact which can be submit.

src > app > confirmation-model folder : 
    Contains component which is response for displaying confirmation model before deleting any record.

src > app > shared folder :
    Contains shared stuff like model and services
