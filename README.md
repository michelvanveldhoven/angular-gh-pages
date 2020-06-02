[![Build Status](https://dev.azure.com/mvanveldhoven/angular-gh-pages/_apis/build/status/michelvanveldhoven.angular-gh-pages?branchName=master)](https://dev.azure.com/mvanveldhoven/angular-gh-pages/_build/latest?definitionId=1&branchName=master)

# AngularGithubPages

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Angular Component
Add angular components
ng add @angular/material

### Scaffolding angular component
e.g. navigation shell
ng g c @angular/material:navigation layout/app-shell

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running local production
add package http-server as dev dependency
npm i http-server
add npm script
"serve:prod": "http-server dist/angular-github-pages -c-1"
disable caching

## Angular Static Site Generator (SSG)
An alternative to server side rendering (SSR), the angular frontend can be converted to a static site with [scully](https://github.com/scullyio/scully/blob/master/README.md).

add scully package
ng add @scully/init

Routes with a route parameter have to be configured first.
In the root, open the file scully.{project-name}.config
Configure the route parameter resource origin.
E.g. you have a product detail page with a route parameter 'productId' then
configure the origin
router :{
    '/products/:productId': {
        type: 'jsoon',
        productId: {
            url: 'https://<your-product-detail-backend-resource-url>',
            property: 'product-id'
        }
    }
}

When generating the static site with the <strong>--scanroutes<strong> option scully will create a static site foreach product.


## Deploy to github pages

add package angular github pages
ng add angular-cli-ghpages
add npm script:
"deploy:github": "ng deploy --base-href=angular-gh-pages"

to publish
npm run deploy:github

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
