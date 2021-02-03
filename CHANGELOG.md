# Unreleased changes

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.8.0...master)

# v0.8.0 (2021-02-01)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.7.1...v0.8.0)

* Core-Addon
  * [#294](https://github.com/mozilla-rally/core-addon/pull/294): Only process messages from known, installed studies. Additionally rename `ionInstalled` to `studyInstalled`.
  * [#301](https://github.com/mozilla-rally/core-addon/pull/301): Correctly report the zip code in the demographics survey.
  * [#298](https://github.com/mozilla-rally/core-addon/pull/298): Disable Rally on locales other than `en-US`. The ` --config-disable-locale-check` build option allows overriding the check for developer workflows on other locales.
  * [#305](https://github.com/mozilla-rally/core-addon/pull/305): Disable data submission to enable safer QA.
  * [318](https://github.com/mozilla-rally/rally-core-addon/pull/311): Use Remote Settings for fetching study metadata.
* `rally.js`
  * [#306](https://github.com/mozilla-rally/core-addon/pull/306): Add a developer mode. When enabled it allows developer to dump the content of pings to the browser console and prevents the Rally information page to be opened if no core-addon is found.

# v0.7.1 (2021-01-13)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.7.0...v0.7.1)

* Core-Addon
  * [#299](https://github.com/mozilla-rally/core-addon/pull/299): Change the link to the sample Rally demo addon.

# v0.7.0 (2021-01-11)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.6.1...v0.7.0)

* Core-Addon
  * [#237](https://github.com/mozilla-rally/core-addon/pull/237): Remove reliance on the Firefox Pioner ID pref.
  * **Breaking change** - [#262](https://github.com/mozilla-rally/core-addon/pull/262): rename the org from `mozilla-ion` to `mozilla-rally`. Without this change the core add-on won't be able to communicate with the test website.
  * [#271](https://github.com/mozilla-rally/core-addon/pull/271): drop or change references to `Ion` in the codebase. This additionally changes the add-on id to `rally-core@mozilla.org`.
  * **Breaking change** - [#282](https://github.com/mozilla-rally/core-addon/pull/282): listen for messages from the Rally staging site vs. the github.io site.
  * [#283](https://github.com/mozilla-rally/core-addon/pull/283): Copy only the needed font files used by the core add-on; copy only the `woff2` versions.
  * [#288](https://github.com/mozilla-rally/core-addon/pull/288) Fix a bug where studies are not displayed after the first time the option page was opened.
  * [#285](https://github.com/mozilla-rally/core-addon/pull/285) & [#290](https://github.com/mozilla-rally/core-addon/pull/290): Update the "how it works" and "FAQ" links to point to the corresponding staging site pages.
* `rally.js`
  * **Breaking change** - [#262](https://github.com/mozilla-rally/core-addon/pull/262): rename the org from `mozilla-ion` to `mozilla-rally`. Without this change no communication with the core add-on is possible.
  * [#269](https://github.com/mozilla-rally/core-addon/pull/269): Allow using the Rally.js support library without a bundler.

# v0.6.1 (2020-12-09)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.6.0...v0.7.0)

* Added this changelog file.
* The data collected from the demographic survey is being submitted to the Rally servers.
* The full onboarding flow is now complete.
