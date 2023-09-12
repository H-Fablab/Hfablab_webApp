const express = require("express")
const path = require('path')
fs = require('fs')
const router = express.Router()




router.get('/', (req, res)=>{
    const locals ={
        page__title :"Home page"
    }
    const rawData = fs.readFileSync('blog__posts.json');
    const data = JSON.parse(rawData);
    res.render('pages/home', {locals, blog_data: data.blog_posts})
})

router.get('/blog', (req, res)=>{
    const locals ={
        page__title :"Nos actualités",
        base__attr: "../",
        banner__image: "project.webp",
        hero__label: 'Blog',
        hero__title: 'Nos actualités',
        hero__subtitle: '...',
    }
    const rawData = fs.readFileSync('blog__posts.json');
    const data = JSON.parse(rawData);


    res.render('pages/blog', {locals, blog_data: data.blog_posts})
})

router.get('/nos-projets', (req, res)=>{
  const locals ={  
        page__title :"Nos projets", 
        banner__image: "project.webp",
        hero__label: 'Projets',
        hero__title: 'Nos projets',
        hero__subtitle: '...',  
}
    const rawData = fs.readFileSync('blog__posts.json');
    const data = JSON.parse(rawData);

    res.render('pages/projets', { locals,  blog_data: data.blog_posts })
})

router.get('/agenda', (req, res)=>{
    const locals = {
        page__title :"Nos évènements", 
        banner__image: "Startup-Grind.jpeg",
        hero__label: 'Agenda',
        hero__title: 'Nos évènements du mois',
        hero__subtitle: '...', 
        page__script: 'events.js', 
    }

    res.render('pages/agenda', {locals})

})

router.get('/ateliers', (req, res)=>{
    const locals =  {
        page__title :"Nos ateliers", 
        banner__image: "Rectangle 6004.png",
        hero__label: 'Atelier',
        hero__title: 'Aprréhendez le numérique  <br class="blog--xxl__separator"> grâce à nos ateliers',
        page__script: 'atelier.js'
    }
    const rawData = fs.readFileSync('blog__posts.json');
    const data = JSON.parse(rawData);
    res.render('pages/ateliers', {locals, blog_data: data.blog_posts})

})


router.get('/faire-un-don', (req, res)=>{
    const locals = {
        page__title :"Faire un don", 
        banner__image: "H-FabLab-Abidjan-Slide-2.jpg",
        hero__label: 'Faire un don',
        hero__title: 'Nous soutenir',
        hero__subtitle: '...', 
       
    }
    res.render('pages/donate', {locals})

})

router.get('/a-propos', (req, res)=>{
    const locals =  {
        hero__label: ' Contact',
        page__title :"A Propos", 
        banner__image: "Rectangle 12 (2).png",
        hero__title: 'H-Fablab, un cadre pour la démocratisation du numérique',
        hero__subtitle: 'Notre objectif premier est promouvoir l’routerrentissage par la pratique auprès des jeunes scolarisés ou non, alphabétisés ou non en français'
    }
    res.render('pages/a-propos', {locals})

})


router.get('/contact', (req, res) => {
    const locals = {
      page__title: "Nous contacter",
      hero__label: 'Contact',
      banner__image: "Rectangle 12 (2).png",
      hero__title: 'Nous contacter'
    };
  
    res.render('pages/contact',{ locals});
  });  



router.get('/agritech-et-bio', (req, res) => {
    const locals = {
      page__title: "Agritech et bio",
      hero__label: 'Expertise',
      banner__image: "hfablab-agritech.jpg",
      hero__title: 'Agritech et bio',
      hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    };
  
    res.render('pages/agritech-et-bio', {locals});
  });
  

router.get('/details-projet', (req, res) => {
    const locals = {
      page__title: "Détails projet",
      hero__label: 'Expertise',
      banner__image: "unnamed.png",
      hero__title: 'FABRICATION D’UN DESHYDRATEUR DE FRUITS ET LEGUMES',
      hero__subtitle: 'Un atelier réalisé dans le cadre de la forge d’adaptations Nord-Sud, par le H-Fablab d’Abidjan.'
    };
  
    res.render('pages/details-project', {locals});
  });
  
// Route for '/liste-equipement'
router.get('/liste-equipement', (req, res) => {
    const locals = {
      page__title: "Liste de nos équipemets",
      hero__label: 'Equipement',
      banner__image: "unnamed.png",
      hero__title: 'Nos équipements',
      hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es.',
      page__script: 'equipments.js'
    };
    res.render('pages/liste-equipement', {locals});
  });
  
  // Route for '/soumettre-un-projet'
  router.get('/soumettre-un-projet', (req, res) => {
    const locals = {
      page__title: "Soumettre un projet",
      banner__image: "55910121_914414448910557_1748538231957225472_n.jpg",
      hero__title: 'Soumettre un projet',
      hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    };
    res.render('pages/soumettre-un-projet', {locals});
  });
  
  // Route for '/reservation-equipement'
  router.get('/reservation-equipement', (req, res) => {
    const locals = {
      page__title: "Reserver une machine",
      banner__image: "Rectangle 5982.png",
      hero__title: 'Réserver une machine',
      hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    };
    res.render('pages/reservation-equipement', {locals});
  });
  
  // Route for '/inscription-atelier'
  router.get('/inscription-atelier', (req, res) => {
    const locals = {
      page__title: "Inscription atelier",
      banner__image: "Rectangle 5982.png",
      hero__title: 'Inscription atelier',
      hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    };
    res.render('pages/inscription-atelier', {locals});
  });
  
  // Route for '/inscription-evenement'
  router.get('/inscription-evenement', (req, res) => {
    const locals = {
      page__title: "Inscription evenement",
      banner__image: "Rectangle 5982.png",
      hero__title: 'Inscription evenement',
      hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    };
    res.render('pages/inscription-evenement', {locals});
  });
  
  // Route for '/form-donation'
  router.get('/form-donation', (req, res) => {
    const locals = {
      page__title: "Faire un don",
      banner__image: "Startup-Grind.jpeg",
      hero__label: 'Agenda',
      hero__title: 'Faire un don',
      hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br class="blog--xxl__separator"> Etiam eu turpis molestie, dictum es',
    };
    res.render('pages/form-don', {locals});
  });
  
  // Route for '/form-donation-materiel'
  router.get('/form-donation-materiel', (req, res) => {
    const locals = {
      page__title: "Faire un don",
      banner__image: "Startup-Grind.jpeg",
      hero__label: 'Agenda',
      hero__title: 'Faire un don',
      hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br class="blog--xxl__separator"> Etiam eu turpis molestie, dictum es',
    };
    res.render('pages/form-don-materiel', {locals});
  });
  


  router.get('/domaines-d-expertise', (req, res) => {
    const locals = {
      page__title: "Nos domines d'expertise",
      hero__label: 'Expertise',
      banner__image: "55910121_914414448910557_1748538231957225472_n.jpg",
      hero__title: "Domaines d’expertise",
      hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es',
    }
    const rawData = fs.readFileSync('blog__posts.json')
    const data = JSON.parse(rawData)

    res.render('pages/expertise', {locals, blog_data: data.blog_posts});
  });

 
// Define a function to handle rendering routes with common data
function renderBlog_post(req, res) {
    const locals ={
        page__title :"Nos actualités",
        base__attr: "../",
        hero__label: 'Blog',
        hero__title: 'Nos actualités', 
        page__script: 'blog_post.js'
    }

    const rawData = fs.readFileSync('relative_posts.json')
    const data = JSON.parse(rawData)

    res.render('blog_posts/' + req.query.id, {locals , relative_posts: data.blog_posts});
  }

router.get('/blog/post', (req, res) => {
    renderBlog_post(req, res);
});


router.get('/inscription', (req, res)=>{
    res.render('pages/sign-up')

})

router.get('/connexion', (req, res)=>{
    res.render('pages/login')

})

router.get('/recuperation-mot-de-pass', (req, res)=>{
    res.render('pages/recuperation-mot-de-pass')

})


router.get('/nouveau-mot-de-pass', (req, res)=>{
    res.render('pages/nouveau-mot-de-pass')

})


module.exports = router