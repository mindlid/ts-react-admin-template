import React from 'react'
import { Admin, Resource, ListGuesser, List, Datagrid, TextField, EmailField, ResourceComponentProps } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'

export const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

export const App: React.FC = () =>
    <Admin dataProvider={dataProvider} >
        <Resource name="users" list={UserList} />
    </Admin>


export const UserList: React.FC<ResourceComponentProps> = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
)