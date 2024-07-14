<template>
  <section class="w-1/2 px-8">
    <form @submit.prevent="handleSubmit">
      <div class="inline-flex gap-6 my-3 w-full">
        <div class="mb-4 w-1/2">
          <input type="text" id="name" v-model="form.name" class="w-full rounded-3xl px-6 py-3 text-gray-900" placeholder="Tu nombre" required>
        </div>
        <div class="mb-4 w-1/2">
          <input type="email" id="email" v-model="form.email" class="w-full rounded-3xl px-6 py-3 text-gray-900" placeholder="Tu email" required>
        </div>
      </div>
      <div class="inline-flex gap-6 my-3 w-full">
        <div class="mb-4 w-1/2">
          <input type="text" id="subject" v-model="form.subject" class="w-full rounded-3xl px-6 py-3 text-gray-900" placeholder="Asunto" required>
        </div>
        <div class="mb-4 w-1/2">
          <input type="tel" id="phone" v-model="form.phone" class="w-full rounded-3xl px-6 py-3 text-gray-900" placeholder="Teléfono">
        </div>
      </div>
      <div class="mb-4">
        <textarea id="message" rows="6" v-model="form.message" class="w-full rounded-3xl px-6 py-2 text-gray-900" placeholder="Mensaje" required></textarea>
      </div>

      <button type="submit" class="text-sm font-medium bg-verde-custom rounded-3xl text-white py-4 px-10 uppercase">Enviar mensaje</button>
    </form>
  </section>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      Swal.fire({
        title: 'Enviado',
        text: 'Tu mensaje ha sido enviado exitosamente.',
        icon: 'success',
        confirmButtonText: 'Cerrar',
        customClass: {
          container: 'swal-container',
          popup: 'swal-popup',
          confirmButton: 'swal-confirm-button'
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
