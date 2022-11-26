import axios from 'axios'
export const state = () => ({
courses:  [
    {
        id: 1,
        name: "1 - kurs",
    },
    {
        id: 2,
        name: "2 - kurs",
    },
    {
        id: 3,
        name: "3 - kurs",
    },
    {
        id: 4,
        name: "4 - kurs",
    }],
    list: []
})

export const getters = {
   list: (state) => {return state.list},
   courses: (state) => {return state.courses}
}

export const mutations = {
    setState(state,{key,payload}){
        state[key] = payload
    }
}

export const actions = {
    async fetchList({commit}){
        let res = await axios.get('http://localhost:3003/students')
        commit('setState', {key: 'list', payload: res.data})
        return res
    },
    async fetchDetail(_,id){
        let res = await axios.get(`http://localhost:3003/students/${id}`)
        return res
    },
    async createItem(_, {form}){
        let res = await axios.post('http://localhost:3003/students', form)
        return res
    },
    async updateItem(_, {form}){
        let res = await axios.patch(`http://localhost:3003/students/${form.id}`, form)
        return res
    },
    async delete(_, id){
        let res = await axios.delete('http://localhost:3003/students/' + id)
        return res
    },
}
