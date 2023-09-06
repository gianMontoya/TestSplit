  //Esta variable almacena la authorization Key y una Key por defecto si se desea.
  var config = {
    core: {
      //Este valor se puede encontrar en la opción Admin settings/API keys/SDK API Keys
      //La Key a utilizar dependerá del "Enviroment" donde se hayan colocado las "feature flag"
      authorizationKey: '',
      //La Key, para este caso, es el rol por defecto.
      //La diferenciación de roles se podrá ver en 'ejemplo.js'
      key: 'DEFAULT'
    }
  };
  export default config;
  
  //Aquí se pueden configurar los diferentes Feature-Flags si se desea
  export const feature_flag_1 = 'FLAG_BOTONES';