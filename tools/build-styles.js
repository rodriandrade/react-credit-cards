/*eslint-disable no-var, vars-on-top, no-console */
const { promisify } = require('util');
const { exec } = require('child_process');

const run = promisify(exec);

run('del /s /q .tmp')
  .then(() => run('node-sass -o .tmp/ src/styles.scss'))
  .then(() => run('postcss .tmp/styles.css --use autoprefixer --no-map -d .tmp/'))
  .then(() => run(`rename .tmp\\styles.css styles-compiled.css`))
  //.then(() => run('mkdir -p es lib'))
  .then(() => run('copy .tmp\\styles-compiled.css es\\ && copy .tmp\\styles-compiled.css lib\\'))
  .then(() => run('copy src\\styles.scss es\\ && copy src\\styles.scss lib\\'))
  .then(() => console.log('✔ Styles have been build'))
  .catch(err => {
    console.error(err);
  });