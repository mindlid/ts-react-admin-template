import React from 'react'
import { useRecordContext } from 'react-admin'

type ButtonFieldProps<T> = {
    label: string
    buttonLabel: string
    onClick: (record: T) => void
}

export const ButtonField = <T extends unknown>({ buttonLabel, onClick }: ButtonFieldProps<T>) => {
    const record = useRecordContext() as T
    return record ? (
        <button
            style={{ outline: 1 }}
            onClick={() => onClick(record)}>
            {buttonLabel}
        </button>
    ) : null
}
