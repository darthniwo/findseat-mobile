/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'findseat-icon-font\'">' + entity + '</span>' + html;
	}
	var icons = {
			'findseat-icon-white-bubble' : '&#xe000;',
			'findseat-icon-user' : '&#xe001;',
			'findseat-icon-up' : '&#xe002;',
			'findseat-icon-twitter-icon' : '&#xe003;',
			'findseat-icon-marker' : '&#xe004;',
			'findseat-icon-mail' : '&#xe005;',
			'findseat-icon-love-badge' : '&#xe006;',
			'findseat-icon-location-grey' : '&#xe007;',
			'findseat-icon-arrow-right' : '&#xe00a;',
			'findseat-icon-arrow-left' : '&#xe00b;',
			'findseat-icon-add' : '&#xe00c;',
			'findseat-icon-action-badge' : '&#xe00d;',
			'findseat-icon-time' : '&#xe00e;',
			'findseat-icon-ticket' : '&#xe00f;',
			'findseat-icon-thriller-badge' : '&#xe010;',
			'findseat-icon-terror-badge' : '&#xe011;',
			'findseat-icon-strip' : '&#xe012;',
			'findseat-icon-star' : '&#xe013;',
			'findseat-icon-sport-badge' : '&#xe014;',
			'findseat-icon-settigns' : '&#xe015;',
			'findseat-icon-seat-badge' : '&#xe016;',
			'findseat-icon-search' : '&#xe017;',
			'findseat-icon-right-oath' : '&#xe018;',
			'findseat-icon-retype' : '&#xe019;',
			'findseat-icon-reload' : '&#xe01a;',
			'findseat-icon-left-oath' : '&#xe008;',
			'findseat-icon-key' : '&#xe009;',
			'findseat-icon-friends' : '&#xe01b;',
			'findseat-icon-fantasy-badge' : '&#xe01c;',
			'findseat-icon-facebook-icon' : '&#xe01d;',
			'findseat-icon-earth-badge' : '&#xe01e;',
			'findseat-icon-drama-badge' : '&#xe01f;',
			'findseat-icon-comedy-badge' : '&#xe020;',
			'findseat-icon-camera' : '&#xe021;',
			'findseat-icon-camera-badge' : '&#xe022;',
			'findseat-icon-calendar' : '&#xe023;',
			'findseat-icon-lit-arrow-right' : '&#xe024;',
			'findseat-icon-lit-arrow-left' : '&#xe025;',
			'findseat-icon-profile' : '&#xe026;',
			'findseat-icon-back' : '&#xe027;',
			'findseat-icon-phone' : '&#xe028;'
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