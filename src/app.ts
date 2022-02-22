import fs from "fs";
import Koa from "koa";
import morgan from "koa-morgan";

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(__dirname + "/access.log", {
  flags: "a+",
});
const app = new Koa();

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

app.use((ctx) => {
  ctx.body = "hello, world!";
});

app.listen(2333, () => console.log('app launch on port :2333'));
