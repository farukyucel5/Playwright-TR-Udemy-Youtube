node {
   stage('Run nohup') {
    start /b nohup command
  }
  stage('Install Playwright') {
    sh 'npm install -g playwright'
  }

  stage('Run Playwright tests') {
    sh 'npx playwright test pom.spec.ts'
  }
}