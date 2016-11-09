/**
 * Created by jundong on 16/11/9.
 */

$(document).ready(function () {
    var listUl = $('[data-id = abilityList]');
    console.log(listUl);
    listUl.hover(function () {
        console.log('ee')

    },function () {
        console.log('ee2')
    })
});
