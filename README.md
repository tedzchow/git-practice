# Git Practice

Let's practice Git!

## Overview

This repository is designed to help newbies practice using Git and GitHub by creating a simple todo app. Each participant will check out their own branch from the main branch, where they will work on their respective todo app in a directory named after their own name. The directory will also contain [READMD.md](./john-doe/README.md) file to provide some information about themselves. Finally, each participant will add a link to their directory in [Contributors](#contributors) section of the root [README.md](#git-practice) file.

## Instructions

### Setup

1. Fork and clone the repository to your local machine:
   ```
   git clone https://github.com/[your-github-handle]/git-practice.git
   cd git-practice
   ```
2. Check out a new branch from the main branch with your name:
   ```
   git checkout -b your-branch-name main
   ```

### Development

3. Inside the repository, create a new directory with your name:
   ```
   mkdir your-name
   cd your-name
   ```
4. Create an `README.md` file in the directory and provide some information about yourself.
5. Develop your todo app in [todo](./john-doe/todo/) directory using any technology or framework you prefer.

### Committing Changes

6. Branch off `your-branch-name` for any features you would like to implement:
   ```
   git checkout -b your-branch-name-feature-name your-branch-name
   ```
7. Once you have made progress on your todo app, add your changes to the staging area:
   ```
   git add .
   ```
8. Commit your changes with a meaningful commit message:
   ```
   git commit -m "Add feature name"
   ```

### Pushing Changes and Creating a Pull Request

9. Push your branch to the remote repository:
   ```
   git push origin your-branch-name-feature-name
   ```
10. Visit the original repository on GitHub and create a pull request to merge your changes into the `your-branch-name` branch.

### Request Reviews

11. Request at least 1 colleague's review.
12. Once the PR is approved by addressing reviewers feedback, merge the PR.

### Updating Your Branch with Latest Changes

13. Checkout `your-branch-name` and pull the latest changes:
    ```
    git checkout your-branch-name
    git pull origin your-branch-name
    ```

### Iteration

14. Iterate 6 - 13 till you implement all features.
15. The same way, add README.md about yourself in [your-name](./john-doe/) directory.

### Add a Link to Directory

16. Open the [README.md](./README.md) file and add a link to [your-name](./john-doe/) directory under the "Contributors" section.

### Open a PR for all of your work

18. Push `your-branch-name` to the remote repository.
19. Open a PR against the main and request the review to the [admin](https://github.com/oddcommits)

### Congrats

20. The admin will review the PR and say **Congrats** if everything looks good.

## Contributors

- [John Doe](./john-doe/README.md)
- [Sebastian Harvey](./jsstar/README.md)
- [White Collin](./whitecollin/)
- [Donald Ross](./donald-ross/)
- [Lucas Marvel](./lucas/README.md)
- [Yusuke Nishikado](./yusukenishikado/README.md)
