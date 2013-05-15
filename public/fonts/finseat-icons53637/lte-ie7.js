/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'finseat-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'findseat-icon-twitter-icon' : '&#xe000;',
			'findseat-icon-time' : '&#xe001;',
			'findseat-icon-ticket' : '&#xe002;',
			'findseat-icon-strip' : '&#xe003;',
			'findseat-icon-star' : '&#xe004;',
			'findseat-icon-settings' : '&#xe005;',
			'findseat-icon-seat' : '&#xe006;',
			'findseat-icon-search' : '&#xe007;',
			'findseat-icon-right-oath' : '&#xe008;',
			'findseat-icon-retype' : '&#xe009;',
			'findseat-icon-remove' : '&#xe00a;',
			'findseat-icon-plus' : '&#xe00b;',
			'findseat-icon-play' : '&#xe00c;',
			'findseat-icon-phone' : '&#xe00d;',
			'findseat-icon-menu' : '&#xe00e;',
			'findseat-icon-left-oath' : '&#xe00f;',
			'findseat-icon-key' : '&#xe010;',
			'findseat-icon-facebook' : '&#xe011;',
			'findseat-icon-facebook-icon' : '&#xe012;',
			'findseat-icon-check' : '&#xe013;',
			'findseat-icon-change' : '&#xe014;',
			'findseat-icon-cancel' : '&#xe015;',
			'findseat-icon-camera' : '&#xe016;',
			'findseat-icon-calendar' : '&#xe017;',
			'findseat-icon-bubble' : '&#xe018;',
			'findseat-icon-back' : '&#xe019;',
			'findseat-icon-at' : '&#xe01a;',
			'findseat-icon-arrow-right' : '&#xe01b;',
			'findseat-icon-arrow-left' : '&#xe01c;',
			'findseat-icon-add' : '&#xe01d;',
			'findseat-icon-user' : '&#xe01e;',
			'findseat-icon-up' : '&#xe01f;',
			'findseat-icon-twitter' : '&#xe020;',
			'findseat-icon-marker' : '&#xe021;',
			'findseat-icon-mail' : '&#xe022;',
			'findseat-icon-location' : '&#xe023;'
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