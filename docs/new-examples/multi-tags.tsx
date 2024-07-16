/* eslint-disable no-console */
import React from 'react';
import Select, { Option } from 'rc-select-pro';

export default function MultiTags() {
    return (
        <Select options={[
            { label: 'a', value: 'a' },
            { label: 'b', value: 'b' },
            { label: 'c', value: 'c' },
        ]} defaultValue={'d'} tagRender={(props) => {
            return (
                <>
                    <span>{props.label}</span>
                    <span onClick={() => props.close()}>#</span>
                </>
            )
        }} />
    )
}