# :zap: Angular Tomtom API

* Angular app to display map data from the [Tomtom API](https://developer.tomtom.com/)

* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-tomtom-api?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-material-api?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-material-api?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-material-api?style=plastic)

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular Tomtom API](#zap-angular-tomtom-api)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Displays a [Tomtom](https://developer.tomtom.com/maps-api/maps-api-documentation) zoomable map

## :camera: Screenshots

![Example screenshot](./img/map.png)
![Example screenshot](./img/detail.png)

## :signal_strength: Technologies

* [Angular v12](https://angular.io/)
* [Node module: @tomtom-international/web-sdk-maps v6](https://www.npmjs.com/package/@tomtom-international/web-sdk-maps)
* [Tomtom developer API](https://developer.tomtom.com/)

## :floppy_disk: Setup

* Install dependencies by running `npm i`
* See [Tomtom: Angular Map Display API integration tutorial](https://developer.tomtom.com/maps-sdk-web-js-public-preview/tutorials-basic/angular-map-display-api-integration-tutorial) and add code as shown
* Get yourself an [API key from Tomtom](https://developer.tomtom.com/how-to-get-tomtom-api-key) - it's free :-)
* Run `ng test` to run some simple Jasmin tests on Karma. Passes as there are no tests set up.
* Run `ng lint` to check syntax using TSLint. Currently all files passing :-) Note [TSLint will be replaced with ESLint](https://github.com/palantir/tslint/issues/4534)
* Run `ng serve` to start a server on port 4200
* `ng build --prod` to create build file in `dist/angular-tomtom-api` directory.

## :computer: Code Examples

* extract from `app.component.ts` to set up Tomtom map constant

```typescript
    import tt from '@tomtom-international/web-sdk-maps';

    const map = tt.map({
        key: '<your maps api key>',
        style: 'tomtom://vector/1/basic-main',
        container: 'map'
    });
```

## :cool: Features

* Not much code required to get a zoomable world map
* Some basic Jasmine tests added that all pass

## :clipboard: Status & To-Do List

* Status: Working. Updated may 2021. Size of build file: 1.4MB
* To-Do: add functionality like route planning or traffic congestion. Await clearer Tomtom Angular documentation for advanced projects. Add routing or remove routing module. Remove rxjs if not used (If keeping then latest v7 would have to be reverted to v6.6.7).

## :clap: Inspiration

* [Tomtom: Angular Map Display API integration tutorial](https://developer.tomtom.com/maps-sdk-web-js-public-preview/tutorials-basic/angular-map-display-api-integration-tutorial)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
