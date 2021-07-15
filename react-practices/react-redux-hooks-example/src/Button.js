import {useDispatch,useSelector} from 'react-redux'

export const ButtonClick = () =>{

    const dispatch = useDispatch();
    const data = useSelector(state => state.your_reducer)

    const click = () =>{
    alert(data)
    }

    return (
    <button onClick={click}>Click me!</button>
    )
}
