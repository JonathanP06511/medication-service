# Information API

This project is a SOAP API service for medication management built with Node.js and Express. It uses the `soap` package to implement the web service and handles SOAP requests for medications.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Express**: Framework for Node.js that facilitates web application development.
- **SOAP**: Library for handling SOAP web services.
- **body-parser**: Middleware for parsing request bodies.
- **fs**: Node.js module for interacting with the file system.
- **path**: Node.js module for manipulating file paths.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/JonathanP06511/medication-service.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The SOAP service will be available at `http://localhost:3030/soap/medicationService`.

## Project Structure

- `src/index.js`: Main file where the Express server and SOAP service are configured.
- `src/services/medicationService.js`: File that defines the SOAP service for medication management.
- `soap/medicationService.wsdl`: WSDL file that defines the SOAP service interface.

## Docker

To run this project in a Docker container:

1. Build the Docker image:
    ```bash
    docker build -t medication-service .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3030:3030 medication-service
    ```

3. The SOAP service will be available at `http://localhost:3000/soap/medicationService` inside the Docker container.

## Documentation

The SOAP service is based on the WSDL file located at `soap/medicationService.wsdl`, which defines the service methods and data structures. You can use tools like SoapUI or Postman to test the SOAP methods using this WSDL file.
