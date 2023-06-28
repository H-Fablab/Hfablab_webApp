const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
app.use(express.static('./public'))

app.engine('hbs', exphbs.engine({ 
    extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.get('/', (req, res)=>{
    res.render('pages/home', {page__title :"Home page"})
})

app.get('/blog', (req, res)=>{
    res.render('pages/blog', {page__title :"Nos actualités"})
})

app.get('/nos-projets', (req, res)=>{
    res.render('pages/projets', {  
            page__title :"Nos projets", 
            banner__image: "project.webp",
            hero__label: 'Projets',
            hero__title: 'Nos projets',
            hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam <br class="blog--xxl__separator"> en Côte d’ivoire et dans la sous région'
    })
})

app.get('/agenda', (req, res)=>{
    res.render('pages/agenda', {
        page__title :"Nos évènements", 
        banner__image: "Startup-Grind.jpeg",
        hero__label: 'Agenda',
        hero__title: 'Nos évènements du mois',
        hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br class="blog--xxl__separator"> Etiam eu turpis molestie, dictum es'
    })

})

app.get('/ateliers', (req, res)=>{
    res.render('pages/ateliers', {
        page__title :"Nos ateliers", 
        banner__image: "Rectangle 6004.png",
        hero__label: 'Atelier',
        hero__title: 'Aprréhendez le numérique  <br class="blog--xxl__separator"> grâce à nos ateliers',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> en Côte d’ivoire et dans la sous région'
    })

})

app.get('/a-propos', (req, res)=>{
    res.render('pages/a-propos', {
        page__title :"A Propos", 
        banner__image: "Rectangle 12 (2).png",
        hero__title: 'H-Fablab, un cadre pour la démocratisation du numérique',
        hero__subtitle: 'Notre objectif premier est promouvoir l’apprentissage par la pratique auprès des jeunes scolarisés ou non, alphabétisés ou non en français'
    })

})


app.get('/contact', (req, res)=>{
    res.render('pages/contact', {
        page__title :"Nous contacter", 
        hero__label: ' Contact',
        banner__image: "Rectangle 12 (2).png",
        hero__title: 'Nous contacter'
    })

})


app.get('/domaines-d-expertise', (req, res)=>{
    res.render('pages/expertise', {
        page__title :"Nos domines d'expertise", 
        hero__label: 'Expertise',
        banner__image: "55910121_914414448910557_1748538231957225472_n.jpg",
        hero__title: 'Domaines d’expertise',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    })

})

app.get('/soumettre-un-projet', (req, res)=>{
    res.render('pages/soumettre-un-projet', {
        page__title :"Soumettre un projet",
        banner__image: "55910121_914414448910557_1748538231957225472_n.jpg",
        hero__title: 'Soumettre un projet',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    })

})


app.get('/reservation-equipement', (req, res)=>{
    res.render('pages/reservation-equipement', {
        page__title :"Reserver une machine",
        banner__image: "Rectangle 5982.png",
        hero__title: 'Réserver une machine',
        hero__subtitle: 'Nous organisons différentes formations numériques gratuites <br class="blog--xxl__separator"> eu turpis molestie, dictum es'
    })

})

app.get('/post--xx--xx', (req, res)=>{
    res.render('pages/post', {
        page__title :"Reserver une machine",
        banner__image: "Rectangle 5982.png",
        
    })

})

app.get('/inscription', (req, res)=>{
    res.render('pages/sign-up')

})

app.get('/connexion', (req, res)=>{
    res.render('pages/login')

})

app.get('/recuperation-mot-de-pass', (req, res)=>{
    res.render('pages/recuperation-mot-de-pass')

})


app.get('/nouveau-mot-de-pass', (req, res)=>{
    res.render('pages/nouveau-mot-de-pass')

})

app.get('/dashboard', (req, res)=>{
    res.render('pages/dashboard')

})


app.get('/mon-abonnement', (req, res)=>{
    res.render('pages/dashboard-abonnement')

})

app.get('/parametres', (req, res)=>{
    res.render('pages/parametres')

})

app.listen(3001, ()=>{
    console.log("App running at port 3001")
})