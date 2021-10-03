import React, { useState } from 'react'
import {
    Admin, Resource, List, Datagrid,
    TextField, EmailField, ResourceComponentProps, UrlField
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'
import { ButtonField } from './FieldButton';
import { Button, Dialog, Divider } from '@material-ui/core';
import { JsonCodeBlock } from './JsonBlock';

export const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

export const App: React.FC = () =>
    <Admin dataProvider={dataProvider} >
        <Resource name="users" list={UserList} />
    </Admin>

export const UserList: React.FC<ResourceComponentProps> = props => {
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [record, setRecord] = useState<any | null>(null)
    return (
        <>
            <Dialog open={openDialog}>
                <JsonCodeBlock
                    code={JSON.stringify(record, null, 4)} />
                <Button variant="contained"
                    style={{ margin: '0 1rem 1rem 1rem' }}
                    onClick={() => setOpenDialog(false)} >CLOSE</Button>
            </Dialog>
            <List {...props}>
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="address.street" />
                    <TextField source="phone" />
                    <UrlField source="website" />
                    <TextField source="company.name" />
                    <ButtonField<any> label="View" buttonLabel="JSON"
                        onClick={(r) => {
                            setOpenDialog(true)
                            setRecord(r)
                        }} />
                </Datagrid>
            </List>
        </>
    )
}