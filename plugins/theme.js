import Cookies from 'js-cookie'

export default (context) => {
  const theme = Cookies.get('theme')

  if (theme) {
    context.$vuetify.theme.dark = true
  }
}
