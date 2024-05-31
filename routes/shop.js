const express = require("express");
const path = require("path");
const router = express.Router();
const shopController = require("../controllers/shop");
const isAuth = require("../middleware/is-auth");

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/cart", isAuth, shopController.getCart);
router.post("/cart", isAuth, shopController.postCart);
router.post("/cart/delete-item", isAuth, shopController.postDeleteCartItem);
// router.get('/checkout',shopController.getCheckout);
router.get("/orders", isAuth, shopController.getOrders);
router.post("/create-order", isAuth, shopController.postOrders);
router.get("/product-details/:productId", shopController.getProductDetail);

module.exports = router;
