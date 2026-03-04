/*
 * vue-inputmask
 *
 * (C) 2016 Simon Clériot
 * MIT LICENCE
 *
 */
import Inputmask from 'inputmask'

var inputmaskPlugin = {
    install: function(Vue, options) {
        Vue.directive('mask', {
            bind: function(el, binding) {
                Inputmask(binding.value).mask(el);
            }
        });
    }
};

export default inputmaskPlugin