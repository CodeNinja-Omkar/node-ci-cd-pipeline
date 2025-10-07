pipeline { 
    agent any 
 
    environment { 
        DOCKER_IMAGE = 'node-ci-cd-app' // Define Docker image name 
    } 
 
    stages { 
        stage('Checkout') { 
            steps { 
                // Checkout code from GitHub 
                git 'https://github.com/your-username/node-ci-cd-pipeline.git' 
            } 
        } 
 
        stage('Install Dependencies') { 
            steps { 
                // Install Node.js and dependencies 
                script { 
                    // Install NodeJS using Jenkins NodeJS plugin 
                    def nodeHome = tool name: 'NodeJS 14', type: 'NodeJSInstallation' 
                    env.PATH = "${nodeHome}/bin:${env.PATH}" 
                    sh 'npm install' 
                } 
            } 
        } 
 
        stage('Run Tests') { 
            steps { 
                // Run the tests using Mocha 
                sh 'npm test' 
            } 
        } 
 
        stage('Build Docker Image') { 
            steps { 
                // Build Docker image for deployment 
                script { 
                    sh 'docker build -t $DOCKER_IMAGE .' 
                } 
            } 
        } 
 
        stage('Deploy to Docker') { 
            steps { 
script { 
// Deploy the application to a Docker container 
sh 'docker run -d -p 3000:3000 $DOCKER_IMAGE' 
} 
} 
} 
} 
post { 
always { 
// Clean up Docker containers after the pipeline completes 
sh 'docker ps -q | xargs docker stop | xargs docker rm' 
} 
success { 
echo 'Build and Deployment succeeded!' 
} 
failure { 
echo 'Build or Deployment failed.' 
} 
} 
}
