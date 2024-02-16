const BASE_URL = "http://localhost:5500/";

export const FOODS_URL = BASE_URL + 'api/foods'; // '/api/foods'
export const FOOD_SEARCH_URL = FOODS_URL + '/search/'; // '/api/foods/search/:searchTerm'
export const TAG_URL = FOODS_URL + '/tags'; // '/api/foods/tags'
export const TAG_FILTER_URL = FOODS_URL + '/tag/'; // '/api/foods/tag/:tagName'
export const FOOD_BY_ID_URL = FOODS_URL + '/'; // '/api/foods/:foodId'

export const USER_LOGIN_URL = BASE_URL + 'api/users/login';