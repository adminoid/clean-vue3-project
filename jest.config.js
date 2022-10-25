module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    "vue",
    "js",
    "json",
  ],
  transform: {
    ".*\\.(vue)$": "@vue/vue3-jest",
    ".*\\.(js)$": "babel-jest",
    ".+\\.(css)$": "jest-transform-stub",
    ".+\\.(glsl)$": "jest-transform-stub"
  }
}
