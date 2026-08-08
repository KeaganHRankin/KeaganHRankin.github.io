# Only needed if you want to preview the site locally at localhost:4000.
# GitHub Pages ignores this file and builds with its own pinned gem set.
#
#   winget install RubyInstallerTeam.RubyWithDevKit.3.3
#   gem install bundler
#   bundle install
#   bundle exec jekyll serve --livereload
#
# Note: this repo lives under OneDrive, whose sync can lock files mid-build and
# produce spurious Jekyll errors. Pause syncing while serving.

source "https://rubygems.org"

# Matches what GitHub Pages runs, so a local build behaves like the live one.
gem "github-pages", group: :jekyll_plugins

# Windows needs these; they are no-ops elsewhere.
# wdm must be 0.2+ — 0.1.x fails to compile on Ruby 3.x.
gem "tzinfo-data", platforms: [:mingw, :x64_mingw, :mswin, :jruby]
gem "wdm", "~> 0.2", platforms: [:mingw, :x64_mingw, :mswin]
