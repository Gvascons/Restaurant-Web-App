import Api from './api'

const RestaurantService = { 
    getAdmById: async (id) => {
        const { data } = await Api.get(`/admin/${id}`, id)
        return data
    },

    createNewRestaurant: async (id, restaurant) => {
        const { data } = await Api.post(`/admin/addRestaurant/${id}`, restaurant)
        return data
    },

    updateRestaurant: async (id, restaurant) => {
        const { data } = await Api.post(`/admin/editRestaurant/${id}`, restaurant)
        return data
    },

    deleteRestaurant: async (idAdm, idRest) => {
        const { data } = await Api.post(`/admin/deleteRestaurant/${idAdm}`, idRest)
        return data
    }
}

export default RestaurantService