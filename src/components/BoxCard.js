import "./BoxCard.css"
import { useState } from 'react'

export const BoxCard = ({ result, children }) => {
    const [show, setShow] = useState(true)
    return (
        <>
            {/* passing string + dynamic value using back tick */}
            {show &&
                <div className={`box ${result}`}>
                    {children}
                    <button onClick={() => { setShow(!show) }} className="trigger">Hide</button>
                </div>
            }
        </>
    )
}
