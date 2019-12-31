import React from 'react'

interface Props {
    screenText: string
}

function Screen(props: Props) {
    const {screenText} = props

    return (
        <div className={"calc-screen"}>
            {screenText}
        </div>
    )
}

export default Screen
