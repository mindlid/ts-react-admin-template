import { useEffect, useRef } from 'react';
import hljs from 'highlight.js'
import 'highlight.js/styles/stackoverflow-light.css'
import { useTheme } from '@material-ui/core';

export const JsonCodeBlock: React.FC<{ code: string }> = ({ code }) => {
    const JsonCodeBlock = useRef<HTMLElement>(null)
    const muiTheme = useTheme()
    useEffect(() => {
        if (JsonCodeBlock.current) {
            hljs.highlightElement(JsonCodeBlock.current)
        }
    }, [code, JsonCodeBlock])
    return (
        <pre
            className="mdc-elevation--z8"
            style={{
                margin: '1rem',
                outline: `1px solid ${muiTheme.palette.divider}`,
                borderRadius: '0.5rem'
            }}>
            <code className="language-json"
                style={{ borderRadius: 'inherit' }}
                ref={JsonCodeBlock}>
                {code}
            </code>
        </pre>
    )
}
