# jasmine-requirejs-example

**Tools**:
- Jasmine
- RequireJS
- JSCover

**Dependencies**:
- Java
- PhantomJS

**Instructions**:

Run unit tests:

- Open: `spec/SpecRunner.html`

Run unit tests with coverage:

- Run: `$ cd tools && ./jscover-server.sh`

- Open: [http://localhost:8080/jscoverage.html?test/specRunner.html](http://localhost:8080/jscoverage.html?test/specRunner.html), or
- Run:

        $ cd tools && phantomjs run-jscover-jasmine2.js http://localhost:8080/test/specRunner.html
