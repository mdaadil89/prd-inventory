import React from 'react';

export default function Rtif({boolean, ...props}) {
    const { children } = props;
    if (boolean)
        return (
                {...children}
        );
    return null;
}