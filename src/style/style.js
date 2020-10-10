window.addEventListener("click", outsideClick)
window.addEventListener("touchend", outsideClick)


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
        }
      }
    }
  }
  // close overlay
  if (event.target.classList.contains("overlay")) {
    event.target.classList.remove("show")
  }
  // refresh button groups
  refreshButtonGroups()
}

window.addEventListener("load", () => {
  // add no touch class
  const body = document.getElementsByTagName("body")[0]
  body.classList.add("no-touch")
  body.addEventListener("touchstart", function () {
    body.classList.remove("no-touch")
  })

  // cache scrolling for css animations and styling based on scroll position
  document.documentElement.dataset.scroll = window.scrollY;
  document.addEventListener("scroll", () => {
    document.documentElement.dataset.scroll = window.scrollY;
  })

  // navbar menu
  let menu = document.getElementsByClassName("nav-menu")[0] || null
  let menuContent = document.getElementsByClassName("nav-menu-content")[0] || null
  if (menu != null && menuContent != null) {
    menu.addEventListener("click", () => {
      if (menuContent.classList.contains("show")) {
        menuContent.classList.remove("show")
      } else {
        menuContent.classList.add("show")
      }
    })
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
      dropdown.addEventListener("click", () => {
        content.classList.toggle("show")
      })
    }
  }

  // overlay
  let overlayButtons = document.querySelectorAll("[overlay]")
  for (let overlayButton of overlayButtons) {
    let id = overlayButton.getAttribute("overlay")
    let overlay = document.getElementById(id)
    overlayButton.addEventListener("click", () => {
      overlay.classList.add("show")
    })
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
      button.addEventListener("click", () => {
        overlayParent.classList.remove("show")
      })
    }
  }

  // set up autoscrolling labels
  let scrollLabels = document.getElementsByClassName("scroll-label")
  const framesToWait = 60

  for (let label of scrollLabels) {
    let waitingFrames = 0
    setInterval(() => {
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
            label.scrollLeft = 1
          }
        } else {
          label.scrollLeft += 1
        }
      } else {
        label.scrollLeft = 0
      }
    }, 50)
  }

  // button group
  refreshButtonGroups()

  // notification
  let notifications = document.getElementsByClassName("notification")
  for (let notification of notifications) {
    notification.addEventListener(
      "animationend",
      () => {
        notification.classList.remove("show")
      },
      false
    )
  }
})

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
