/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Select, { Option } from 'rc-select-pro';
import { BaseOptionType } from 'es/Select';

function requestOptions() {
    return new Promise<BaseOptionType[]>(resolve => {
        setTimeout(() => {
            resolve([
                { label: 'Apple', value: 'apple' },
                { label: 'Orange', value: 'orange' },
                { label: 'Watermelon', value: 'watermelon' },
            ])
        }, 3_000);
    })
}

export default function Missing() {
    const [value, setValue] = useState('')
    const [options, setOptions] = useState([])

    useEffect(() => {
        requestOptions().then((options) => {
            console.log(options)
            setOptions(options)
        })
    }, [])

    useEffect(() => {
        setValue('Grape')
    }, [])

    return (
        <>
            <Select
                value={value}
                options={options}
                onChange={(value) => setValue(value)} />
            <hr />
            <Select
                value={value}
                options={options}
                onChange={(value) => setValue(value)}
                missingRetryCount={3}
                onMissing={(value, options) => {
                    console.log('onMissing', value, options)
                }}
                afterMissing={(value, options) => {
                    return [...options]
                    // return [{ label: value, value: value }, ...options]
                }}
            />
        </>
    )
}