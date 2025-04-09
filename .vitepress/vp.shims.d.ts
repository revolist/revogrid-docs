import { DefaultTheme } from 'vitepress';
export type { DefaultTheme };
declare module 'vitepress' {
    namespace DefaultTheme {
        export interface Footer {
            message?: string
            items?: {
                links?: {
                    link?: string
                    text?: string
                }[]
            }[] | undefined
        }
    }
}
