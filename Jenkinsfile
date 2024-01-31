node {
  stage('SCM') {
    checkout scm
  }

  stage('Build') {
    steps {
      nodejs(nodeJSInstallationName: 'Node16_16') {
        sh 'npm ci'
      }
    }
  }

  stage('SonarQube Analysis') {
    def scannerHome = tool 'LehttoSonar';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}