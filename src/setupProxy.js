const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Prefixo da URL para redirecionar para o proxy (pode ser qualquer coisa)
    createProxyMiddleware({
      target: "https://api.football-data.org", // URL da API de destino
      changeOrigin: true, // Altera a origem para o destino para evitar problemas de CORS
      // Outras opções de proxy, se necessário
    })
  );
};
