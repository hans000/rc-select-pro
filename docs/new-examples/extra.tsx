/* eslint-disable no-console */
import React from 'react';
import Select, { Option } from 'rc-select-pro';

export default function LabelInValue() {
    return (
        <Select
            mode='multiple'
            maxTagCount={1}
            // labelInValue
            onChange={(value, option) => {
                console.log(value, option)
            }}
            options={[
                { label: 'a', value: 'a', other: 'a' },
                { label: 'b', value: 'b', other: 'b' },
                { label: 'c', value: 'c', other: 'c' },
            ]}
            maxTagPlaceholder={(omitDomProps) => {
                return []
            }}
            tagRender={(props) => {
                return <>{props.label}</>
            }}
            onSelect={(value, option) => {
                console.log(value, option)
            }} />
    )
}