import inview from '../packages/inview'

const components = [
    inview
]
const install = function(Vue) {
    components.map(item => {
        Vue.component(item.name, item)
    })
}

export default {
    install,
    inview
}