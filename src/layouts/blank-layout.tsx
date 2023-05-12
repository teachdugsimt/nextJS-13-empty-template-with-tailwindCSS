import React, { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode
}

const BlankLayout = (props: LayoutProps) => {
    const { children } = props;
    
    return (
        <div>{children}</div>
    )
}


export default BlankLayout
