# MovableBoxes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy

- upload the content od 'dist/movable-boxes' to s3 bucket.
- update bucket public access to make content public
- update Bucket Policy -> to AllowPublicReadAccess
- enable Static website hosting in s3
- Endpoint will be displayed, and app can be accessed at the given endpoint

## Further help

Make sure to install node modules after cloning repository use 'npm install'
