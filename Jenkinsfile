pipeline {
    agent any
stages {
   stage('Pull code') {
       steps {
           checkout scm
       }
   }
   stage('Download dependency') {
       steps {
           dir('front-end') {
               sh 'npm install'
           }
       }
   }
   stage('Download dependency') {
       steps {
           dir('back-end') {
               sh 'npm install'
           }
       }
   }
   stage('Unit testing') {
        steps {
              echo "not completed"
        }
   }
  
    stage('Component testing') {
        steps {
              echo "not completed"
        }
   }
  stage('Packaging') {
        steps{
            echo "not completed"
        }       
}
   stage('Build') {
       steps {
          dir('front-end') {
               sh 'npm run build'
           }
       }
   }
   stage('Deploy to target server'){
       steps{
           echo "no target server"
       }
   }
    
  
   }
 }
