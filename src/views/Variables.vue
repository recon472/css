<template>
  <div class="v-stack h-stretch">
    <h1 class="h6 text-left">Variables</h1>
    <a class="header text-left">Default values</a>
    <prism
      language="scss"
      code="$default-margin: 10px !default;

$color-separator: #ccc !default;
$color-selected-background: #484a51 !default;
$color-selected-text: white !default;
$color-highlight: #e4e5e8 !default;

$color-default-text: black !default;
$color-default-background: white !default;
$color-default-link: #484a51 !default;
$color-default-disabled: #a9a9a9 !default;

$color-light-text: #1c1c1c !default;
$color-light-background: #eee !default;
$color-light-link: red !default;
$color-light-disabled: green !default;

$color-dark-text: #eee !default;
$color-dark-background: #1c1c1c !default;
$color-dark-link: yellow !default;
$color-dark-disabled: pink !default;

$color-primary: #6065dc !default;
$color-secondary: #484a51 !default;
$color-warning: #f0a500 !default;
$color-success: #339900 !default;
$color-error: #c0392b !default;

$color-navbar-text-transparent: white !default;

$small-breakpoint: 576px !default;
$medium-breakpoint: 900px !default;
$large-breakpoint: 992px !default;
$extra-large-breakpoint: 1200px !default;

$section-height: 600px !default;
$navbar-height: 70px !default;

$step-1: 3px !default;
$step-2: 6px !default;
$step-3: 12px !default;
$step-4: 18px !default;
$step-5: 24px !default;"
    >
    </prism>
    <a class="header text-left">Override</a>
    <prism
      language="scss"
      code="$color-default-text: pink;
@import 'style/main.scss'"
    >
    </prism>
  </div>
</template>