pipeline {
  agent any
    
  stages {
    stage('test') {
      steps {
        sh '''
          npx playwright test tests\\Pom\\tests\\pom.spec.ts
        '''
      }
      
    }
  }
}