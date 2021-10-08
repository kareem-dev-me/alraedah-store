import Cookies from 'js-cookie'

export default (context) => {
  const currentLocale = Cookies.get('locale')

  if (currentLocale === 'ar') {
    context.i18n.locale = 'ar'
  } else if (currentLocale === 'en') {
    context.i18n.locale = 'en'
  }
}
