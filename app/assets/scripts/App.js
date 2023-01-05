import '../styles/styles.scss'
import TestJsFeature from './modules/TestJsFeature'

let testJsFeature = new TestJsFeature()

if (module.hot) {
  module.hot.accept()
}
