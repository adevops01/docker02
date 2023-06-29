pipeline {
    agent any
    environment{
        REPO = 'moshab679/docker04'
        TAG = 'harshita'
    }
    stages {
        stage('Docker image Build') {
            steps {
                sh 'docker build -t $REPO:$TAG .'
            }
        }

        stage('Docker push'){
            steps{
                // sh 'echo $DOCKER_CRED_PSW | docker login -u $DOCKER_CRED_USR --password-stdin'
                sh 'docker push $REPO:$TAG'
            }
        }
        // stage('Trigger CD Pipeline') {
        //     steps {
        //         catchError(buildResult: 'SUCCESS') {
        //             build job: 'docker02-cd'
        //         }
        //     }
        // }
    }
}
