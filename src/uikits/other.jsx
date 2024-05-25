import React from 'react'

export function SectionTitle({ title }) {
    return (<h1 className='sectionTitle'>
        <sup>{title} </sup>
        {title}</h1>
    )
}

export function Button({ text, isOutline, }) {
    return (<button className={'btnStyle ' + (isOutline && 'btnOulineStyle')}>{text}</button>
    )
}
export function LinkButton({ text, isOutline, link, ...rest }) {
    return (<a href={link}
        className={'btnStyle ' + (isOutline && ' btnOulineStyle')}
        {...rest}>{text}</a>
    )
}
