pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // Checkout the source code from the repository
        git 'https://github.com/Tariq555/reactWebsite.git'
      }
    }

    stage('Install dependencies') {
      steps {
        // Install project dependencies
        sh 'npm install'  // or 'yarn install'
      }
    }

    stage('Build') {
      steps {
        // Build the React project
        sh 'npm run build'  // or 'yarn build'
      }
    }

    stage('Test') {
      steps {
        // Run tests for the React project
        sh 'npm test'  // or 'yarn test'
      }
    }

    stage('Publish') {
      steps {
        // Publish the built artifacts (e.g., deploy to a server or a cloud platform)
        // Add your deployment steps here
      }
    }
  }
}
