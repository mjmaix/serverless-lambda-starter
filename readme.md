## Reference

This project is based on [Get Started With AWS, Serverless, and TypeScript](https://dev.to/michael_timbs/get-started-with-aws-serverless-and-typescript-5hgf). Thank you @michael_timbs!

## Others

1. Added [prettier](https://prettier.io/) preferences
1. Added [commitlint](https://commitlint.js.org/)
1. Added [import sorting rules](https://dev.to/mjmaix/clean-eslint-import-management-for-reactjs-230h)
1. Added [eslint-plugim-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
1. Added [jest](https://jestjs.io/) `yarn test` on `pre-push`.
   - Must not have uncommitted changed files to avoid [this issue](https://medium.com/faun/why-using-pre-push-git-hooks-with-husky-is-not-always-a-good-idea-6233b8afcf83).
   - Tip: Use `git stash -u` to stash changes and `git stash pop` to bring it back after push.

## How to make this yours

1. Change name in `package.json` and `serverless.ts`

## Development

```sh
# install
$ yarn

$ yarn sls:offline
```

## Deployment

```sh
# optionally append "--aws-profile myawsprofile" for specific
$ yarn sls:deploy
$ yarn sls:remove
```

## TODO

- Authentication lambda for client consumption
