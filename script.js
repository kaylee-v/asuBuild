/**
 * @author Kaylee
 */
"use strict";

$(document).ready(function() {
    //hide content of table cell if length over 50
    $('td').each(function() {
        if ($(this).text().length > 50) {
            $(this).addClass('overflow');
            }
    });
    //reveal table cell content on click
    $('td').click(function() { 
        $(this).toggleClass('reveal');
    });
    
    //ran into problems when selecting one focus after another with course 334
    //which is included in 3 diffferent focus areas
    //so instead of toggleClass, I used an if else statement to check
    //if the class exists and toggle manually
    $('#print_button').click(function() {
        $('.web, .photo, .animation').removeClass('highlight');
        if ($('.print').hasClass('highlight')) {
            $('.print').removeClass('highlight');
        } else {
            $('.print').addClass('highlight');
        }
    });
    
    $('#web_button').click(function() {
        $('.print, .photo, .animation').removeClass('highlight');
        if ($('.web').hasClass('highlight')) {
            $('.web').removeClass('highlight');
        } else {
            $('.web').addClass('highlight');
        }
    });
    $('#photo_button').click(function() {
        $('.print, .web, .animation').removeClass('highlight');
        if ($('.photo').hasClass('highlight')) {
            $('.photo').removeClass('highlight');
        } else {
            $('.photo').addClass('highlight');
        }
    });
    $('#animation_button').click(function() {
        $('.print, .web, .photo').removeClass('highlight');
        if ($('.animation').hasClass('highlight')) {
            $('.animation').removeClass('highlight');
        } else {
            $('.animation').addClass('highlight');
        }
    });
    
    //toggle upper and lower division highlight
    $('#lower_button').click(function() {
        $('.upper').removeClass('class_highlight');
        $('.lower').toggleClass('class_highlight');
    });
    $('#upper_button').click(function() {
        $('.lower').removeClass('class_highlight');
        $('.upper').toggleClass('class_highlight');
    });
    
    //clear search
    $('#clear_button').click(function() {
       $('.print, .web, .photo, .animation').removeClass('highlight');
       $('.lower, .upper').removeClass('class_highlight'); 
    });
    
    $('tr:odd').addClass('alt');
    
    //Jquery UI
    $('#tabs').tabs({
        collapsible: false,
        active: 0
    });
    
    //resources form
    $('#resourceSubmit').click( function() {
        var resourceList = [];
        
        if ($(':checked').length == 0) {
            $('#resourceReturn p').empty();
            $('#resourceError').removeClass('hidden');
        } else {
            $('#resourceReturn p').empty();
            $('#resourceError').addClass('hidden');
            $('#resources input:checked').each(function() {
                resourceList.push(' <a href="' + $(this).attr('value') + '" title="' + $(this).attr('id') + '">' + $(this).attr('id') + '</a>');
            })
            if ($(':checked').length > 1) {
                resourceList.push(' and ' + resourceList.pop());
            }
            var resourceString = "You have indicated an interest in " + resourceList + ". Please select a link to learn more about these resources.";
            $('#resourceReturn p').append(resourceString);
        }
    });
    
    
});

function init() {
        updateCanvas();
    }
    
var careerData = [{label: "Art Directors",
                    value: 85160,
                    style: "#a9a9a9"},
                    {label: "Desktop Publishers",
                    value: 38200,
                    style: "#c9c9c9"},
                    {label: "Film and Video Editors",
                    value: 57210,
                    style: "#a9a9a9"},
                    {label: "Graphic Designers",
                    value: 45900,
                    style: "#c9c9c9"},
                    {label: "Multimedia Artists and Animators",
                    value: 63630,
                    style: "#a9a9a9"},
                    {label: "Photographers",
                    value: 30490,
                    style: "#c9c9c9"},
                    {label: "Prepress Technicians and Workers",
                    value: 37200,
                    style: "#a9a9a9"},
                    {label: "Search Engine Strategists",
                    value: 83410,
                    style: "#c9c9c9"},
                    {label: "Video Game Designers",
                    value: 83410,
                    style: "#a9a9a9"},
                    {label: "Web Developers",
                    value: 63490,
                    style: "#c9c9c9"}];
    
var rectangles = []; 

function updateCanvas() {
    var canvas = document.getElementById('myCanvas');
    var wid = canvas.width;
    var hei = canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#999';
    ctx.fillRect(0,0,wid,hei);
    //"chart padding"
    var chPad = 30;
    ctx.font = '10pt Roboto, Helvetica Neue, Arial, sans-serif';
    ctx.fillStyle = '#999';
    
    //x and y axis
    ctx.moveTo(chPad - 10, chPad);
    ctx.lineTo(chPad - 10, hei - chPad);
    ctx.lineTo(wid - chPad, hei - chPad);
    
    //y axis steps
    var stepSize = (hei - chPad * 2) / 10;
    for (var i = 0; i < 10; i++) {
        ctx.moveTo((chPad - 10), chPad + i * stepSize);
        ctx.lineTo(chPad * 1.3, chPad + i * stepSize);
        ctx.fillText ((10 - i) * 10000, chPad * 1.5, chPad + i * stepSize + 6);
    }
    ctx.stroke();
    
    //bars
    var elementWidth = (wid - chPad * 2) / (careerData.length * 1.2);
    ctx.textAlign = 'left';
    for (i = 0; i < careerData.length; i++) {
        ctx.fillStyle = careerData[i].style;
        ctx.fillRect(chPad + 70 + elementWidth * i, hei - chPad - (careerData[i].value / 10000) * stepSize, elementWidth, (careerData[i].value / 10000) * stepSize);
    }
    ctx.translate(0, 600);
    ctx.rotate(270 * Math.PI / 180);
    for (i = 0; i < careerData.length; i++) {
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillText(careerData[i].label, chPad, chPad + 80 + elementWidth * i);
    }
}