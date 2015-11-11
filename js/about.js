/**
 * @description javascript for
 * @author TuzK1ss
 * @date 15/10/19.
 */

(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.tyAbout = factory();
        root.tyAbout();
    }

})(window, function() {
    'use strict';



    var tyAbout = {
        init: function() {


            window.onscroll = this.scrollHandler;
        },

        initTeamMember: function() {

            var $container = $('#ty_about_team_container'),
                len = window.tyTeamMember.length,
                member;

            window.intervalCount = 0;
            window.memberHtml = [];

            for (var i = 0; i < len; i++) {
                member = window.tySortedTeamMember[i];
                // console.log(len);
                // console.log(i);
                //fix 字母T
                if (i <= 34) {
                    window.memberHtml.push('<div class="ty-about-team-member  ty-about-team-member-style-' + i + '" > <a class="ty-about-team-member-circle" href="javascript:void(0)" style="background-image:url(' + member.avatar + ')"></a><div class="ty-about-team-member-info"><h3>' + member.name + '<small>' + member.desc + '</small></h3><p>' + member.dream + '</p></div></div>');
                }
                else {
                     window.memberHtml.push('<div class="ty-about-team-member  ty-about-team-member-style-' + i + '" > <a class="ty-about-team-member-circle" href="javascript:void(0)" style="background-image:url(' + member.avatar + ')"></a><div class="ty-about-team-member-info2"><h3>' + member.name + '<small>' + member.desc + '</small></h3><p>' + member.dream + '</p></div></div>');
                }
            }

            window.TY_ABOUT_APPEND_TEAM_MEMBER_INTERVAL = setInterval(function() {
                $container.append(window.memberHtml[window.intervalCount]);
                window.intervalCount++;

                if (window.intervalCount === len) {
                    window.clearInterval(window.TY_ABOUT_APPEND_TEAM_MEMBER_INTERVAL);
                }
            }, 350);

            return this;
        },
        scrollHandler: function() {
            var top = document.body.scrollTop,
                screenHeight = $('body').height();

            if (top > screenHeight - 200) {
                var $team = $('.ty-about-section.team');

                if (!$team.hasClass('ty-loaded')) {
                    tyAbout.initTeamMember();
                    $team.addClass('ty-loaded');
                }
            }

            return this;
        }

    };

    return function() {
        tyAbout.init();
    };


});
