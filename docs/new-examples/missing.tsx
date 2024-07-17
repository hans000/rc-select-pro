/* eslint-disable no-console */
import React from 'react';
import Select, { Option } from 'rc-select-pro';

export default function Missing() {
    return (
        <>
            <Select options={[
                { label: 'a', value: 'a' },
                { label: 'b', value: 'b' },
                { label: 'c', value: 'c' },
            ]} defaultValue={'d'} missingRetryCount={3} afterMissing={(value, option) => {
                console.log(value, option)
                return [{ label: 'd', value: 'd' }]
            }} tagRender={(props) => {
                return (
                    <>
                        <span>{props.label}</span>
                        <span onClick={() => props.close()}>#</span>
                    </>
                )
            }} />
            <Select options={[
                { label: 'a', value: 'a' },
                { label: 'b', value: 'b' },
                { label: 'c', value: 'c' },
            ]} defaultValue={'d'} missingRetryCount={3} afterMissing={(value, option) => {
                console.log(value, option)
                return [{ label: 'e', value: 'e' }]
            }} tagRender={(props) => {
                return (
                    <>
                        <span>{props.label}</span>
                        <span onClick={() => props.close()}>#</span>
                    </>
                )
            }} />
        </>
    )
}