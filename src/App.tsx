import React, {FC} from 'react';

import {
  LoginPage, CreateTablePage,
  CreateUserPage
} from '~/components/pages';

import './App.css';

const App:FC = () =>{
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
