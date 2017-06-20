# Tmdb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

================================================================================

## Update npm with nvm (and set default)
nvm install node

## install angular-cli
npm install -g @angular/cli


## Create new Angular project
ng new tmdb

## run
ng serve --host $IP --port $PORT --public $C9_HOSTNAME

## add alias in ~/.bash_aliases
alias ngs="ng serve --host $IP --port $PORT --public $C9_HOSTNAME"

### reload: source ~/.bash_aliases

-----------------------------

## create service with angular-cli
ng g service tmdb-api

### add in app.module