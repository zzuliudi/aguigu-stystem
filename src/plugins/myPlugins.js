let myPlugins = {};

myPlugins.install = function(Vue, options) {
    // console.log(Vue, options);
    // Vue.directive(options.name, (element) => {
    //     console.log(element);
    // })
    Vue.directive(options.name, (element, params) => {
        element.innerHTML = params.value.toLowerCase();
        console.log(params);
    });
}
export default myPlugins;