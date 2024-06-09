# ERP Application Module - Trucks Management

This module is part of the first section of the ERP application, designed to manage trucks. The application is built with scalability in mind, allowing for additional modules in the future to manage various resources such as employees, factories, and customers.

## Quick start

1. Create `.env` file in root directory: 
   ```sh
   NEXT_PUBLIC_MANAGING_TRUCKS_API_URL=http://qa-api-mock-3.eu-central-1.elasticbeanstalk.com
2. Install dependencies:
   ```sh
   npm install
3. Start the development server:
   ```sh
   npm run dev

## Features

The Trucks Management module allows users to perform CRUD (Create, Read, Update, Delete) operations on trucks. Each truck has the following attributes and constraints:

- **Unique Alphanumeric Code**: Each truck must have a unique code consisting of alphanumeric characters.
- **Name**: Each truck must have a name.
- **Status**: Each truck must have a status that is one of the following:
  - **Out Of Service**
  - **Loading**
  - **To Job**
  - **At Job**
  - **Returning**
- **Description** (optional): Each truck may have a description.

### Status Transition Rules

The status of a truck can be managed according to the following rules:

1. **Out Of Service**:
   - Can be set regardless of the current status of the truck.
   - If the current status is "Out Of Service", any status can be set.

2. **Loading -> To Job -> At Job -> Returning**:
   - These statuses can only be changed in the specified order.
   - When a truck has the "Returning" status, it can be set to "Loading" again.

## Endpoints

The module provides the following endpoints for managing trucks:

- **Get Trucks**: Fetch a list of trucks.
- **Add Truck**: Add a new truck.
- **Update Truck**: Update the details of an existing truck.
- **Delete Truck**: Remove a truck.

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For state management and API requests.
- **React Hook Form**: For managing form state and validation.
- **TypeScript**: For type safety and code quality.



