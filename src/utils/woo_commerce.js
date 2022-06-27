import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://fairmall.azurewebsites.net",
  consumerKey: "ck_fae27ad294a4694df97fbff0c2f5c750ea903fb9",
  consumerSecret: "cs_fce27c3e3b5ed7127938da361b116f01998a266a",
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error) {
    return error.message;
  }
}
