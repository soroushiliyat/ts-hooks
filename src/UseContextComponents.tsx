import UserContext, { UserState } from './store'
import { useState, useContext } from 'react'


function ConsumerComponents(){
    const user = useContext<UserState>(UserContext);

    return (
        <div>
            <div>first: {user.first}</div>
            <div>last: {user.last}</div>
        </div>
    )
}


function UseContextComponents(){

    const [user, userSet] = useState<UserState>({
        first: 'jane',
        last: 'Smoke',
    })

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponents />
            <button onClick={() => userSet({
                first:'Soroush',
                last:'iliyat',
            })}>Change</button>
        </UserContext.Provider>
    )
}

export default UseContextComponents