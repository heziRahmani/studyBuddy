import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jsonwebtoken from "jsonwebtoken";
/////////////////////////////////////////////////////////////////////////////routes importes

import expressMethodsRouter from "./src/routes/expressRoutes/express_methods_Routes";
import authRouter from "./src/routes/useRoutes/usersRouts";
import reactGeneralRouter from "./src/routes/reactRoutes/reactGeneralRoutes";
import sqlGeneralRouts from "./src/routes/sqlRouter/sqlGeneralRouts";
const cors = require("cors");
const app = express();

const PORT = 4000;

//////////////////////////////////////////////////////////////////////////mongoose conection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/studdy_buddedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// app.use(function (req, res, next) {
//   res.set("Access-Control-Allow-Origin", "http://localhost:3000/");
//     res.set("Access-Control-Allow-Origin", "*");

//   next();
// });
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mysb.netlify.app/"],
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
///////////////////////////////////////////////////////////////////////////////// MIDDELEWARES
//jwt setup
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "theWitcher",
      (err, deCode) => {
        if (err) req.user = undefined;
        req.user = deCode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

///////////////////////////////////////////////////////////////////////////////////////////body-parser connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

////////////////////////////////////////////////////////////////////////////////////////////////////////////routs
app.get("/", (req, res) => {
  res.send("this is from the index file of study buddy");
});

// routes(app);
app.use("/expressmethods", expressMethodsRouter);
app.use("/auth", authRouter);
app.use("/reactgeneral", reactGeneralRouter);
app.use("/sqlgeneral", sqlGeneralRouts);

/////////////////////////////////////////////////////////////////////////////////////////////server listen func
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
/**
 * ERROR MIDDELEWARE
 */
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something is broken", err);
// });

/**
 * JWT MIDDELEWARE
 */
// app.use((req, res, next) => {
//   console.log(
//     jsonwebtoken.verify(req.headers.authorization.split(" ")[1], "theWitcher")
//   );
//   if (
//     req.headers &&
//     req.headers.authorization &&
//     req.headers.authorization.split(" ")[0] === "JWT"
//   ) {
//     let { email, _id, iat } = jsonwebtoken.verify(
//       req.headers.authorization.split(" ")[1],
//       "theWitcher"
//     );

//     if (!email) {
//       req.user = undefined;
//     } else {
//       req.user = {
//         email: email,
//         _id: _id,
//         iat: iat,
//       };
//       next();
//     }
//   } else if (!email || !_id || !iat) {
//     req.user = undefined;
//     next();
//   }
// });
