window.onload = function() {
  // Begin Swagger UI call region
  window.ui = SwaggerUIBundle({
    urls: [{url: "/api/openapi.yaml", name: "Zyner One API"}],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });
  // End Swagger UI call region

};
