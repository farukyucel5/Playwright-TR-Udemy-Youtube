pipeline {
  agent any
    
  stages {
    stage('test') {
      steps {
        sh '''
          npx playwright test pom.spec.ts
        '''
      }
      
    }
  }
}