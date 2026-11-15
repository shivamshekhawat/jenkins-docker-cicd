
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-demo-app:${BUILD_NUMBER} .'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                    docker rm -f devops-demo-container || true

                    docker run -d \
                    --restart unless-stopped \
                    -p 3000:3000 \
                    --name devops-demo-container \
                    devops-demo-app:${BUILD_NUMBER}

                    sleep 5

                    curl --fail http://localhost:3000/health
                '''
            }
        }
    }
}

