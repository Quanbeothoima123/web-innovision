const app = require("./src/app");
const { env } = require("./src/config/env");

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`[backend] listening on http://localhost:${env.port}`);
});
