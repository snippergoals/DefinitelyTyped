/// <reference types="jquery"/>
/// <reference path="metismenu.d.ts"/>

$('#menu').metisMenu();
$('.metismenu').metisMenu({toggle: false});
$('.test').metisMenu({
    toggle: false,
    doubleTapToGo: true,
    activeClass: 'active',
    collapseClass: 'collapse',
    collapseInClass: 'in',
    collapsingClass: 'collapsing'
});
