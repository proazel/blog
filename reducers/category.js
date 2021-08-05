const initialState = {
    menu:[
        {
            id:'1',
            category:'HTML',
            url:'/posts/HTML',
        },
        {
            id:'2',
            category:'SubMenu22',
            url:'/posts/2',
        },
        {
            id:'3',
            category:'SubMenu33',
            url:'/posts/3',
        },
        {
            id:'4',
            category:'SubMenu44',
            url:'/posts/4',
        },
        {
            id:'5',
            category:'SubMenu55',
            url:'/posts/5',
        }
    ]
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;