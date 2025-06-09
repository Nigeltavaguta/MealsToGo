import { mocks } from './mock';
import camelize from "camelize"

export const restaurantRequest = (location = "41.878113,-87.629799") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("No data found for the specified location");
        }
        resolve(mock);
    });
};

export const restaurantsTransform = (result) => {
    const mappedResults = result.map((restaurant) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            address: restaurant.vicinity,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });
    return camelize(mappedResults);
}

