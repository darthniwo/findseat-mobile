/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'findseat-icon-font\'">' + entity + '</span>' + html;
	}
	var icons = {
			'findseat-icon-world' : '&#xe000;',
			'findseat-icon-user' : '&#xe001;',
			'findseat-icon-twitter' : '&#xe002;',
			'findseat-icon-twitter-icon' : '&#xe003;',
			'findseat-icon-time' : '&#xe004;',
			'findseat-icon-ticket' : '&#xe005;',
			'findseat-icon-strip' : '&#xe006;',
			'findseat-icon-share' : '&#xe007;',
			'findseat-icon-settings' : '&#xe008;',
			'findseat-icon-seat' : '&#xe009;',
			'findseat-icon-search' : '&#xe00a;',
			'findseat-icon-right-oath' : '&#xe00b;',
			'findseat-icon-retype' : '&#xe00c;',
			'findseat-icon-plus' : '&#xe00d;',
			'findseat-icon-play' : '&#xe00e;',
			'findseat-icon-phone' : '&#xe00f;',
			'findseat-icon-menu' : '&#xe010;',
			'findseat-icon-marker' : '&#xe011;',
			'findseat-icon-mail' : '&#xe012;',
			'findseat-icon-left-oath' : '&#xe013;',
			'findseat-icon-key' : '&#xe014;',
			'findseat-icon-icon-star' : '&#xe015;',
			'findseat-icon-house' : '&#xe016;',
			'findseat-icon-fb-icon' : '&#xe017;',
			'findseat-icon-facebook' : '&#xe018;',
			'findseat-icon-facebook-icon' : '&#xe019;',
			'findseat-icon-check' : '&#xe01a;',
			'findseat-icon-cancel' : '&#xe01b;',
			'findseat-icon-camera' : '&#xe01c;',
			'findseat-icon-calendar' : '&#xe01d;',
			'findseat-icon-bubble' : '&#xe01e;',
			'findseat-icon-back' : '&#xe01f;',
			'findseat-icon-at' : '&#xe020;',
			'findseat-icon-arrow-right' : '&#xe021;',
			'findseat-icon-arrow-left' : '&#xe022;',
			'findseat-icon-add' : '&#xe023;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/findseat-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};