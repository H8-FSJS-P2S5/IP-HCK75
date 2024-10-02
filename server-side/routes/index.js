const favGamesController = require("../controller/FavoriteGameController");
const ProfileController = require("../controller/ProfileController");
const UserController = require("../controller/UserController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const errorHandler = require("../middlewares/errorHandler");
const favGames = require("./favGamesRoutes");
const games = require("./gamesRouter");
const profile = require("./profileRouter");

const router = require("express").Router();

router.use("/login", UserController.login);
router.use("/register", UserController.register);

router.use(authentication)

router.use("/profile", profile);
router.use("/fav-games", favGames);
router.use("/games", games);

router.use(errorHandler)

module.exports = router;