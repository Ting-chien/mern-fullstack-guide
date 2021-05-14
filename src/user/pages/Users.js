import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Eric Wang',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      places: 3
    }
  ]
  return <UsersList items={USERS} />;
};

export default Users;
