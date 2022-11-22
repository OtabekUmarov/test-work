export const state = () => ({
    employeeList: [
        {
            id: 1,
            firstName: "Tohir",
            lastName: "Usenov",
            middleName: "Musa o'g'li",
            birthdate: "14.03.2002",
            nationality: "O'zbek",
            birthPlace: "Chinoz shaxri"
        },
        {
            id: 2,
            firstName: "Jahongir",
            lastName: "Musayev",
            middleName: "Xasan o'g'li",
            birthdate: "15.07.2015",
            nationality: "O'zbek",
            birthPlace: "Toshkent shaxri"
        },
        {
            id: 3,
            firstName: "Xasan",
            lastName: "Usenov",
            middleName: "Musa o'g'li",
            birthdate: "13.12.1990",
            nationality: "O'zbek",
            birthPlace: "Jizzax shaxri"
        },
    ],

})

export const getters = {
    getEmployeeList(state) {
        return state.employeeList
    }
}

export const mutations = {
    setEmployeeList(state, payload) {
        state.employeeList = payload
    }
}
