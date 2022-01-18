/**
 * SELECCIONAMOS LOS ELEMENTOS NECESARIOS
 * 1 - Obtener valor del input (descripción de la tarea)
 * 2 - Obtener el valor del combobox (prioridad de la tarea)
 * 3 - Seleccionar el botón
 * 4 - Seleccionar la lista donde vamos a agregar la tarea (document.getElementById)
 
 * CREAMOS EL ELEMENTO DE LA TAREA
 * 5 - Creamos un elemento de la tarea (li)
 * 6 - Agregamos el contenido de texto a la tarea (textContent)
 * 7 - Agregamos la clase CSS correspondiente al elemento (classList)
 * 8 - Anidamos el elemento de la tarea (li) a la lista de tareas (ul)
 
 * AGREGAMOS INTERACTIVIDAD
 * 9 - Cuando tengamos descripción de la tarea el boton `agregar` se agregue un nuevo elemento a la lista
 * 10 - Eliminar tarea cuando se seleccione
 */

const descripcionInput = document.getElementById("tarea");
const prioridadCombox = document.getElementById("prioridad");
const botonAgregar = document.getElementById("agregar");
const botonEliminar = document.getElementById("eliminar");
const botonCargar = document.getElementById("cargar");
const listaTareasUl = document.getElementById("lista-tareas");

const crearYAgregarTarea = () => {
  if (descripcionInput.value === "") {
    return undefined;
  }

  const nuevaTareaLi = document.createElement("li");

  nuevaTareaLi.textContent = descripcionInput.value;

  nuevaTareaLi.classList.add(prioridadCombox.value);

  listaTareasUl.appendChild(nuevaTareaLi);

  nuevaTareaLi.addEventListener("click", () => {
    nuevaTareaLi.remove();
  });
};

botonAgregar.addEventListener("click", crearYAgregarTarea);

botonEliminar.addEventListener("click", () => {
  listaTareasUl.textContent = "";
});
