export default {
  application: 'Stack Front',
  loading: 'Cargando, por favor espere...',
  rol: {
    admin: 'Administrador',
    ops: 'Operador',
  },
  title: {
    welcome: '¡Bienvenido!',
    login: 'Iniciar sesión',
    forgotPassword: 'Recuperar contraseña',
    validateCode: 'CÓDIGO DE VERIFICACIÓN',
    changePassword: 'Restablecer contraseña',
    logout: 'Cerrar sesión',
  },
  form: {
    email: {
      label: 'Correo electrónico',
      placeholder: 'Escribir correo electrónico',
    },
    password: {
      label: 'Contraseña',
      placeholder: 'Escribir contraseña',
      tooltip:
        'La contraseña debe contener al menos una minúscula, una mayúscula y un número',
    },
    confirmPassword: {
      label: 'Repetir Contraseña',
      placeholder: 'Repetir Contraseña',
    },
  },
  button: {
    login: 'Iniciar sesión',
    forgotPassword: '¿Olvidaste tu contraseña?',
    sendCode: 'Enviar',
    resendCode: 'Reenviar código',
    validate: 'Verificar',
    reset: 'Restablecer',
    update: 'Actualizar',
    cancel: 'Cancelar',
    create: 'Crear',
    no: 'No',
    logout: 'Sí, salir',
    confirm: 'Confirmar',
  },
  rule: {
    form: 'Por favor revisa la información',
    image: 'Debe seleccionar una imagen',
    validation: {
      require: 'El dato es requerido para continuar',
      value: {
        min: 'Debe ser mayor o igual a {data}',
        max: 'Debe ser inferior o igual a {data}',
      },
      length: {
        min: 'Debe contener al menos {data} carácteres',
        max: 'No puede contener más de {data} carácteres',
      },
      email: 'Debe ser una dirección de correo válida',
      password: {
        min: 'La contraseña debe tener al menos 8 caracteres',
        valid:
          'La contraseña debe contener al menos una mayúscula, una minúscula y un número',
        confirm: 'Las contraseñas deben coincidir',
      },
      number: 'El dato es solo numérico',
    },
  },
  store: {
    apiServices: {
      sessionExpired:
        'Su sesión ha expirado, por favor inicie sesión nuevamente',
      loginRequired: 'Debe ingresar sus credenciales para continuar',
      timeOut:
        'Ha tardado demasiado en responder. Intente nuevamente más tarde',
      notFound:
        'No se encontró la url solicitada. Intente nuevamente más tarde',
      generalError:
        'Ocurrió un error en el servidor. Intente nuevamente más tarde',
    },
  },
  text: {
    login: 'Por favor digita tu correo electrónico',
    forgotPassword:
      'Por favor ingresa tu correo, enviaremos un código para que puedas restablecer tu contraseña.',
    validateCode: 'Por favor ingresa el código que enviamos a: ',
    changePassword:
      'La contraseña debe contener 8 caracteres alfanuméricos, una mayúscula y una minúscula.',
    logout: '¿Seguro que desea cerrar sesión?',
    code: 'Puedes solicitar otro código en {data} segundos.',
  },
  table: {
    empty: {
      title: 'Lo sentimos',
      message: 'Lamentablemente no tenemos datos que mostrar.',
    },
    loading: 'Cargando... Por favor aguarde un momento',
    state: {
      title: 'Estado',
      active: 'Activo',
      inactive: 'Inactivo',
    },
    admin: {
      name: 'Nombre y Apellido',
      email: 'Correo electrónico',
      role: 'Rol',
      cellphone: 'Teléfono',
    },
  },
  menu: {
    notification: 'Notificaciones',
    logout: 'Cerrar sesión',
    report: 'Reportes',
    payment: 'Pagos',
    setting: 'Parametrización',
    category: 'Categorías',
    plan: 'Planes',
    exerciseCatalog: 'Banco',
    client: 'Clientes',
    admin: 'Administradores',
    country: 'Países',
    language: 'Idiomas',
    help: 'Ayuda',
  },
}
