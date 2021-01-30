import { GET_NEWS, NEWS_RECEIVED } from "../Actions";


const Reducer=(state={},actions)=>{
    switch(actions.type){
        case GET_NEWS:
            console.log("Arrived")
            return{
                ...state,
                loading:true
            }
        case NEWS_RECEIVED:
            return{
                ...state,
                loading:false,
                // news:actions.json[0],
            }
        default:
            return state;
    }
}

export default Reducer;