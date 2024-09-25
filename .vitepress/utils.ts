const scriptLangTsRE = /<\s*script[^>]*\blang=['"]ts['"][^>]*/
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/
const scriptSetupCommonRE =
    /<\s*script\s+(setup|lang='ts'|lang="ts")?\s*(setup|lang='ts'|lang="ts")?\s*>/


export const injectNewComponentImportScript = (env: any, demoPath: string) => {
    const scriptsCode = env.sfcBlocks.scripts as any[]

    // Find the index of the first script tag that is a setup script
    const scriptsSetupIndex = scriptsCode.findIndex((script: any) => {
        // Checks if the script tag is a setup script or a setup script with a lang attribute
        if (
            scriptSetupRE.test(script.tagOpen) ||
            scriptLangTsRE.test(script.tagOpen)
        )
            return true
        return false
    })

    // Handle the component name to be in camelCase

    const importContent = `
    import { defineComponent, h, onMounted, ref } from 'vue'
    import { useData } from 'vitepress'
    import * as m from '${demoPath}'
    const { isDark } = useData()
    
    const DynamicComponent = defineComponent({
          setup(props) {
            const container = ref(null);
            onMounted(async () => {
              m?.render()
              const grid = container.value?.parentElement?.querySelector('revo-grid')
              grid?.setAttribute('theme', isDark.value ? 'darkCompact' : 'compact')
              grid?.setAttribute('hide-attribution', 'true')
            })
            return () => h('div', { ref: container });
          },
    });
  `
    // If the MD file doesn't have a setup script, add a new one
    if (scriptsSetupIndex === -1) {
        const scriptBlockObj = {
            type: 'script',
            tagClose: '</script>',
            tagOpen: "<script setup lang='ts'>",
            content: `<script setup lang='ts'>
          ${importContent}
        </script>`,
            contentStripped: importContent,
        }
        scriptsCode.push(scriptBlockObj)
    } else {
        // If the component is not imported, add it
        // Replace the script setup block with a new one that imports the component
        const scriptCodeBlock = '<script lang="ts" setup>\n'
        scriptsCode[0].content = scriptsCode[0].content.replace(
            scriptSetupCommonRE,
            scriptCodeBlock
        )

        // Add the component import to the script block
        scriptsCode[0].content = scriptsCode[0].content.replace(
            scriptCodeBlock,
            `<script setup>\n
      ${importContent}\n`
        )
    }
}

/**
 * Composes a component name from its path
 * @param path - The path to the component
 * @returns The composed component name
 */
export const composeComponentName = (path: string): string => {
    /**
     * Whether the loop should continue
     */
    let isFlag = true
    /**
     * The list of component names
     */
    let componentList: string[] = []
    while (isFlag) {
        /**
         * The last index of the path
         */
        const lastIndex = path.lastIndexOf('/')
        if (lastIndex === -1) {
            /**
             * If the last index is -1, it means the path is empty,
             * so we should break the loop
             */
            isFlag = false
        } else {
            /**
             * The name of the component at the current index
             */
            const name = path.substring(lastIndex + 1)

            /**
             * Add the name to the list of component names
             */
            componentList.unshift(name)
            /**
             * Update the path by removing the last component name
             */
            path = path.substring(0, lastIndex)
        }
    }
    /**
     * Remove any empty strings from the list of component names
     */
    componentList = componentList.filter(
        (item) => item !== '' && item !== '.' && item !== '..'
    )
    /**
     * Join the list of component names with hyphens
     */
    return componentList.join('-').split('.')[0]
}

/**
 * Checks if the given path is a relative path
 * @param path - The path to check
 * @returns The relative path if the given path is relative, otherwise the original path
 */
export const isCheckingRelativePath = (path: string): string => {
    const relativePath = path
    /**
     * If the path starts with ./, ../ or /, it is a relative path
     */
    if (
        relativePath.startsWith('./') ||
        relativePath.startsWith('../') ||
        relativePath.startsWith('/')
    )
        return relativePath
    /**
     * If the path is not relative, add ./ to the beginning of the path
     */
    return `./${relativePath}`
}
