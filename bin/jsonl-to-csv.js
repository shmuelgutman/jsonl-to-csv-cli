#!/usr/bin/env node

const {program} = require('commander');
const jsonlToCsv = require('../lib/jsonl-to-csv');

program
  .option('--header <header>', 'The header of the csv file (json)', 'null')
  .option('--columns <columns>', 'An array JSON of the columns', 'null')
  .option('--additional-fields <fields...>')
  .action(jsonlToCsv);

program.parseAsync()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
