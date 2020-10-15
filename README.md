# estlif

template engine based on ECMAscript template literals

## Usage

```
import estlif from 'estlif';

// render template from file into string variable
const renderedTemplate = estlif(`${__dirname()}/path/to/template.estlif`, { data: 'hello world' });
```
