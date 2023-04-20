const {
  updateUser,
  deleteUser,
  getAUser,
  followUser,
  unFollowUser,
} = require("../controller/userController");
const router = require("express").Router();

// update user
router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get("/:id", getAUser);

router.put("/:id/follow", followUser);

router.put("/:id/unfollow", unFollowUser);

module.exports = router;
