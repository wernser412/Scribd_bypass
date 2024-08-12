// ==UserScript==
// @name               Scribd bypass
// @description        Script disables blur on text
// @author             wernser412
// @version            11/08/2024
// @license            MIT
// @namespace          https://github.com/wernser412
// @match              *://*.scribd.com/*
// @icon               https://s-f.scribdassets.com/favicon.ico
// @require            https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==
/* eslint-env jquery */
$(document).ready(function(){
    'use strict';
    if (window.location.href.match(/(document|presentation)\/(\d+)\//) == null) return;
    //Remove blocks between pages
    $('div.between_page_module').remove();

    //Remove banners on pages
    $('div.auto__doc_page_webpack_doc_page_blur_promo').remove();

    // Remove blur
    $('div.newpage div.text_layer').css('text-shadow', 'black 0px 0px 0px');

    // Remove unselectable attribute
    $('[unselectable]').removeAttr('unselectable');

    // Remove blurred_page class
    $('.blurred_page').removeClass('blurred_page');

    //Remove banners promo
    $('.promo_div').remove();

})();
