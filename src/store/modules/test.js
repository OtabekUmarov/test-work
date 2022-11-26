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
        let res = await axios.get('http://localhost:3003/test')
        commit('setState', {key: 'list', payload: res.data})
        return res
    },
    async fetchListType({commit}, {type}){
        let res = await axios.get(`http://localhost:3003/test?type=${type}`)
        if(res.status == 200 && type != 3) {
            res.data.forEach(async el =>{
                let answers = await axios.get(`http://localhost:3003/answers?question_id=${el.id}`)
                let shuffleAnswer = shuffle(answers.data)
                el.answers = shuffleAnswer
                el.correct = null
            })
        } else if(res.status == 200 && type == 3) {
            res.data.forEach(async el =>{
                el.correct = ''
            })
        }
        res.data.status = true
        let shuffleArray  = shuffle(res.data)
        res.data = shuffleArray
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
    async checkFinishedWriting(_,{form}){
        console.log(form)
        return 'Javoblaringiz yuborildi!!!'
    },
    async createItemTest1(_, {form}){
        let question = {
            question: form.question,
            type: 1
        }
        let res = await axios.post('http://localhost:3003/test', question)
        if (res.status == 201) {
            form.answers.forEach(async item => {
                let answer = {
                    question_id: res.data.id,
                    answer: item.answer,
                    is_correct: item.is_correct
                }
                await axios.post('http://localhost:3003/answers', answer)
            });
        }
    },
    async createItemTest2(_, {form}){
        let question = {
            question: form.question,
            type: 2
        }
        let res = await axios.post('http://localhost:3003/test', question)
        if (res.status == 201) {
            form.answers.forEach(async item => {
                let answer = {
                    question_id: res.data.id,
                    answer: item.answer,
                    is_correct: item.is_correct
                }
                await axios.post('http://localhost:3003/answers', answer)
            });
        }
    },
    async createItemWriting(_, {form}){
        let question = {
            question: form.question,
            type: 3
        }
        let res = await axios.post('http://localhost:3003/test', question)
        console.log(res)
    },
    async delete(_, id){
        let res = await axios.delete('http://localhost:3003/test/' + id)
        let answers = await axios.get(`http://localhost:3003/answers?question_id=${id}`)
        answers.data.forEach(el => {
            axios.delete('http://localhost:3003/answers/' + el.id)
        });
        return res
    },
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }