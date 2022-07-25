export const baseUrl = 'https://fairmall-v1.herokuapp.com/api/v1';


// MANAGE PRODUCTS 
export const getProducts = baseUrl + "/user/product"
export const getProduct = (id) => baseUrl + `/user/product/${id}`

// MANAGE CATEGORY
export const getCategories= baseUrl + "/user/category"
export const getCategory = (slug) => baseUrl + `/user/category/${slug}`

// MANAGE INSPIRATIONS
export const getInspirations= baseUrl + "/user/inspiration"
// export const getInspiration = (slug) => baseUrl + `/user/inspiration/${slug}`

// MANAGE FAVORITES
export const addToFavorites= baseUrl + "/user/favourite"
export const getFavorites = baseUrl + "/user/favourite"
export const removeFromFavorite = baseUrl + "/user/favourite/remove"
export const emptyFavorites = baseUrl + "/user/favourite/empty"

//MANAGE USER
export const registerUser= baseUrl + "/auth/register"
export const loginuser = baseUrl + "/auth/login"
export const getProfile = baseUrl + "/user/profile"
export const updateProfile = baseUrl + "/user/profile"
