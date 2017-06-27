# Tmdb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

================================================================================

* Update npm with nvm (and set default)
nvm install node

* install angular-cli
npm install -g @angular/cli

* Create new Angular project
ng new tmdb

* run
ng serve --host $IP --port $PORT --public $C9_HOSTNAME

* add alias in ~/.bash_aliases
alias ngs="ng serve --host $IP --port $PORT --public $C9_HOSTNAME"

### reload: source ~/.bash_aliases

-----------------------------

* boostrap4
    `$ npm install --save @ng-bootstrap/ng-bootstrap bootstrap@4.0.0-alpha.6 font-awesome`

* ng-bootstrap
    `npm install --save @ng-bootstrap/ng-bootstrap`

# deploy in github pages

* install package
   `npm install --save-dev angular-cli-ghpages`

* build
   `ng build --prod --base-href "https://BryanTabarez.github.io/al-inters-project/"`
   
   * works for me!
   `ng build --prod --base-href .`

* run it
   `angular-cli-ghpages` or `ngh`

   * or local
      `$(npm bin)/angular-cli-ghpages`