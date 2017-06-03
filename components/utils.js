export function toSnakeCase(text) {
  const lower = text.toLowerCase()
  const snake = lower.replace(/\s/g, '_')

  return snake
}

export function serialize(form) {
  if (!form || form.nodeName !== "FORM") {
    return;
  }
  var i, j, q = [];
  for (i = form.elements.length - 1; i >= 0; i = i - 1) {
    if (form.elements[i].name === "") {
      continue;
    }
    switch (form.elements[i].nodeName) {
    case 'INPUT':
      switch (form.elements[i].type) {
      case 'text':
      case 'email':
      case 'hidden':
      case 'password':
      case 'button':
      case 'reset':
      case 'submit':
        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
        break;
      case 'checkbox':
      case 'radio':
        if (form.elements[i].checked) {
          q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
        }
        break;
      case 'file':
        break;
      }
      break;
    case 'TEXTAREA':
      q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
      break;
    case 'SELECT':
      switch (form.elements[i].type) {
      case 'select-one':
        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
        break;
      case 'select-multiple':
        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
          if (form.elements[i].options[j].selected) {
            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
          }
        }
        break;
      }
      break;
    case 'BUTTON':
      switch (form.elements[i].type) {
      case 'reset':
      case 'submit':
      case 'button':
        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
        break;
      }
      break;
    }
  }
  return q.join("&");
}

export function getJSON(url, cb) {
  const request = new XMLHttpRequest()
  request.open('GET', url, true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      cb(JSON.parse(request.responseText))
    } else {
      console.error('Server error: ', request)
    }
  }

  request.onerror = function() {
    console.error('Connection error: ', request)
  }

  request.send()
}

export function scrollIt(destination, duration = 200, easing = 'linear', callback) {
  const easings = {
    linear(t) {
      return t
    },
    easeInQuad(t) {
      return t * t
    },
    easeOutQuad(t) {
      return t * (2 - t)
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    easeInCubic(t) {
      return t * t * t
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    easeInQuart(t) {
      return t * t * t * t
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
    },
    easeInQuint(t) {
      return t * t * t * t * t
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
    }
  }

  const start = window.pageYOffset
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime()

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset)

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll)
    if (callback) {
      callback()
    }
    return
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime()
    const time = Math.min(1, ((now - startTime) / duration))
    const timeFunction = easings[easing](time)
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start))

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback()
      }
      return
    }

    requestAnimationFrame(scroll)
  }

  scroll()
}
