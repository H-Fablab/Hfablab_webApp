const express = require("express")
const path = require('path')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('pages/home', {page__title :"Home page"})
})

router.get('/blog', (req, res)=>{
    res.render('pages/blog', {
    page__title :"Nos actualités",
    hero__label: 'Blog',
    hero__title: 'Nos actualités',
    hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam <br class="blog--xxl__separator"> en Côte d’ivoire et dans la sous région'})
})

router.get('/nos-projets', (req, res)=>{
    res.render('pages/projets', {  
            page__title :"Nos projets", 
            banner__image: "project.webp",
            hero__label: 'Projets',
            hero__title: 'Nos projets',
            hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam <br class="blog--xxl__separator"> en Côte d’ivoire et dans la sous région'
    })
})

router.get('/agenda', (req, res)=>{
    res.render('pages/agenda', {
        page__title :"Nos évènements", 
        banner__image: "Startup-Grind.jpeg",
        hero__label: 'Agenda',
        hero__title: 'Nos évènements du mois',
        hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br class="blog--xxl__separator"> Etiam eu turpis molestie, dictum es', 
        page__script: '<script type="module" src="js/events.js"></script>'
    })

})

router.get('/ateliers', (req, res)=>{
    res.render('pages/ateliers', {
        page__title :"Nos ateliers", 
        banner__image: "Rectangle 6004.png",
        hero__label: 'Atelier',
        hero__title: 'Aprréhendez le numérique  <br class="blog--xxl__separator"> grâce à nos ateliers',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> en Côte d’ivoire et dans la sous région',
        page__script: '<script type="module" src="js/atelier.js"></script>'
    })

})


router.get('/faire-un-don', (req, res)=>{
    res.render('pages/donate', {
        page__title :"Faire un don", 
        banner__image: "img3.jpg",
        hero__label: 'Faire un don',
        hero__title: 'Nous soutenir',
       
    })

})

router.get('/a-propos', (req, res)=>{
    res.render('pages/a-propos', {
        hero__label: ' Contact',
        page__title :"A Propos", 
        banner__image: "Rectangle 12 (2).png",
        hero__title: 'H-Fablab, un cadre pour la démocratisation du numérique',
        hero__subtitle: 'Notre objectif premier est promouvoir l’routerrentissage par la pratique auprès des jeunes scolarisés ou non, alphabétisés ou non en français'
    })

})


router.get('/contact', (req, res)=>{
    res.render('pages/contact', {
        page__title :"Nous contacter", 
        hero__label: ' Contact',
        banner__image: "Rectangle 12 (2).png",
        hero__title: 'Nous contacter'
    })

})


router.get('/domaines-d-expertise', (req, res)=>{
    res.render('pages/expertise', {
        page__title :"Nos domines d'expertise", 
        hero__label: 'Expertise',
        banner__image: "55910121_914414448910557_1748538231957225472_n.jpg",
        hero__title: 'Domaines d’expertise',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    })

})

router.get('/agritech-et-bio', (req, res)=>{
    res.render('pages/agritech-et-bio', {
        page__title :"Agritech et bio", 
        hero__label: 'Expertise',
        banner__image: "Rectangle 5936.png",
        hero__title: 'Domaines d’expertise',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    })

})

router.get('/details-projet', (req, res)=>{
    res.render('pages/details-project', {
        page__title :"Détails projet", 
        hero__label: 'Expertise',
        banner__image: "unnamed.png",
        hero__title: 'FABRICATION D’UN DESHYDRATEUR DE FRUITS ET LEGUMES',
        hero__subtitle: 'Un atelier réalisé dans le cadre de la forge d’adaptations Nord-Sud, par le H-Fablab d’Abidjan.'
    })

})

router.get('/liste-equipement', (req, res)=>{
    res.render('pages/liste-equipement', {
        page__title :"Liste de nos équipemets", 
        hero__label: 'Equipement',
        banner__image: "unnamed.png",
        hero__title: 'Nos équipements',
        hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es.',
        page__script: '<script type="module" src="js/equipments.js"></script>'
    })

})

router.get('/soumettre-un-projet', (req, res)=>{
    res.render('pages/soumettre-un-projet', {
        page__title :"Soumettre un projet",
        banner__image: "55910121_914414448910557_1748538231957225472_n.jpg",
        hero__title: 'Soumettre un projet',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    })

})


router.get('/reservation-equipement', (req, res)=>{
    res.render('pages/reservation-equipement', {
        page__title :"Reserver une machine",
        banner__image: "Rectangle 5982.png",
        hero__title: 'Réserver une machine',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    })

})


router.get('/inscription-atelier', (req, res)=>{
    res.render('pages/inscription-atelier', {
        page__title :"Inscription atelier",
        banner__image: "Rectangle 5982.png",
        hero__title: 'Réserver une machine',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    })

})


router.get('/inscription-evenement', (req, res)=>{
    res.render('pages/inscription-evenement', {
        page__title :"inscription evenement",
        banner__image: "Rectangle 5982.png",
        hero__title: 'Réserver une machine',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    })

})


router.get('/form-donation', (req, res)=>{
    res.render('pages/form-don', {
        page__title :"Faire un don", 
        banner__image: "Startup-Grind.jpeg",
        hero__label: 'Agenda',
        hero__title: 'Faire un don',
        hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br class="blog--xxl__separator"> Etiam eu turpis molestie, dictum es', 
        page__script: '<script type="module" src="js/events.js"></script>'
    })

})


router.get('/form-donation-materiel', (req, res)=>{
    res.render('pages/form-don-materiel', {
        page__title :"Faire un don", 
        banner__image: "Startup-Grind.jpeg",
        hero__label: 'Agenda',
        hero__title: 'Faire un don',
        hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br class="blog--xxl__separator"> Etiam eu turpis molestie, dictum es', 
        page__script: '<script type="module" src="js/events.js"></script>'
    })

})

router.get('/post--xx--xx', (req, res)=>{
    res.render('pages/post', {
        page__title :"Reserver une machine",
        banner__image: "Rectangle 5982.png",
        
    })

})

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