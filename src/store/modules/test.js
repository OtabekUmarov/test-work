import axios from 'axios'
export const state = () => ({
    tests: [],
    list: []
})

export const getters = {
   list: (state) => {return state.list}
}

export const mutations = {
    setState(state,{key,payload}){
        state[key] = payload
    }
}

export const actions = {
    async fetchList({commit}){
        let res = await axios.get('http://localhost:3000/test')
        commit('setState', {key: 'list', payload: res.data})
        return res
    },
    async fetchListType1({commit}){
        let res = await axios.get('http://localhost:3000/test?type=1')
        if(res.status == 200) {
            res.data.forEach(async el =>{
                let answers = await axios.get(`http://localhost:3000/answers?question_id=${el.id}`)
                el.answers = answers.data
                el.correct = null
            })
        }
        commit('setState', {key: 'tests', payload: res.data})
        return res
    },
    async checkFinished(ctx,{form}){
        const tests = ctx.state.tests
        let count = 0
        console.log(form)
        form.forEach(item => {
            tests.forEach(test => {
                if(test.id == item.question_id) {
                    test.answers.forEach(a => {
                        if(a.id == item.answer_id) {
                            if (a.is_correct) count++
                        }
                    })
                }
            })
        });
        return count
    },
    async createItemTest1(_, {form}){
        let question = {
            question: form.question,
            type: 1
        }
        let res = await axios.post('http://localhost:3000/test', question)
        if (res.status == 201) {
            form.answers.forEach(async item => {
                let answer = {
                    question_id: res.data.id,
                    answer: item.answer,
                    is_correct: item.is_correct
                }
                await axios.post('http://localhost:3000/answers', answer)
            });
        }
    },
    async createItemTest2(_, {form}){
        let question = {
            question: form.question,
            type: 2
        }
        let res = await axios.post('http://localhost:3000/test', question)
        if (res.status == 201) {
            form.answers.forEach(async item => {
                let answer = {
                    question_id: res.data.id,
                    answer: item.answer,
                    is_correct: item.is_correct
                }
                await axios.post('http://localhost:3000/answers', answer)
            });
        }
    },
    async createItemWriting(_, {form}){
        let question = {
            question: form.question,
            type: 3
        }
        let res = await axios.post('http://localhost:3000/test', question)
        console.log(res)
    }
}
