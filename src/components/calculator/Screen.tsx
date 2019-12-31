import React from 'react'

interface Props {
    screenText: string
}

function Screen(props: Props) {
    const {screenText} = props

    return (
        <div className={"calc-screen-wrapper"}>
            <div className={"calc-screen"}>
                {screenText}
            </div>
        </div>
        
    )
}

export default Screen
