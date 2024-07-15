import axios from "axios";

const getBanners = async () => {
  try {
    let response = await axios.get(`./contenido/banners.json`);
    return response.data;
  } catch (error) {
    alert(
      `Error al obtener la información. Por favor, intenta de nuevo más tarde.`
    );
    throw new Error(error.message);
  }
};

export default getBanners;
