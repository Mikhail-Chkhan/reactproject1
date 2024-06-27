import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponents from "./components/UserComponents/UserComponents";


const App:FC = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
        .then(value => value.json())
        .then(value => {
          console.log(value.users)
          setUsers(value.users);
        });
  }, []);
  console.log(".")

  return (
      <div>
        {
            users.map(({firstName,lastName,maidenName,id}) =>
              <UserComponents
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  maidenName={maidenName}
              />)
        }

            </div>
  );
}

export default App;