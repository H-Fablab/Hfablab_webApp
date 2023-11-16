import dotenv from 'dotenv';
dotenv.config();

class equipmentBookingController {
    async equipementBooking(req, res) {
        try {
          const formData = req.body;
          const apiRoot = process.env.API_ROOTE;
          const response = await fetch(`${apiRoot}/equipment-booking`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
          res.status(201).send(data)
        } catch (error) {
          const errorMessage = 'Failed to sign up: ' + error.message;
          res.status(500).json({ message: errorMessage });
        }
      }
}

export default new equipmentBookingController()