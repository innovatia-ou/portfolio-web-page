import React from 'react'
import './Paragraph.scss'

interface ParagraphProps {
    children:string
}

export const Paragraph = ({children}:ParagraphProps) => {

    return (
        <p id='paragraph'>
            {children}
        </p>
    )
}