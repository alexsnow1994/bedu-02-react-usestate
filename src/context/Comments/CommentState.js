import { useReducer } from "react";
import CommentReducer from "./CommentReducer"
import CommentContext from "./CommentContext";
import axiosClient from "../../config/axios";


const CommentState = (props)=>{
// estado global con valor incial 
    const initialState = {
        comments: []
    }
// configuracion del reducer
    const [globalState, dispatch] = useReducer(CommentReducer ,initialState);
// funciones 
    const getAllComments = async () => {
        const res = await axiosClient.get("/api/comments/readall")
        console.log(res);
    }
//Retorno 
    return(
        <CommentContext
        value={{
            comments:globalState.comments,
            getAllComments
        }}
        >
            {props.children}
        </CommentContext>
    )
}

export default CommentState