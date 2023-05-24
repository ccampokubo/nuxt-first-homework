export default {
  application: "Stack Front",
  loading: "Cargando, por favor espere...",
  rol: {
    admin: "Administrador",
    ops: "Operador",
  },
  title: {
    welcome: "¡Bienvenido!",
    login: "Iniciar sesión",
    forgotPassword: "Recuperar contraseña",
    validateCode: "Verificar código",
    changePassword: "Restablecer contraseña",
    logout: "Cerrar sesión",
  },
  form: {
    email: {
      label: "Correo electrónico",
      placeholder: "Escribir correo electrónico",
    },
    password: {
      label: "Contraseña",
      placeholder: "Escribir contraseña",
      tooltip:
        "La contraseña debe contener al menos una minúscula, una mayúscula y un número",
    },
    confirmPassword: {
      label: "Repetir Contraseña",
      placeholder: "Repetir Contraseña",
    },
  },
  button: {
    login: "Iniciar sesión",
    forgotPassword: "¿Olvidaste tu contraseña?",
    sendCode: "Enviar código",
    resendCode: "Volver a enviar código",
    validate: "Verificar",
    reset: "Restablecer",
    update: "Actualizar",
    cancel: "Cancelar",
    create: "Crear",
    no: "No",
    logout: "Sí, salir",
  },
  rule: {
    form: "Por favor revisa la información",
    image: "Debe seleccionar una imagen",
    validation: {
      require: "El dato es requerido para continuar",
      value: {
        min: "Debe ser mayor o igual a {data}",
        max: "Debe ser inferior o igual a {data}",
      },
      length: {
        min: "Debe contener al menos {data} carácteres",
        max: "No puede contener más de {data} carácteres",
      },
      email: "Debe ser una dirección de correo válida",
      password: {
        valid: "La contraseña debe ser válida",
        confirm: "Las contraseñas deben coincidir",
      },
      number: "El dato es solo numérico",
    },
  },
  store: {
    apiServices: {
      sessionExpired:
        "Su sesión ha expirado, por favor inicie sesión nuevamente",
      loginRequired: "Debe ingresar sus credenciales para continuar",
      timeOut:
        "Ha tardado demasiado en responder. Intente nuevamente más tarde",
      notFound:
        "No se encontró la url solicitada. Intente nuevamente más tarde",
      generalError:
        "Ocurrió un error en el servidor. Intente nuevamente más tarde",
    },
  },
  text: {
    login: "Por favor digita tu correo electrónico",
    forgotPassword:
      "Por favor escriba su correo electrónico, le enviaremos un código de verificación",
    validateCode:
      "Hemos enviado un código de verificación a tu correo, por favor escribe a continuación",
    changePassword:
      "Por favor escribe tu nueva contraseña, recuerda que debe tener al menos una minúscula, una mayúscula y un número",
    logout: "¿Seguro que desea cerrar sesión?",
  },
  table: {
    empty: {
      title: "Lo sentimos",
      message: "Lamentablemente no tenemos datos que mostrar.",
    },
    loading: "Cargando... Por favor aguarde un momento",
    state: {
      title: "Estado",
      active: "Activo",
      inactive: "Inactivo",
    },
  },
  menu: {
    notification: "Notificaciones",
    logout: "Cerrar sesión",
    report: "Reportes",
    payment: "Pagos",
    setting: "Parametrización",
    category: "Categorías",
    plan: "Planes",
    exerciseCatalog: "Banco",
    client: "Clientes",
    admin: "Administradores",
    country: "Países",
    language: "Idiomas",
    help: "Ayuda",
  },
};
