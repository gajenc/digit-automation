def env

pipeline {
  agent {
      label 'nodebuilder'
  }

  parameters {
        choice(name: 'TEST_ENV', choices: 'dev\nPB-UAT\nqa', description: 'What is the target test environment?')
  }

  environment {
    CYPRESS_testenv="${params.TEST_ENV}"
    env="${params.TEST_ENV}"
  }
  
  stages {
    stage('Setup') {   
      steps {
        echo "${params.TEST_ENV}"
        sh 'apt-get update'
        sh 'apt-get install -y xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2'
      }
    }
    stage('E2E Tests') {
      steps {
        sh 'npm i'
        sh 'echo CYPRESS_testenv'
        script {
          if ("${params.TEST_ENV}" == "dev") {
                  echo 'Executing tests on Integration'
                  sh 'npm run test:ci:int'
          } else if ("${params.TEST_ENV}" == "PB-UAT") {
                  echo 'Executing tests on PB-UAT'
                  sh 'npm run test:ci:stage'
          } else {
                echo 'Executing tests on QA'
                sh 'npm run test:ci:qa'
          }  
        }    
      }
    }
  }
}