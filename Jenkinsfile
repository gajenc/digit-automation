def env

pipeline {
  agent {
      label 'slave'
  }

  parameters {
        choice(name: 'TEST_ENV', choices: 'dev\nqa\nplayground\nPB-UAT\nUKD-DEV\nUKD-UAT\nBHR-DEV\nBHR-UAT', description: 'What is the target test environment?')
        choice(name: 'TEST_SUITE', choices: 'BATs\nSMOKE\nE2E\nPGR-E2E\nTL-E2E\nPT-E2E\nFNOC_E2E', description: 'What is the target test suite that you want to run?')
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
    stage('Test Execution') {
      steps {
        sh 'npm i'
        sh 'echo CYPRESS_testenv'
        script {
          echo "Executing ${params.TEST_SUITE} on ${params.TEST_ENV} .... "
          switch(GIT_BRANCH) {
            case "E2E":
              suite= "cypress/integration/e2e-tests.spec.js"
              break
            case "BATs":
              suite= "cypress/integration/bats.spec.js"
              break
            case "SMOKE":
              suite= "cypress/integration/smoke.spec.js"
              break
            default:
              suite= "cypress/integration/e2e-tests.spec.js"   
              break 
          }

          sh "DEBUG=cypress:* cypress run --spec ${suite} --env testenv=${params.TEST_ENV} --record --key 9c01d741-d0ca-4cfa-809b-474b0a0e61f4" 
          // if ("${params.TEST_ENV}" == "dev") {
          //         echo 'Executing tests on Integration'
          //         sh 'npm run test:ci:int'
          // } else if ("${params.TEST_ENV}" == "PB-UAT") {
          //         echo 'Executing tests on PB-UAT'
          //         sh 'npm run test:ci:stage'
          // } else {
          //       echo 'Executing tests on QA'
          //       sh 'npm run test:ci:qa'
          // }  
        }    
      }
    }
  }
}