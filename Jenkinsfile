pipeline {
    agent any
    stages {
        // stage('Clone') {
        //     steps {
        //        sh 'git clone https://github.com/adevops01/docker02.git'
        //     }
        // }

        // stage('Build') {
        //     steps {
        //         sh 'cd docker02 && npm install'
        //     }
        // }

        stage('Docker image Build') {
            steps {
                sh 'docker build -t myapp:${BUILD_NUMBER} .'
            }
        }

        stage('Trigger CD Pipeline') {
            steps {
                catchError(buildResult: 'SUCCESS') {
                    build job: 'docker02-cd'
                }
            }
        }
    }
}
