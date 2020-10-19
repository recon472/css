<template>
  <div class="v-stack h-stretch">
    <h6 class="text-left">Helpers</h6>
    <a class="header text-left">Responsive</a>
    <p>
      hide-x classes to not display the element when the width is smaller than
      the breakpoint
    </p>
    <prism
      language="scss"
      code=".hide-sm {  } // small
.hide-md {  } // medium
.hide-lg {  } // large
.hide-xl {  } // extra large"
    >
    </prism>
    <p>
      max-width-x classes to limit the maximum-width to a breakpoint. Works
      wonders with sections and ma class.
    </p>
    <prism
      language="scss"
      code=".max-width-sm {  } // small
.max-width-md {  } // medium
.max-width-lg {  } // large
.max-width-xl {  } // extra large"
    >
    </prism>
    <a class="header text-left">Scroll content (overflow)</a>
    <p>
      Make any element scrollable, works best when you put hide-x/y on a parent
      element and scroll-x/y on the child that should be scrollable (e.g. make
      table scroll without a header)
    </p>
    <prism
      language="scss"
      code=".hide-x {  }
.hide-y {  }
.scroll-x {  }
.scroll-y {  }"
    >
    </prism>
    <a class="header text-left">Size</a>
    <prism
      language="scss"
      code=".full-width { width: 100%; }
.full-height { height: 100%; }"
    >
    </prism>
    <a class="header text-left">Margin and Padding</a>
    <p>
      Handful of margin and padding utilities using the step variables. m stands
      for margin, p for padding. Second letter is for scope: t - top, b -
      bottom, l - left, r - right, x - left and right, y - top and bottom, a -
      all. Third letter is dash, you can use n for negative, then a number 0-5.
      0 is 0px, the rest corresponds to the appropriate step variable.
    </p>
    <p>
      One special margin utility is ma, which stands for margin: auto;. Also mn
      and pn for margin/padding: 0px;.
    </p>
    <prism
      language="scss"
      code=".ma { margin: auto; } // useful for centering text or an element with set width
.mn { margin: 0px; }
.pn { margin: 0px; }
.ma-3 { } // margin on all side of step3
.px-n2 { } // padding left and right with a negative of step2
.pt-1 { } // top padding of step1"
    >
    </prism>
  </div>
</template>

<style lang="scss" scoped>
div {
  text-align: left;
}
</style>