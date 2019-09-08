const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return {...state, loading: true}
        case 'NEWS_RECIEVED':
            return {...state, articles: action.articles, loading: false}
        default:
            return state
    }
}

export default reducer