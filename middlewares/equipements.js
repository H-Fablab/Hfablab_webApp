import fs from 'fs';

const equipmentsHandlers = (req, res, next) => {
  // Read the JSON data
  let equipmentsData = JSON.parse(fs.readFileSync('equipements.json'));
  // Modify each item in the array to add "equipements/" to the "file_name"
  equipmentsData = equipmentsData.map((equipment) => ({
    ...equipment,
    file__name: `../equipements/${equipment.file__name}`,
  }));

  const locals = {
    page__title: "Liste de nos équipemets",
    hero__label: 'Equipement',
    banner__image: "unnamed.png",
    hero__title: 'Nos équipements',
    hero__subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum es.',
    page__script: 'equipments.js'
  }

  res.render('pages/liste-equipements', { equipmentsData, locals });
};

export default equipmentsHandlers;