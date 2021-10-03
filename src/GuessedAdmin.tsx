import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { dataProvider } from './App';

export const GuessedAdmin: React.FC = () => <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
</Admin>;
