import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://fairmall.azurewebsites.net",
  consumerKey: "ck_fae27ad294a4694df97fbff0c2f5c750ea903fb9",
  consumerSecret: "cs_fce27c3e3b5ed7127938da361b116f01998a266a",
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function FetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response.data;
  } catch (error) {
    return error.message;
  }
}

//fetch product by id
export async function FetchProductById(id) {
  try {
    const response = await api.get(`products/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function FetchProductCategories() {
  try {
    const response = await api.get("products/categories", { per_page: 50, parent: 0 });
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function FetchCategoryById(id) {
  try {
    const response = await api.get(`products/categories/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function FetchProductByCategory(id) {
  try {
    const response = await api.get(`products`, { category: id, per_page: 10 });
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function FetchInspirations(id) {
  try {
    const response = await api.get("products", { category: id });
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function FetchTaxes() {
  try {
    const response = await api.get("taxes");
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function FetchTax(id) {
  try {
    const response = await api.get(`taxes/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function FetchPaymentGateways() {
  try {
    const response = await api.get("payment_gateways");
    return response.data;
  } catch (error) {
    return error.message;
  }
}
