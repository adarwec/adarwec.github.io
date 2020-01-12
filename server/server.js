const ProxyServer = require("@utils/proxy-server");

const server = new ProxyServer({
  proxyPath: `${__dirname}/proxy.json`,
  staticDir: `${__dirname}/../dist`,
  apiBaseUrl: `/api/v1`,
  port: 3007
});

server.run();
