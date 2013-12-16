# Angular-style features using Knockout 3 and Durandal

Example showing some nice features Angular has in a Knockout 3 app using Durandal and Knockout.Punches

## Demos:

### {{ handlebars }}
Handlebars text insertion instead of the usual `data-bind="text: ..."`

```<h1>This is {{ someObservable }}.  I like it.</h1>```

### {{ handlebars | __textFilters__ }}
Text filters inside of handlebars:

```<h1>This is another {{ observable | uppercase }} with an uppercase  filter.</h1>```

### Transparent observables:
Eliminates need for `ko.observables` and `()`everywhere, use this:


    var someDynamicProp = 1;
    var x = someDynamicProp;

instead of:

    var someDynamicProp = ko.observable();
    someDynamicProp(1); // sets
    var x = someDynamicProp(); // gets

### No requirejs boilerplate
Example uses cajonjs to let you define requirejs modules without the usual `define(function(...) { ... })` boilerplate.

    var $ = require('jquery');
    function DurandalView() {
        var self = this;

        self.rules = 1;
        self.sucks = 1;
    }
    module.exports = DurandalView;


## Libraries

- **Knockout 3** - [http://knockoutjs.com](http://knockoutjs.com)
	- Used for data-binding between JavaScript models and the DOM
- **Knockout.Punches** - [http://mbest.github.io/knockout.punches/](http://mbest.github.io/knockout.punches/)
	- Uses new KO3 APIs to add Angular-style functionality.
- **Durandal** - [http://durandaljs.com](http://durandaljs.com)
	- SPA Application library built on Knockout and requirejs that adds advanced modules and view transition functionality.
- **Durandal observable plugin** - [http://durandaljs.com/documentation/Binding-Plain-Javascript-Objects/](http://durandaljs.com/documentation/Binding-Plain-Javascript-Objects/)
    - Durandal plugin eliminates need for `ko.observables` everywhere.
- **cajon** - [https://github.com/requirejs/cajon](https://github.com/requirejs/cajon)
	- requirejs loader for JavaScript modules which eliminates the need for `define(function(...) { ... })` boilerplate around your module.
