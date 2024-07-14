import axios from "axios";

// Obtener productos a mostrar
export const getProducts = async () => {
  try {
    let response = await axios.get(`/contenido/productos.json`);
    return response.data;
  } catch (error) {
    alert(
      `Error al obtener la información. Por favor, intenta de nuevo más tarde.`
    );
    throw new Error(error.message);
  }
};


// Obtener categorías a mostrar
export const getCategories = async () => {
  try {
    let response = await axios.get(`/contenido/categorias.json`);
    return response.data;
  } catch (error) {
    alert(
      `Error al obtener la información. Por favor, intenta de nuevo más tarde.`
    );
    throw new Error(error.message);
  }
};