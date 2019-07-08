#! /usr/bin/env node
const execa = require('execa');
const { getPkgsChanged } = require('../test-utils');

let base = 'master';

if (process.env.TRAVIS === 'true') {
  const {
    // for push builds, or builds not triggered by a pull request, this is the name of the branch.
    // for builds triggered by a pull request this is the name of the branch targeted by the pull request.
    // for builds triggered by a tag, this is the same as the name of the tag(TRAVIS_TAG).
    TRAVIS_BRANCH,
    // The pull request number if the current job is a pull request, “false” if it’s not a pull request.
    TRAVIS_PULL_REQUEST,
  } = process.env;

  const isPr = TRAVIS_PULL_REQUEST !== 'false';
  if (isPr) {
    base = TRAVIS_BRANCH;
  }
  // https://github.com/travis-ci/travis-ci/issues/6069#issuecomment-319710346
  [
    {
      label: 'Setting git config',
      cmd:
        'git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"',
    },
    {
      label: 'Git Fetch',
      cmd: 'git fetch',
    },
  ].forEach(step => {
    console.log(step.label);
    const results = execa.shellSync(step.cmd);
    if (results.failed) {
      console.error(`Uh oh, this Travis git step failed:`);
      console.log(results.stderr);
      console.log(results.stdout);
      process.exit(1);
      return;
    }
    console.log('Ran OK');
  });
}

const pkgs = getPkgsChanged({ from: 'HEAD', base: `origin/${base}` });

// This provides a regex for test files to the `jest` cli
// https://jestjs.io/docs/en/cli#jest-regexfortestfiles
// Example: `jest "pkgs/button|pkgs/card"` will only run tests found in the directories `pkgs/button` and `pkgs/card`
// The function used above gathers info about which packages changed.
// This file is to be used with `jest`, like so:
// `jest "$(bolt-list-pkg-paths-changed)"`
// use `stderr` to communicate to user, this will not be passed to jest
// use `stdout` to provide a command line argument to `jest`, this will not be seen by user

process.stderr.write(`Comparing this commit "HEAD" to base of "${base}":\n`);
process.stderr.write(
  `These packages have changed, filtering tests to just these directories:\n`,
);

pkgs.forEach(pkg => {
  process.stderr.write(`- ${pkg.name} : ${pkg.relPath} \n`);
});

const filteredList = pkgs.map(pkg => pkg.relPath).join('|');
process.stdout.write(filteredList);
