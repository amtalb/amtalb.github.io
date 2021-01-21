import Typography from "typography"
import doelgerTheme from "typography-theme-doelger"

doelgerTheme.headerWeight = '400'

const typography = new Typography(doelgerTheme)

if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale