'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var $burgers = document.querySelectorAll('.navbar-burger');

  console.log($burgers);
  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      if (!$el.dataset.target) {
        return;
      }

      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
