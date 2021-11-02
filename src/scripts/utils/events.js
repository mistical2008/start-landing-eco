/**
 * @description Create pub/sub events hub with 'emit', 'on', 'off' methods
 */
function createEventHub() {
  return {
    hub: Object.create(null),
    emit(event, data) {
      (this.hub[event] || []).forEach(handler => handler(data));
    },
    on(event, handler) {
      if (!this.hub[event]) this.hub[event] = [];
      this.hub[event].push(handler);
    },
    off(event, handler) {
      const i = (this.hub[event] || []).findIndex(h => h === handler);
      if (i > -1) this.hub[event].splice(i, 1);
      if (this.hub[event].length === 0) delete this.hub[event];
    },
  };
}

/**
 * @description Adds an event listener to an el with event delegation
 * @param {HTMLElement} el element to addEventListener
 * @param {DocumentEvent} evt event
 * @param {Function} fn
 * @param {Object} opts addEventListener options
 */
function on(el, evt, fn, opts = {}) {
  const delegatorFn = e =>
    e.target.matches(opts.target) && fn.call(e.target, e);
  el.addEventListener(
    evt,
    opts.target ? delegatorFn : fn,
    opts.options || false,
  );
  if (opts.target) return delegatorFn;
}

/**
 * @description remove an event listener from the el
 * @param {HTMLElement} el element to addEventListener
 * @param {DocumentEvent} evt event
 * @param {Function} fn
 * @param {Object} opts addEventListener options
 */
function off(el, evt, fn, opts = false) {
  el.removeEventListener(evt, fn, opts);
}

/**
 * @description Runs callback on wheel event
 *
 */
function addOnWheel(elem, handler) {
  if (elem.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+
      elem.addEventListener('wheel', handler);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener('mousewheel', handler);
    } else {
      // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
      elem.addEventListener('MozMousePixelScroll', handler);
    }
  }
  // else { // IE8-
  // elem.attachEvent("onmousewheel", handler);
  // }
}

/**
 * @description Runs the callback whenever the user clicks outside of the specified element
 * @param {HTMLElement} el element
 * @param {Function} cb will be envoked on click outside
 */
function onClickOutside(el, cb) {
  document.addEventListener('click', e => {
    if (!el.contains(e.target)) cb();
  });
}

export {createEventHub, addOnWheel, on, off, onClickOutside};
