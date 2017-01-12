$(function(){
	'use strict';

	function ScrollSpy(element, options) {
		var process  = $.proxy(this.process, this);

		this.$body          = $('body');
		this.$scrollElement = $(window);
		this.options        = $.extend({}, ScrollSpy.DEFAULTS, options);
		this.target         = '.docs-nav';
		this.$target        = $(this.target);
		this.offsets        = [];
		this.targets        = [];
		this.activeTarget   = null;
		this.scrollHeight   = 0;

		this.$scrollElement.on('scroll.bs.scrollspy', process);
		this.refresh();
		this.process();
	}

	ScrollSpy.DEFAULTS = {
		offset: 10
	};

	ScrollSpy.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	};

	ScrollSpy.prototype.refresh = function () {
		this.offsets = [];
		this.targets = [];
		this.scrollHeight = this.getScrollHeight();

		var self     = this;

		this.$body
			.find(this.target + ' a')
			.map(function () {
				var $el   = $(this);
				var href  = $el.data('target') || $el.attr('href');
				var $href = /^#./.test(href) && $('[id="' + href.replace('#', '') + '"]');

				return ($href && $href.length && [[$href.offset().top, href]]) || null;
			})
			.sort(function (a, b) { return a[0] - b[0]; })
			.each(function () {
				self.offsets.push(this[0]);
				self.targets.push(this[1]);
			});
	};

	ScrollSpy.prototype.process = function () {
		var elScrollTop  = this.$scrollElement.scrollTop();
		var scrollTop    = elScrollTop + this.options.offset;
		var scrollHeight = this.getScrollHeight();
		var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height();
		var offsets      = this.offsets;
		var targets      = this.targets;
		var activeTarget = this.activeTarget;
		var i;

		if (this.scrollHeight != scrollHeight) {
			this.refresh();
		}

		this.$target.css('top', Math.min(150, Math.max(0, 150 - elScrollTop)));

		if (scrollTop >= maxScroll) {
			return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
		}

		if (activeTarget && scrollTop <= offsets[0]) {
			return activeTarget != (i = targets[0]) && this.activate(i);
		}

		for (i = offsets.length; i--;) {
			if (activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1])) {
				this.activate(targets[i]);
			}
		}
	};

	ScrollSpy.prototype.activate = function (target) {
		this.activeTarget = target;

		$(this.target).find('a, .docs-nav-section').removeClass('active');

		var selector = this.target + ' a[data-target="' + target + '"],' + this.target + ' a[href="' + target + '"]';

		$(selector).addClass('active').closest('.docs-nav-section').addClass('active');
	};

	$.fn.scrollspy = function (option) {
		return this.each(function () {
			var $this   = $(this);
			var data    = $this.data('bs.scrollspy');
			var options = typeof option == 'object' && option;

			if (!data) {
				$this.data('bs.scrollspy', (data = new ScrollSpy(this, options)));
			}
			if (typeof option == 'string') {
				data[option]();
			}
		});
	};

	$(window).scrollspy();

	// Documents list, a markdown file with serialized name must exist in the
	// /content/ directory with .md file extension
	// Example: "Desktop" -> /content/desktop.md
	var documents = [
		'Index', // This one won't show in the header :eyes:
		'Desktop',
		'Mobile',
		'Servers',
		'Bots',
		'Development',
		'Tools',
		'Manual' // This one won't show in the header :eyes:
	];

	/**
	 * Serialize a string into a slug that can be used in URLs and filenames
	 * without problems.
	 * @param {string} str Input string.
	 * @return {string} Output slug.
	 */
	function serialize (str) {
		return str.replace(/\s/g, '-').replace(/[^a-z0-9-_]/gi, '').toLowerCase();
	}

	// Populate guide index area in the page header
	var index = document.getElementById('js-docs-index');
	for (var i = 0; i < documents.length; i++) {
		if (documents[i] === 'Index' || documents[i] === 'Manual') continue;
		index.innerHTML = index.innerHTML + '<li><a id="js-docs-index-' + serialize(documents[i]) + '" href="#/' + serialize(documents[i]) + '" class="tablinks">' + documents[i] + '</a></li>';
	}

	// Object to store markdown cache in
	var documentMarkdownCache = {};

	// State related things
	var currentDoc = null; // null or documents[i]
	var loading = null;

	// Elements for later use
	var contentContainer = document.getElementById('js-docs-content');
	var anchorBarContainer = document.getElementById('js-anchor-bar');

	/**
	 * Render a document from markdown into HTML.
	 * @param {string} doc Document name, needed for URL structure.
	 * @param {string} md Markdown document content.
	 * @return {string} Rendered HTML.
	 */
	function renderDocument (doc, md) {
		var documentRenderer = new marked.Renderer();
		documentRenderer.heading = function (text, level) {
			var out;
			var ser = serialize(text);

			if (level === 1) {
				out = '<article class="docs-section"><a class="docs-section-target" id="/' + doc + '/' + ser + '"' + ser + '"></a>';
				out += '<h2 class="docs-section-title"><a href="#/' + doc + '/' + ser + '">' + text + '</a></h2></article>';
			} else {
				level = Math.min(level + 1, 6);
				out = '<a class="docs-method-target" id="/' + doc + '/' + ser + '" name="' + ser + '"></a>';
				out += '<h' + level + ' class="docs-method-title"><a href="#/' + doc + '/' + ser + '">' + text + '</a></h' + level + '>';
			};

			return out;
		};

		return marked(md, {renderer: documentRenderer});
	}

	/**
	 * Render the headings of a markdown document into HTML for the anchor bar on
	 * the right side of the display area.
	 * @param {string} doc Document name, needed for URL structure.
	 * @param {string} md Markdown document content.
	 * @return {string} Rendered HTML for use with the anchor bar.
	 */
	function renderAnchorBar (doc, md) {
		var anchorBarRenderer = new marked.Renderer();
		anchorBarRenderer.code = function () { return ''; };
		anchorBarRenderer.blockquote = function () { return ''; };
		anchorBarRenderer.html = function () { return ''; };
		anchorBarRenderer.hr = function () { return ''; };
		anchorBarRenderer.list = function () { return ''; };
		anchorBarRenderer.listItem = function () { return ''; };
		anchorBarRenderer.paragraph = function () { return ''; };
		anchorBarRenderer.table = function () { return ''; };
		anchorBarRenderer.tablerow = function () { return ''; };
		anchorBarRenderer.tablecell = function () { return ''; };

		var didActive = false;
		anchorBarRenderer.heading = function (text, level) {
			var ser = serialize(text);
			var className = level === 1 ? 'docs-nav-section-title' : 'docs-nav-item';

			// Make sure this works
			var out = '<a class="' + className + (!didActive ? ' active' : '') + '" href="#/' + doc + '/' + ser + '">' + text + '</a>';
			didActive = true;
			return out;
		};

		return '<div class="docs-nav-section active">' + marked(md, {renderer: anchorBarRenderer}) + '</div>';
	};

	/**
	 * Update the state of the page.
	 */
	function doStateUpdate () {
		if (loading) return;

		// Parse the window hash
		var h = window.location.hash.substr(1).split('/').slice(1).map(decodeURIComponent).map(serialize);

		// Only update document state if the document name in the hash is different
		if (h[0] !== currentDoc) {
			loading = true
			if (h[0] === '' || h[0] === undefined) {
				h[0] = 'index';
				window.location.hash = '#/index';
			}
			if (documents.map(serialize).indexOf(h[0]) === -1) {
				// TODO: show 404 error to user
				throw new Error('invalid document name: "' + h[0] + '" is not in the documents array');
			}

			// Update the tablinks state
			for (var i = 0; i < documents.length; i++) {
				if (documents[i] === 'Index' || documents[i] === 'Manual') continue;
				document.getElementById('js-docs-index-' + serialize(documents[i])).className = 'tablinks' + (h[0] === serialize(documents[i]) ? ' staff-tab-active' : '');
			}

			// New document in URL string we need to fetch it and render it
			if (documentMarkdownCache.hasOwnProperty(h[0])) {
				contentContainer.innerHTML = renderDocument(h[0], documentMarkdownCache[h[0]]);
				anchorBarContainer.innerHTML = renderAnchorBar(h[0], documentMarkdownCache[h[0]]);
				currentDoc = h[0];
				loading = false;
			} else {
				// We need to fetch the content over the internet
				// TODO: update the page to show the user that it is loading
				var xhr = $.ajax('./content/' + h[0] + '.md').done(function (res) {
					if (xhr.status !== 200) {
						// TODO: tell the user that an error occurred
						throw new Error('failed to fetch markdown content from the webserver: xhr.status !== 200 (' + xhr.status + ' ' + xhr.statusText + ')');
					}

					documentMarkdownCache[h[0]] = res;
					contentContainer.innerHTML = renderDocument(h[0], res);
					anchorBarContainer.innerHTML = renderAnchorBar(h[0], res);
					currentDoc = h[0];
					loading = false;
				});
			}
		}
	}

	// Update the state of the page every 10ms
	setInterval(doStateUpdate, 10);
});
