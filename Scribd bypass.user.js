// ==UserScript==
// @name               Scribd bypass
// @description        Script disables blur on text
// @version            2024.09.02
// @author             wernser412
// @downloadURL        https://github.com/wernser412/Scribd_bypass/raw/refs/heads/main/Scribd%20bypass.user.js
// @namespace          https://github.com/wernser412
// @match              *://*.scribd.com/*
// @icon               https://s-f.scribdassets.com/favicon.ico
// @require            https://code.jquery.com/jquery-3.7.1.min.js
// @license            MIT
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
