# jsonl-to-csv-cli
A CLI tool written in JS for converting large json datasets to csv

This tool is intended to be used with the pipe (`|`) operator:

```shell
curl https://jsonplaceholder.typicode.com/todos | jq -r -c '.[]' | jsonl-to-csv --header true
```
will produce something like this:
```text
userId,id,title,completed
1,1,delectus aut autem,
1,2,quis ut nam facilis et officia qui,
1,3,fugiat veniam minus,
1,4,et porro tempora,1
1,5,laboriosam mollitia et enim quasi adipisci quia provident illum,
1,6,qui ullam ratione quibusdam voluptatem quia omnis,
```

Options:
* --header (json) - passes directly to [csv-stringify](https://csv.js.org/stringify/options/header/).
* --columns (json) - passes directly to [csv-stringify](https://csv.js.org/stringify/options/columns/). 
* --additional-fields (variadic option) - fields->values paris added to the csv (`"field1=val1" "field2=val2"`)
