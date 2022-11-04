const { Router } = require("express");

const { admin_login, admin_signup } = require("../controllers/authController");

const {
  insert_book,
  remove_book,
  update_book,
  returnBook,
  viewAllUsers,
  viewAllIssuedBookswithUser,
} = require("../controllers/adminController");

const {
  viewAllBooks,
  viewAllAvailableBooks,
} = require("../controllers/commonController");

const { requireAdminAuth } = require("../middleware/authAdminMiddleWare");
const adminRouter = Router();

adminRouter.post("/login/admin", admin_login);
adminRouter.post("/signup/admin", admin_signup);
adminRouter.post("/insert", requireAdminAuth, insert_book);
adminRouter.post("/delete/:id", requireAdminAuth, remove_book);
adminRouter.post("/update/:id", requireAdminAuth, update_book);
adminRouter.post("/returnBook/:id", requireAdminAuth, returnBook);
adminRouter.post("/viewAllUsers", requireAdminAuth, viewAllUsers);

adminRouter.get("/viewAllBooks", requireAdminAuth, viewAllBooks);
adminRouter.get(
  "/viewAllAvailableBooks",
  requireAdminAuth,
  viewAllAvailableBooks
);
adminRouter.post(
  "/viewAllIssuedBookswithUser",
  requireAdminAuth,
  viewAllIssuedBookswithUser
);
module.exports = adminRouter;
