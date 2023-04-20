const {
  createPost,
  updateAPost,
  deleteAPost,
  likeAPost,
  getAPost,
  timelinePost,
} = require("../controller/postController");

const router = require("express").Router();

router.post("/", createPost);

router.put("/:id", updateAPost);

router.delete("/:id", deleteAPost);

router.put("/:id/like", likeAPost);

router.get("/:id", getAPost);

router.get("/timeline/all", timelinePost);

module.exports = router;
