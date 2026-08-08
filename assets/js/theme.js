/* Theme toggle.
 *
 * The no-flash part of this lives inline in <head> (see _includes/head.html):
 * it stamps data-theme on <html> before first paint. This file only wires up
 * the button.
 *
 * Three states: an explicit choice stamps data-theme="light"|"dark" and is
 * remembered; no stored choice leaves data-theme off entirely, which lets the
 * CSS prefers-color-scheme block follow the OS. */
(function () {
  'use strict';

  var root = document.documentElement;
  var STORAGE_KEY = 'theme';
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function stored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function resolved() {
    return stored() || (systemDark.matches ? 'dark' : 'light');
  }

  function syncButton(button) {
    var isDark = resolved() === 'dark';
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute(
      'aria-label',
      isDark ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }

  function apply(theme, button) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* private mode */ }

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#16171a' : '#fdfdfb');
    }
    syncButton(button);
  }

  var button = document.querySelector('.theme-toggle');
  if (!button) { return; }

  syncButton(button);

  button.addEventListener('click', function () {
    apply(resolved() === 'dark' ? 'light' : 'dark', button);
  });

  // With no stored choice, keep the button glyph honest if the OS flips.
  var onSystemChange = function () { if (!stored()) { syncButton(button); } };
  if (systemDark.addEventListener) {
    systemDark.addEventListener('change', onSystemChange);
  } else if (systemDark.addListener) {
    systemDark.addListener(onSystemChange); // Safari < 14
  }
})();
