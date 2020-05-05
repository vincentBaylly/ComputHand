<template>
<div>
  <div>
    <div class="container">
      <!-- <img src="/images/home.jpg" style="width:100%;height:100%"> -->
    </div>
  </div>
  <div class="container content">
    <div class="row">
      <div class="col-3">
      </div>
      <div class="col-6">
        <h1>
          <img src="/images/logo/advicehood.png" class="advicehood-logo">
          <a href="https://advicehood.herokuapp.com/" target="_blank">
            AdviceHood
          </a>
        </h1>
        Site collaboratif permettant la diffusion de savoir pour un partage entre la commauté scientifique et le
        grand public.
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-3">
      </div>
      <div class="col-6">
        <h1>
          <img src="/images/logo/CommunityMapper.png" class="CommunityMapper-logo">
          <a href="https://community-mapper.herokuapp.com/" target="_blank"> Community Mapper</a>
        </h1>
        Site de creation de carte pour repertoirier le savoir d'une commauté
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-3">
      </div>
      <div class="col-6">
        <h1>
          <img src="/images/logo/MoRyIci.png" class="MoRyIci-logo">
          <a href="https://moryici.herokuapp.com/" target="_blank"> Mon Rythme Ici</a>
        </h1>
        Site d'information touristique en Mauricie
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-3">
      </div>
      <div class="col-6">
        <a href="https://georisk-shawi.herokuapp.com/" target="_blank">
          <img src="/images/logo/GeoRisk.png" class="GeoRisk-logo">
        </a>
        <br>
        <br>
        Site de geolocalisation de d&eacute;sastres developp&eacute; dans le cadre du
        <h2>Hackathon du Digihub de 2018</h2>
        <a href="https://www.facebook.com/media/set/?set=a.764137417116192&type=3&__tn__=-UC-R" target="blank">3ème
          prix</a>
        avec:
        <ul>
          <li><a href="https://www.linkedin.com/in/neinoi/" target="blank">Julien Bellion</a>
          </li>
          <li><a href="https://www.linkedin.com/in/mickael-gozard-99b68a1/" target="blank">Mickael Gozard</a></li>
          <li>
            <a href="https://www.linkedin.com/in/alexandre-beaudoin-a0678176/" target="blank">Alexandre
              Beaudoin</a>
          </li>
          <li><a href="https://www.linkedin.com/in/jcartoux/" target="blank">Jean-Philippe
              Cartoux</a></li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-3">
      </div>
      <div class="col-6">
        <a href="https://github.com/vincentBaylly" target="_blank">
          <img src="/images/logo/github.png" class="github-logo">
        </a>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-3">
      </div>
      <div class="col-6">
        <a href="https://gitlab.com/vincentBaylly" target="_blank">
          <img src="/images/logo/gitlab.png" class="gitlab-logo">
        </a>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-3">
      </div>
      <div class="col-6">
        <a href="https://riskmatrix-c9718.web.app/index" target=" _blank"><img src="/images/logo/Back2Work.png" class="Backtowork-logo"></a>
        <br>
        <br>
        Pour la mise en place d'un protocole de retour a l'emploi suite &agrave; la crise du COVID-19 dans le cadre
        du
        <h2>
          Hackathon <a href="https://togethervsvirus.ca/" target="_blank">TOGETHERVSVIRUS</a>
        </h2>
        <br>
        Soumission du projet sur
        <a href="https://devpost.com/software/back-to-work-protocols" target="_blank">DevPost</a>
        <br>
        <br>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <h3>Etapes du Protocole</h3>
        <img src="/images/togethervsvirus/User_Stages_and_RiskMatrix_Process.png" class="screen-img">
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <img src="/images/togethervsvirus/COVID-19-worker-Protocol_Page_1.jpg" class="screen-img">
        <img src="/images/togethervsvirus/COVID-19-worker-Protocol_Page_2.jpg" class="screen-img">
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <h3>Ecran de l'application soumise</h3>
        <img src="/images/togethervsvirus/LowRisk.jpg" class="low-risk-img">
        <img src="/images/togethervsvirus/MediumRisk.jpg" class="medium-risk-img">
        <img src="/images/togethervsvirus/Question_Individual_sm.jpg" class="question-individual-img">
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <img src="/images/togethervsvirus/WorkerResult.png" class="worker-result-img">
      </div>
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

@media (max-width:799px) {
  .screen-img {
    height: 20%;
    width: 95%;
  }

  .worker-result-img {
    height: 20%;
    width: 100%;
  }

  .low-risk-img {
    height: 20%;
    width: 100%;
  }

  .medium-risk-img {
    height: 20%;
    width: 100%;
  }

  .question-individual-img {
    height: 20%;
    width: 100%;
  }
}

@media (min-width:800px) {
  .screen-img {
    height: 400px;
    width: 550px;
  }

  .worker-result-img {
    height: 300px;
    width: 600px;
  }

  .low-risk-img {
    height: 1300px;
    width: 375px;
  }

  .medium-risk-img {
    vertical-align: top;
    height: 750px;
    width: 375px;
  }

  .question-individual-img {
    vertical-align: top;
    height: 600px;
    width: 375px;
  }
}
</style>
