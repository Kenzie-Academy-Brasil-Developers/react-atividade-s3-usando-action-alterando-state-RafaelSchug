import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import {useState} from 'react';


const UserCard = () => {

    const dispatch = useDispatch();
    const [newName, setNewName] = useState('');

    const handleClick = () => {
        dispatch(changeName(newName));
    }

    const {name} = useSelector(state => state.user);


    return (
        <div>
            <h3>Name: {name}</h3>
            <input type="text" placeholder="New Name:" onChange={e => setNewName(e.target.value)} value={newName}/>
            <button onClick={handleClick}>Change</button>
        </div>
    )

}

export default UserCard;