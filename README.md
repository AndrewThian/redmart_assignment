# contact-manager

Simple contact manager built with VueJS (vuex, vuerouter and vueresource). With Firebase as a simple database to store persistent data. Depolyed [here](http://contact-manager-deploy.s3-website-ap-southeast-1.amazonaws.com/) on S3 amazon web services. Features include:

* CRUD Actions for contacts
* search filter for contacts
* order contacts via name or email
* persisting data on a database

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## Build with

* Webpack + Vue CLI
* Vuex - state management
* VueRouter - routes and history
* VueResource - HTTP requests
* Bootstrap for styling
