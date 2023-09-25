import dotenv from 'dotenv'
dotenv.config()


 class equipmentsController {
 
  async getEquipments(req, res) {
  const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    
    const apiRoot = process.env.API_ROOTE
    const page =  req.originalUrl === '/' ? 'home' : req.originalUrl.slice(1)
    // Fetch the page metadata from the API
    const response = await fetch(`${apiRoot}/metadata/${page}`);
    // Check the response status
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    // Get the page metadata from the response
    const pageLocals = await response.json();

    // Render the page with the page metadata
    const locals = {
      ...pageLocals.data,
    };

    //Fetch equipments list 
    const equipmentData = await fetch(`${apiRoot}/equipements`)
    if (!equipmentData.ok) {
        return res.status(equipmentData.status).send(equipmentData.statusText);
      }
      // Get the page metadata from the response
      const equipmentsRaw = await equipmentData.json()
      const equipments = [...equipmentsRaw.equipments]

    res.render(`pages/${page}`, {currentPage, locals, equipments})
  }
}

export default new equipmentsController()