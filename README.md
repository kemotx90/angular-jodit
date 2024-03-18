# angular-jodit

angular-jodit is a streamlined and small project that allows you to use `Jodit` within an angular project without compromise.
To allow angular users (including me) a quick approach to using it,
the jodit editor has been wrapped inside a component that allows you to manage the text in the editor in compiling and retrieving,
using the most classic angular reactive forms, specifically, it is sufficient to use a

```typescript 
FormControl<string>
```

The component is a standalone component that needs to be imported in order to be used, as it is done for example for the Angular CKD.
The component uses Signal (default for Angular 17) for proper synchronization and refresh.

N.B. This project is a self-taught project aimed at helping those who use Jodit for Angular.
We are not affiliated with the developers of Jodit, who we would like to thank for their excellent work.

## Version

| Jodit           | Angular | angular-jodit |
|-----------------|---------|---------------|
| 4.0.0-beta.117+ | 17+     | 0.0.6+        |

## Installation

Import this dependency into your project in the following way, use `npm i --save angular-jodit` or `npm i -D --save angular-jodit`,
whatever you prefer.

## Usage

In TS File

```typescript
@Component({})
export class MyComponent {

  editorTextForm = this.formBuilder.nonNullable.control('');

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

}
```

In HTML Template

```html

<angular-jodit [formControl]="editorTextForm" [options]="joditConfig"></angular-jodit>
```

joditConfig is an object that contains the editor's configurations and it is the same object that you can find explained in the official jodit documentation.

Example of joditConfig

```typescript
joditConfi: any = {
  observer: {
    timeout: 100
  },
  buttons: [
    'fontsize', 'brush', '|',
    'bold', 'italic', 'underline', 'strikethrough', '|',
  ],
  textIcons: false,
  spellcheck: true,
  width: 'auto',
  height: 'auto',
  language: 'en',
  toolbar: true,
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
  toolbarButtonSize: "middle" as any,
  theme: 'default',
  useSplitMode: false,
  colorPickerDefaultTab: 'color' as any,
  removeButtons: [],
  disablePlugins: [],
  events: {}
}
```

## License

MIT

## Contact Information

Use the git channel for bugs and requests.

## Changelog

* V.0.0.1. First publication.
* V.0.0.2 - V.0.0.6 Minor Fix configuration.
* V.0.0.7 - Fix Signal Effect.
* V.0.1.0 - improved the cohesion between jodit and the reactive form + update dependencies.
* V.0.1.1 - Update angular dependencies to 17.1.0 (Remove axios vulnerability [GIT](https://github.com/angular/angular-cli/issues/26349)).
* V.0.1.2 - Update angular dependencies to 17.1.1 (Remove vite vulnerability [GIT](https://github.com/angular/angular-cli/issues/26916)).
* V.0.1.3 - V.0.1.4 - Improved event catching for update formControl.
* V.0.1.5 - Update angular dependencies to 17.2.1 (Remove NPM IP vulnerability [GIT](https://github.com/advisories/GHSA-78xj-cgh5-2h22)).
* V.0.1.6 - Update angular dependencies to 17.3.0 (Follow-redirects).

## BUILD

```shell
ng build angular-jodit
cd dist/angular-jodit
npm publish
```
