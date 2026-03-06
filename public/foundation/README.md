How to run foundation:
- `npm install`
- `npm install -g sass` (install Dart sass globally. Mac OS might require `sudo npm install -g sass`)
- `sass scss/custom.scss styles/custom.css` (to compile custom styles from sass to css)
- open live server

Color aliases:
- primary
- primary-light
- primary-lighter
- secondary
- secondary-dark
- secondary-darker
- success
- alert

You can customize components by modifying `scss/_settings.scss`. Within this file you can reference colors from `$foundation-palette` with the `get-color()` function. For example, `$body-background: get-color(primary-light);`. Some colors can also be referenced directly as sass variables.

Foundation doesn't use utility classes, so if you would like to customize your code beyond Foundation's components and `scss/_settings.scss`, you should do it with css.