<template>
  <GuestHeader />
  <div class="w-full flex justify-center">
    <div
      class="mx-2 md:mx-auto bg-white mt-28 md:px-7 px-5 py-5 w-full md:w-[50rem] xl:w-[60rem] shadow-lg rounded-xl"
    >
      <MngHead title="login" />
      <form @submit="submitForm" ref="form">

        <input
          :value="text"
          @input="event => text = event.target.value">
        <input
          :value="text"
          @input="event => text = event.target.value">
        <button class="btn btn-fill my-5 text-base">
          <span v-if="!isLoading">Login</span>
          <ButtonLoader v-else />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import InputC from '@/components/elements/InputC.vue';
import MngHead from '@/components/mng/MngHead.vue';
import { toast } from '@/utils/toast';
import { setCookie, getCookie } from '@/utils/cookie';
import ButtonLoader from '@/layout/ButtonLoader.vue';
import GuestHeader from '@/layout/GuestHeader.vue';

export default {
  components: {
    MngHead,
    InputC,
    ButtonLoader,
    GuestHeader,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  setup() {
    return {  };
  },
  methods: {
    async submitForm(e) {
      if (this.isLoading) {
        return;
      }
      e.preventDefault();
      const email = this.$refs.form.email.value;
      const password = this.$refs.form.password.value;
      try {
        this.isLoading = true;
        const res = await axios.post('/api/subscribers/login', {
          email,
          password,
        });

        if (res.status == 200 && res?.data?.access_token) {
          toast('success', 'success');
          await setCookie('token', res.data.access_token);
          await setCookie('user', JSON.stringify(res.data.user));
          axios.defaults.headers.common.Authorization = `Bearer ${getCookie(
            'token'
          )}`;
          this.$router.push(`/`);
        } else {
          toast(
            res?.data?.message ||
            'invalidLogin',
            'error'
          );
        }
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        toast('invalidLogin', 'error');
        console.log(err.response.data);
      }
    },
  },
};
</script>
