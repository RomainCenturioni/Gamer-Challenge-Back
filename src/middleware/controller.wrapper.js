export const controllerWrapper = (controller) => async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch(err){
      console.error(err);   
      res.status(500).json({error: 'Internal Server Error, plz retry again later'});
    }
  };