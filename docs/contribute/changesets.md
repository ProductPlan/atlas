## Changesets

For versioning Atlas, we are using [Changesets](https://github.com/changesets/changesets). Changesets is a tool that helps us to version our packages and publish them to NPM. It also helps us to create changelogs for each package and to create a changelog for the whole monorepo.

### How to use Changesets

Changesets is already configured in the monorepo. You can use it by running the following commands:

- `yarn changeset`: This command will create a new changeset. You will be asked to select the packages that you want to version and to write a changelog for each package. You can also select the version for each package.
- `yarn changeset version`: This command will create a new commit with the changesets and the versioned packages.
- `yarn changeset publish` (WIP): This command will publish the packages to NPM.

### Process

The process to release a new version of Atlas is the following:

1. Create a new branch from `main` and name it `release/<version>`. For example, `release/1.0.0`.
1. Create a new changeset with the command `yarn changeset`. You will be asked to select the packages that you want to version and to write a changelog for each package. You can also select the version for each package.
1. Commit the changeset with the command `yarn changeset version`.
1. Push the changes to the remote branch.
1. Create a new Pull Request from the branch `release/<version>` to `main`.
1. Once the Pull Request is approved, merge it to `main`.
1. Create a new tag with the version number. For example, `1.0.0`.
1. Push the tag to the remote branch.
1. (Optional, WIP) Run the command `yarn changeset publish` to publish the packages to NPM.

## Next steps

We need to automate the process of publishing the packages to NPM. We can do this by adding a GitHub Action that will run the command `yarn changeset publish` when a new tag is created. [Read more](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md).

- [ ] Add a GitHub Action to publish the packages to NPM.
- [ ] Add a GitHub Action to create a new release in GitHub with the changelog.
