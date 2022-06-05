# VOIS Assignment

### Description

VOIS Assignment

### Installation

use `yarn install` to install the dependencies

### Usage

Filter and click on any school that are listed in the aside

## Architecture and Tools

1. I decided to configure webpack instead of using CRA to be able to scale up the project configuration in adding new webpack dependencies like Module Federation plugin(micro front end) and etc..
2. I used redux to apply the single source of truth and enforce code structure while dealing with state
3. I added eslint and prettier to enforce code structure and Quality
4. every module stand alone with it's own types
5. every file includes file header for describe the what is type or what is includes
6. every file in utilities folder include JS-DOC documentation (description, function, params, return)

in advance I can use Husky for pre-commit action
