export type SupportedLanguage = "en" | "pt"

export type LanguageSwitchProps = {
  translations: Translations
}

type Translations = {
  globeAlt: string
  languageSwitchButtonAlt: string
  switchToEnglishAlt: string
  switchToPortugueseAlt: string
}
