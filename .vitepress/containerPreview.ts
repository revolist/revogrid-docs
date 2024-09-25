/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
import MarkdownIt from 'markdown-it'
import markdownItContainer from 'markdown-it-container'
import { injectNewComponentImportScript } from './utils'
const validateContainerRE = /^preview.*$/
const parseContainerParamRE =
    /^preview\s*(#\S*|)\s*(\.\S*|)\s*(:\S*|)\s*([\S|\s]*)$/


export const containerDirectiveMount = (md: MarkdownIt) => {
    md.use(markdownItContainer, 'preview', {
        marker: ':',
        validate: (params: any) => {
            const validateContainer = params.trim().match(validateContainerRE)
            if (validateContainer && validateContainer.length !== 0) return true
            return false
        },
        render: (
            tokens: any,
            idx: number,
            options: any,
            env: any
        ) => {
            const token = tokens[idx]
            const paramArr = token.info.trim().match(parseContainerParamRE)

            if (token.nesting === 1 && paramArr) {
                let [, id, , , path] = paramArr
                id = id ? id.substring(1) : 'example-1'
                injectNewComponentImportScript(env, path)
                return ` 
                <div id="${id}" class="example-container">
                 <DynamicComponent />`
            } else {
                // closing tag
                return '</div>\n'
            }
        },
    })
}

export const containerPreview = (md: MarkdownIt) => {
    containerDirectiveMount(md)
}
