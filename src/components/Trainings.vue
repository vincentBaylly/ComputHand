<template>
  <div>
    <div class="container content">
      <div class="accordion text-left" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" left class="p-1" role="tab">
            <b-button v-b-toggle.accordion-1 variant="light"
              ><b-icon-controller></b-icon-controller> Le monde
              Techno:</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <ul>
                  <li>CyberSecurité</li>
                  <li>La cryptomonnaie</li>
                  <li>Modélisation 3D</li>
                </ul></b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.accordion-2 variant="light"
              ><b-icon-calendar></b-icon-calendar> Methodologie:</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <ul>
                  <li>
                    Scrum Master (<a
                      href="https://www.doussou-formation.com/formation/formation-agile-scrum/"
                      target="_blank"
                      >Doussou Formation</a
                    >)
                  </li>
                  <li>Agile Vision 360</li>
                  <li>
                    Gestion de projet Agile (<a
                      href="https://forceti.ca/formation-et-panel-ti/"
                      target="_blank"
                      >Service au entreprise - Force TI</a
                    >)
                  </li>
                  <li>UML</li>
                </ul></b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.accordion-3 variant="light"
              ><b-icon-laptop></b-icon-laptop> Developpement</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                ><ul>
                  <li>Initiation à la programmation</li>
                  <li>Initation au Javascript</li>
                  <ul>
                    <li>Framework:</li>
                    <ul>
                      <li>Angular</li>
                      <li>Vue</li>
                      <li>React</li>
                    </ul>
                  </ul>
                  <li>Java Initial</li>
                  <li>Java pour le Web, J2EE</li>
                  <ul>
                    <li>Framework:</li>
                    <ul>
                      <li>Hibernate</li>
                    </ul>
                  </ul>
                </ul></b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.accordion-4 variant="light"
              ><b-icon-tools></b-icon-tools> Outils</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                ><ul>
                  <li>Git</li>
                  <li>Maven</li>
                  <li>Jira</li>
                </ul></b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.accordion-5 variant="light"
              ><b-icon-display></b-icon-display> Test</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                ><ul>
                  <li>Selenium</li>
                  <li>SOAPUI</li>
                </ul></b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>
<style>
.Backtowork-logo {
  height: 50px;
  width: 180px;
}

.github-logo {
  height: 50px;
  width: 210px;
}

.gitlab-logo {
  height: 110px;
  width: 150px;
}

.CommunityMapper-logo {
  border-radius: 10%;
  height: 40px;
  width: 40px;
  border: 1px solid purple;
}

.advicehood-logo {
  background: #e8112d;
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  width: 40px;
  margin: auto;
  border: 2px solid #e8112d;
}

.MoRyIci-logo {
  background: #e8112d;
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  width: 40px;
  margin: auto;
  border: 2px solid white;
}

.GeoRisk-logo {
  background: gray;
  border-radius: 10%;
  height: 50px;
  width: 150px;
}

.screen-img {
  height: 400px;
  width: 500px;
}

.worker-result-img {
  height: 500px;
  width: 900px;
}

.low-risk-img {
  height: 1300px;
  width: 340px;
}

.medium-risk-img {
  vertical-align: top;
  height: 750px;
  width: 340px;
}

.question-individual-img {
  vertical-align: top;
  height: 600px;
  width: 340px;
}
</style>
