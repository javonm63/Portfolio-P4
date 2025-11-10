import { useState } from "react";

export function howToUseHooks() {
    const [showSnip, setShowSnip] = useState(false)
    const [snippetTitle, setSnippetTitle] = useState('EXAMPLE')
    const [snippet, setSnippet] = useState('')
    const [sample, setSample] = useState('')
    const [sample2, setSample2] = useState('')
    const [sample3, setSample3] = useState('')
    const [sample4, setSample4] = useState('')
    return {
        showSnip, setShowSnip,
        snippetTitle, setSnippetTitle,
        snippet, setSnippet,
        sample, setSample,
        sample2, setSample2,
        sample3, setSample3,
        sample4, setSample4,
    }
}