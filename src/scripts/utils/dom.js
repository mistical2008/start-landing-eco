function getElCoords($el) {
  const box = $el.getBoundingClientRect();

  const body = document.body;
  const docEl = document.documentElement;

  let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  let clientTop = docEl.clientTop || body.clientTop || 0;
  let clientLeft = docEl.clientLeft || body.clientLeft || 0;

  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft,
  };
}

function runIfElExists({selector, cb, args, root = document}) {
  const el = root.querySelector(selector);
  if (el) {
    cb(el, args);
  }
}

function svgFromText(str) {
  // const $el = document.createElement("div").innerHTML = str;
  const parser = new DOMParser(),
    xmlText = "<svg xmlns='http://www.w3.org/2000/svg'>" + str + '</svg>',
    docElem = parser.parseFromString(xmlText, 'text/xml').documentElement;

  const $node = docElem.firstChild;
  document.importNode($node, true);
  return $node;
}
/**
 * @description
 * @param {HTMLElement} $el element to add styles
 * @param {ElementCSSInlineStyle} styles inline styles
 */
function elStyles($el, styles) {
  Object.assign($el.style, styles);
}

/**
 * Append child node or replace if exists
 */
function insertChildNode($root, $oldNode, $newNode) {
  const action = $oldNode ? 'replace' : 'append';
  const args = $oldNode ? [$newNode, $oldNode] : [$newNode];

  $root[action + 'Child'](...args);
}

function fixViewportHeight() {
  var customViewportCorrectionVariable = 'vh';

  function setViewportProperty(doc) {
    var prevClientHeight;
    var customVar = '--' + (customViewportCorrectionVariable || 'vh');
    function handleResize() {
      var clientHeight = doc.clientHeight;
      if (clientHeight === prevClientHeight) return;
      requestAnimationFrame(function updateViewportHeight() {
        doc.style.setProperty(customVar, clientHeight * 0.01 + 'px');
        prevClientHeight = clientHeight;
      });
    }
    handleResize();
    return handleResize;
  }
  window.addEventListener(
    'resize',
    setViewportProperty(document.documentElement),
  );
}

/**
 * @description Gets images from the provided element
 * @param {HTMLElement} el element from which need to get images
 * @param {Boolean} includeDuplicates include duplicate results or not
 */
function getImages(el, includeDuplicates = false) {
  const images = [...el.getElementsByTagName('img')].map(img =>
    img.getAttribute('src'),
  );
  return includeDuplicates ? images : [...new Set(images)];
}

/**
 * @description Hides all provided elements by 'display: none
 * @param {HTMLAllCollection} el
 */
function hideAll(...el) {
  [...el].forEach(e => (e.style.display = 'none'));
}

/**
 * @description Shows all provided elements by 'display: block
 * @param {HTMLAllCollection} el
 */
function showAll(...el) {
  [...el].forEach(e => (e.style.display = ''));
}

/**
 * description Checks if the given element has the specified class
 * @param {HTMLElement} el element for check
 * @param {HTMLClassname} className
 */
function hasClass(el, className) {
  return el.classList.contains(className);
}

/**
 * @description Renders an element with the specified props
 * @param {HTMLElementType} type node type
 * @param {HTMLElementAttribute | HTMLEvent} props node html attributes
 * @param {HTMLElement} container container to render node
 */
function renderElement({type, props = {}}, container) {
  const isTextElement = !type;
  const element = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);

  const isListener = p => p.startsWith('on');
  const isAttribute = p => !isListener(p) && p !== 'children';

  Object.keys(props).forEach(p => {
    if (isAttribute(p)) element[p] = props[p];
    if (!isTextElement && isListener(p))
      element.addEventListener(p.toLowerCase().slice(2), props[p]);
  });

  if (!isTextElement && props.children && props.children.length)
    props.children.forEach(childElement =>
      renderElement(childElement, element),
    );

  container.appendChild(element);
}

/**
 * @description Returns an array containing all the siblings off the given element
 * @param {HTMLElement} el element for check
 */
function getSiblings(el) {
  return [...el.parentNode.childNodes].filter(node => node !== el);
}

/**
 *	@description distance from top using Document.documentElement or Document.body and Element.scrollTop.
 *	Scroll by a fraction of the distance from the top.
 *	Use Window.requestAnimationFrame() to animate the scrolling.
 */
function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

/**
 * @description the value of a CSS rule for the specified element.
 * Use Window.getComputedStyle() to get the value of the CSS rule
 * for the specified element.
 * @param {HTMLElement} el element for getting
 * @param {String} ruleName name of the css rule for getting
 */
function getStyle(el, ruleName) {
  return getComputedStyle(el)[ruleName];
}

/**
 * @description whether the page is being viewed on a mobile device or a desktop.
 * @return returns 'Mobile' | 'Desktop'
 */
function detectDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? 'Mobile'
    : 'Desktop';
}

export {
  fixViewportHeight,
  getElCoords,
  detectDeviceType,
  insertChildNode,
  elStyles,
  getStyle,
  svgFromText,
  runIfElExists,
  getImages,
  hideAll,
  showAll,
  hasClass,
  renderElement,
  getSiblings,
  scrollToTop,
};
