[![Build Status](https://travis-ci.org/SAP/openui5-basic-template-app.svg?branch=master)](https://travis-ci.org/SAP/openui5-basic-template-app)
![OpenUI5 logo](http://openui5.org/images/OpenUI5_new_big_side.png)

# sapui5_login
Simple login page with session control

## More information
* [UI5 Tooling](https://github.com/SAP/ui5-tooling)

## Prerequisites
The **UI5 build and development tooling command line interface (UI5 CLI)** has to be installed.
For installation instructions please see [Installing the UI5 CLI](https://github.com/SAP/ui5-tooling#installing-the-ui5-cli).

## Setup
1. Clone the repository and navigate into it
    ```sh
    git clone https://github.com/vinibar/sapui5_login.git
    cd sapui5_login
    ```
1. Install all dependencies
    ```sh
    npm install
    ```

1. Start a local server and run the application (http://localhost:8080/index.html)
    ```sh
    npm run start
    ```

## Testing
* Run ESLint code validation
    ```sh
    npm run lint
    ```
* Start a local server and execute the tests automatically after every change
    ```sh
    npm run watch
    ```
* Run ESLint, start a local server and run the tests in CI mode
    ```sh
    npm test
    ```

For more build and development options please see: [UI5 Build and Development Tooling](https://github.com/SAP/ui5-tooling)

## Support
This repository is based on the [OpenUI5 template demo apps](https://openui5.hana.ondemand.com/#/demoapps) and updated regularly with our latest recommendations. 
If you found a bug, please create an [OpenUI5 issue](https://github.com/sap/openui5/issues). Thank you!
