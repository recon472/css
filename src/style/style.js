module.exports = {
  load: load
}

window.addEventListener("click", outsideClick)
window.addEventListener("touchend", outsideClick)
window.addEventListener("load", load)

let intervals = []

function outsideClick(event) {
  // close dropdowns
  if (!event.target.classList.contains("dropdown")) {
    let dropdowns = document.getElementsByClassName("dropdown")
    for (let dropdown of dropdowns) {
      let content = null
      for (let child of dropdown.children) {
        if (child.classList.contains("dropdown-content")) {
          content = child
          break
        }
      }
      if (content != null) {
        let parent = event.target
        let remove = true
        while (parent != null) {
          if (parent == dropdown) {
            remove = false
          }
          parent = parent.parentNode
        }

        if (content.classList.contains("show") && remove) {
          content.classList.remove("show")
          dropdown.classList.remove("show")
        }
      }
    }
  }
  // close overlay
  if (event.target.classList.contains("overlay") && !event.target.classList.contains("persistent")) {
    event.target.classList.remove("show")
  }
  // refresh button groups
  refreshButtonGroups()
}

function load() {
  for (const interval of intervals) {
    clearInterval(interval)
  }
  intervals = []

  // add no touch class
  const body = document.getElementsByTagName("body")[0]
  body.classList.add("no-touch")
  body.ontouchstart = () => {
    body.classList.remove("no-touch")
  }

  // cache scrolling for css animations and styling based on scroll position
  document.documentElement.dataset.scroll = window.scrollY;
  document.onscroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  }

  // navbar menu
  let navbar = document.getElementsByClassName("navbar")[0] || null
  let menu = document.getElementsByClassName("nav-menu")[0] || null
  let menuContent = document.getElementsByClassName("nav-menu-content")[0] || null
  if (menu != null && menuContent != null && navbar != null) {
    menu.onclick = () => {
      if (menuContent.classList.contains("show")) {
        menuContent.classList.remove("show")
        navbar.classList.remove("show")
      } else {
        menuContent.classList.add("show")
        navbar.classList.add("show")
      }
    }
  }

  // dropdowns
  let dropdowns = document.getElementsByClassName("dropdown")
  for (let dropdown of dropdowns) {
    let content = null
    for (let child of dropdown.children) {
      if (child.classList.contains("dropdown-content")) {
        content = child
        break
      }
    }
    if (content != null) {
      dropdown.onclick = () => {
        content.classList.toggle("show")
        dropdown.classList.toggle("show")
      }
    }
  }

  // overlay
  let overlayButtons = document.querySelectorAll("[overlay]")
  for (let overlayButton of overlayButtons) {
    let id = overlayButton.getAttribute("overlay")
    let overlay = document.getElementById(id)
    overlayButton.onclick = () => {
      overlay.classList.add("show")
    }
  }

  let overlays = document.getElementsByClassName("overlay")
  for (let overlay of overlays) {
    let dismissButtons = overlay.getElementsByClassName("dismiss")
    for (let button of dismissButtons) {
      let overlayParent = button.parentNode
      while (
        overlayParent != null &&
        !overlayParent.classList.contains("overlay")
      ) {
        overlayParent = overlayParent.parentNode
      }
      button.onclick = () => {
        overlayParent.classList.remove("show")
      }
    }
  }

  // drag overlay
  const dragOverlays = document.getElementsByClassName("drag-overlay")
  for (const dragOverlay of dragOverlays) {
    const handles = dragOverlay.getElementsByClassName("handle")
    if (handles.length > 0) {
      const clampXY = (x, y) => {
        const padding = 10
        let positionX = Math.max(padding, x)
        positionX = Math.min(window.innerWidth - dragOverlay.getBoundingClientRect().width - padding, positionX)
        let positionY = Math.max(padding, y)
        positionY = Math.min(window.innerHeight - dragOverlay.getBoundingClientRect().height - padding, positionY)
        return {
          x: positionX,
          y: positionY
        }
      }

      window.addEventListener("resize", () => {
        const clampedPosition = clampXY(dragOverlay.offsetLeft, dragOverlay.offsetTop)
        dragOverlay.style.top = clampedPosition.y + "px";
        dragOverlay.style.left = clampedPosition.x + "px";
      })

      const handle = handles[0]
      handle.onmousedown = (event) => {
        let xLast = event.clientX
        let yLast = event.clientY

        event.preventDefault()
        document.onmousemove = (event) => {
          const deltaX = xLast - event.clientX
          const deltaY = yLast - event.clientY
          xLast = event.clientX
          yLast = event.clientY
          const positionX = dragOverlay.offsetLeft - deltaX
          const positionY = dragOverlay.offsetTop - deltaY
          const clampedPosition = clampXY(positionX, positionY)
          dragOverlay.style.top = clampedPosition.y + "px";
          dragOverlay.style.left = clampedPosition.x + "px";
        }
        document.onmouseup = () => {
          document.onmouseup = null
          document.onmousemove = null
        }
      }
    }
  }

  // set up autoscrolling labels
  let scrollLabels = document.getElementsByClassName("scroll-label")
  const framesToWait = 60

  for (let label of scrollLabels) {
    let waitingFrames = 0
    intervals.push(setInterval(() => {
      if (label.scrollWidth > label.clientWidth) {
        if (label.scrollLeft >= label.scrollWidth - label.clientWidth) {
          if (waitingFrames < framesToWait) {
            waitingFrames++
          } else {
            waitingFrames = 0
            label.scrollLeft = 0
          }
        } else if (label.scrollLeft == 0) {
          if (waitingFrames < framesToWait) {
            waitingFrames++
          } else {
            waitingFrames = 0
            label.scrollLeft = 2
          }
        } else {
          label.scrollLeft += 2
        }
      } else {
        label.scrollLeft = 0
      }
    }, 50))
  }

  // button group
  refreshButtonGroups()

  // notification
  let notifications = document.getElementsByClassName("notification")
  for (let notification of notifications) {
    notification.onanimationend = () => {
      notification.classList.remove("show")
    }
  }
}

function refreshButtonGroups() {
  let groups = document.getElementsByClassName("button-group")
  for (let group of groups) {
    // highlight correct button
    let index = group.getAttribute("index") || 0
    for (let i = 0; i < group.children.length; i++) {
      if (i == index) {
        if (!group.children[i].classList.contains("on")) {
          group.children[i].classList.add("on")
        }
      } else {
        if (group.children[i].classList.contains("on")) {
          group.children[i].classList.remove("on")
        }
      }
    }
    // switch on button press
  }
}
