import DigitalOceanService from '../services/DigitalOceanService';

class UploadController {
  async uploadFile(request, response, next) {
    DigitalOceanService.upload(request, response, error => {
      if (error) {
        console.log(error);
        return response.status(500).json({ status: false, error });
      }

      return response.status(200).json({
        status: true,
        file: request.files[0],
      });
    });
  }

  async uploadFileForm(request, response, next) {
    DigitalOceanService.upload(request, response, error => {
      if (error) {
        console.log(error);
        return response.redirect('/error');
      }

      return response.redirect('/success');
    });
  }
}

export default new UploadController();
