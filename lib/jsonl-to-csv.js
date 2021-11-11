const split = require('split2');
const stringify = require('csv-stringify');
const {Transform} = require('stream');
const {pipeline} = require('stream/promises');

module.exports = (args) => {

  args.additionalFields = args.additionalFields || [];
  const header = JSON.parse(args.header);
  const columns = JSON.parse(args.columns);

  return pipeline(
    process.stdin,
    split(),
    new Transform({
      readableObjectMode: true,
      transform(json, encoding, callback) {

        let item = args.additionalFields.reduce((item, fieldValStr) => {
          const [field, val] = fieldValStr.split("=");
          item[field] = val;
          return item;
        }, JSON.parse(json));

        callback(null, item)
      }
    }),
    stringify({header, columns}),
    process.stdout
  );

}