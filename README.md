# JavaScript Heap with Gitflow Practice

實現可擴充的JavaScript Heap (Max-Heap/Min-Heap)，用來複習DSA，並練習GIT，GITFLOW，JEST單元測試以及使用GitHub Action的CI/CD

## Project Goals
- Implement a JavaScript Heap with operations (`push`, `pop`, `top`, etc.).
- Practice Gitflow workflow using Git CLI (feature branches, hotfixes, conflict resolution).
- Write unit tests using Jest.
- Set up CI/CD with GitHub Actions.

## Prerequisites
- **Git**: For version control.
- **Node.js**: Version 18 or higher (includes npm).
  - Download: https://nodejs.org/
  - Verify: `node --version` and `npm --version`.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd js-heap
   ```
2. **Install Dependencies**:
    ```bash
    npm install
    ```
3. **Run Tests**:
    ```bash
    npm test
    ```

## Project Structure
```
js-heap/
├── src/
│   └── heap.js         # Heap implementation
├── tests/
│   └── heap.test.js    # Unit tests
├── .github/
│   └── workflows/ci.yml # GitHub Actions CI
├── package.json         # Project configuration
├── README.md            # This file
└── .gitignore           # Git ignore file
```

## Gitflow Workflow

### Branches:
- main: Production-ready code.
- develop: Integration branch for new features.
- feature/*: New features (e.g., feature/add-logging).
- hotfix/*: Urgent fixes for main.

### Development Process:
1. Create a feature branch:
    ```bash
    git checkout develop
    git branch feature/<feature-name>
    git checkout feature/<feature-name>
    ```
2. Commit changes:
    ```bash
    git add .
    git commit -m "Implement <feature-name>"
    ```
3. Push and create a Pull Request:
    ```bash
    git push origin feature/<feature-name>
    ```
4. Merge to develop after review:
    ```bash
    git checkout develop
    git merge feature/<feature-name>
    git push origin develop
    ```
    Conflict Resolution
    
    If a merge conflict occurs, edit the conflicting files, then:
    ```bash
    git add .
    git commit
    ```

## Running Tests
- Tests are written using Jest and located in tests/.
- Run:
    ```bash
    npm test
    ```
- Add new tests in `tests/heap.test.js` .

## CI/CD
- GitHub Actions: Automatically runs tests on pushes to `main` or `develop`, and on Pull Requests.
- Check the "Actions" tab in the GitHub repository for CI results.