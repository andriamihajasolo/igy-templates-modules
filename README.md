# IgyTemplatesModules

# INSTALLATION

## Ajouter la dépendance dans package.json
```json
"dependencies": {
    "igy-templates-modules": "git://github.com/andriamihajasolo/igy-templates-modules"
}
```
=> copier igy-templates-modules dans le répértoire node_modules

=> importer IgyTemplatesModulesModule dans app.module.test

import { IgyTemplatesModulesModule } from 'igy-templates-modules'
```javascript
@NgModule({

    imports: [
        IgyTemplatesModulesModule,
        ...
    ],
    providers: [],
    bootstrap: [AppComponent]
})
```
=> Importer styles "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css" dans angular.json

=> Importer styles "./node_modules/bootstrap/dist/css/bootstrap.min.css" dans angular.json

=> Importer styles "./node_modules/igy-templates-modules/assets/sass/app.scss" dans angular.json
````javascript
"styles": [
    "src/styles.scss",
    "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
    "./node_modules/igy-templates-modules/assets/sass/app.scss",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
````

# DEPENDENCES

- "@angular/material": "^13.2.4"

- "bootstrap": "^5.1.3"

- "material-icons": "^1.10.7"
