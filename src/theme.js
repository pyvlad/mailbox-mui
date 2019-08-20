import { 
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'
import {
  brown,
  orange
} from '@material-ui/core/colors'

// Customized theme settings go here
const createNewTheme = (type) => {
  let theme = createMuiTheme({
    palette: {
      type: type,
      primary: brown,
      secondary: {
        main: orange[200]
      },
      contrastThreshold:2
    },
  })
  theme = responsiveFontSizes(theme)
  return theme
}

const lightTheme = createNewTheme("light")
const darkTheme = createNewTheme("dark")
export { lightTheme, darkTheme }