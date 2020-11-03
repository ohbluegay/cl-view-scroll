import inview from './src/main'
inview.install = function() {
    Vue.component(inview.name, inview)
}
export default inview