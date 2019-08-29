# TaskPlanner

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

# User Story- Task Planner App
See Presentation.pptx file for more details.

As a user, I should have a option to sign up and login to my account, so that I can see what I saved in the Planner.

As a user, I want to see a mini calendar that I can click on as a quick link to specific date.

As  a user, I want to navigate to different pages.

As a user, I can add events to the calendar, and can also review, edit and remove them. So I have more flexible control of events. 


As a user, I can add different color to events and define the priority, so I can better manage the events.

As a user, I want to post my events with address, so my friends around me can see it.

As a user, I can give permission as private or public to my events, so that friends around me can see the events have posted by people around me 


# DDD model

<img src="./Front-end/assets/domain model.svg">
      

## Additional Step
Run `npm install --save-dev @angular-devkit/build-angular` to update module. <br>
Run `npm install --save @angular/material @angular/animations @angular/cdk` for display datepicker

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

npm install @agm/core --save
npm install feofire --save
ng generate service geo --module app
## Potential-Error Handling
if there's conflict at compatibility with angular and rxjs:

`npm i rxjs-compat`

if cannot find module "angularfire2/database",using:

`npm cache clean`

`npm install angularfire2 firebase --save`

install express:

`npm install express --save`

install json server:

`npm install json-server --save`


create an ApiService to Communicate with the REST API Back End:
 
`ng generate service Api --module app.module.ts`

sending object to endpoint:

`npm install body-parser --save`

using proxy:

`npm install @angular/http`
