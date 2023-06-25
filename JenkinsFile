pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.35.0-jammy' } }
   stages {
      stage('e2e-tests') {
         steps {
            sh 'ci'
            sh 'npx playwright test'
         }
      }
   }
}