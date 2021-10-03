import React from 'react'
import { UrlFieldProps, useRecordContext } from 'react-admin'

export const MyUrlField: React.FC<UrlFieldProps> = ({ source }) => {
    const record = useRecordContext()
    console.log(record)
    console.log('source', source)
    return record ? (
        <a href={record[source!]}>
            {record[source!]}
        </a>
    ) : null
}
