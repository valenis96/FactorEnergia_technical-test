# Technical test

This project is a tecnical test for FactorEnergia.
Inside you can find:
- A login page where, if you enter incorrect credentials, a snackbar is shown to display the error. The inputs are required, so validation errors are shown if the form is empty.
  ```bash
  Correct credentials:
  email: val.maronese@gmail.com
  password: 123
  ```
- A private page with two buttons:
    - one to view your personal data
    - one to view your personal data
- A page where it is possible to view your personal data and edit it through the “Edit personal data” button, which opens a dialog with a form containing the data you can modify.
- A page where all the invoices are listed. The first invoice is opened by default, with its details shown on the left and the PDF displayed on the right. I used the pdfviewer.net library, which provides several features, including the ability to download the PDF.

## Technologies Used

- Angular 20
- Angular Material
- SCSS
- TypeScript
- RxJs
- Pdfviewer
- NgRx

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Autor

Valentina Maronese

