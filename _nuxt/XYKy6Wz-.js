const e={USERS:{LIST:{TITLE:"Ayuda sobre la Lista de Usuarios",BODY:`
        <b>¡Bienvenido al panel de usuarios!</b>
        <p>Aquí puedes ver todos los usuarios registrados en el sistema.</p>
        <br>
        <p>Acciones disponibles:</p>
        <ul>
          <li><b>Registrar:</b> Haz clic en el botón verde para crear un usuario.</li>
          <li><b>Detalles:</b> Usa el icono del ojo para más información.</li>
        </ul>
      `},CREATE:{TITLE:"Ayuda sobre Registro de Usuario",BODY:"Formulario para dar de alta a un nuevo usuario asignándole un rol y permisos."},PROFILE:{TITLE:"Ayuda sobre el Perfil de Usuario",BODY:`
        <p>
          Completar el perfil de usuario es un paso <b>obligatorio</b> que debe
          completarse antes de poder utilizar las funcionalidades del sistema.
        </p>
        <p><b>¿Por qué es necesario completar el perfil?</b></p>
        <ul>
          <li>
            El formulario de perfil debe ser llenado <b>obligatoriamente</b> en
            su totalidad antes de proceder con cualquier otra carga de datos en
            el sistema.
          </li>
          <li>
            Hasta que no se complete el perfil, <b>no se habilitarán</b> las
            demás pantallas y módulos del sistema.
          </li>
          <li>
            Una vez completado y guardado el perfil correctamente, tendrá
            acceso a todas las funcionalidades y secciones disponibles.
          </li>
        </ul>
        <p><b>Recomendaciones:</b></p>
        <ul>
          <li>
            Asegúrese de que los datos ingresados sean precisos y estén
            actualizados.
          </li>
        </ul>
        <p>
          <b>Nota:</b> El perfil solo debe completarse una vez. Si necesitas
          modificar algún dato posteriormente, puede acceder nuevamente a esta
          sección para actualizar la información.
        </p>
      `}},HEALTHCARE_CENTERS:{LIST:{TITLE:"Ayuda sobre la Lista de Centros Asistenciales de Diálisis",BODY:"Aquí puedes ver todos los Centros Asistenciales de Diálisis registrados en el sistema."}},TRANSPLANT_CENTERS:{LIST:{TITLE:"Ayuda sobre la Lista de Centros de Trasplantes",BODY:"Aquí puedes ver todos los Centros de Trasplantes registrados en el sistema."}},ORGANS_AND_TISSUES_CENTERS:{LIST:{TITLE:"Ayuda sobre la Lista de Centros generadores de Órganos y Tejidos",BODY:"Aquí puedes ver todos los Centros generadores de Órganos y Tejidos registrados en el sistema."}},MEDICAL_SPECIALISTS:{LIST:{TITLE:"Ayuda sobre la Lista de Médicos especialistas en Trasplante",BODY:"Aquí puedes ver todos los Médicos especialistas en Trasplante registrados en el sistema."}},IMAGES:{LIST:{TITLE:"Ayuda sobre la Lista de Imágenes",BODY:`
        <p>
          En esta tabla se listan todas las imágenes utilizadas por el sistema,
          correspondientes a los siguientes elementos:
        </p>
        <ul>
          <li>Carnet del Donante</li>
          <li>Cintillos para los reportes en PDF</li>
          <li>Pie de página para reportes en PDF)</li>
        </ul>

        <br>

        <p><b>Acciones disponibles en la tabla:</b></p>
        <ul>
          <li><b>Detalles:</b> Permite visualizar la información completa de cada imagen.</li>
          <li><b>Actualizar:</b> Permite reemplazar una imagen existente por una nueva.</li>
          <li><b>Eliminar:</b> Permite borrar la imagen seleccionada del sistema.</li>
        </ul>

        <br>

        <p><b>Importante al actualizar una imagen:</b></p>
        <ul>
          <li>
            La nueva imagen que se cargue <b>debe tener exactamente las mismas
            dimensiones</b> (ancho y alto en px) que la imagen anterior.
          </li>
          <li>
            Puede consultar las dimensiones requeridas en la columna
            <b>"Dimensiones (px)"</b> de la tabla, donde se indican los valores
            correspondientes para cada imagen.
          </li>
          <li>
            Asegúrese de que la nueva imagen cumpla con estas medidas para
            mantener la correcta visualización en los reportes y documentos del
            sistema.
          </li>
        </ul>
      `}},MAIL_TEST:{LIST:{TITLE:"Ayuda sobre la Prueba de Correo Electrónico",BODY:"Aquí puedes verificar el funcionamiento del servicio de correo electrónico."}},DONORS:{LIST:{TITLE:"Ayuda sobre la Lista de Donantes Voluntarios",BODY:"Sección para consultar y gestionar la lista de Donantes Voluntarios."}},APPLICANTS:{LIST:{TITLE:"Ayuda sobre la Lista de Solicitudes Recibidas",BODY:"Sección para consultar y gestionar la lista de Solicitudes Recibidas."}},RENAVDO:{TITLE:"Ayuda sobre el Registro Nacional de Voluntad de Donación (RENAVDO)",BODY:"XXXXXXXXXX"}};export{e as H};
