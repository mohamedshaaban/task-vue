<template>
  <div class="w-full flex justify-center">
    <div
      class="mx-2 md:mx-auto bg-white mt-28 md:px-7 px-5 py-5 w-full md:w-[50rem] xl:w-[60rem] shadow-lg rounded-xl"
    >
      <form @submit="submitForm" ref="form">

        <InputC
          id="username"
          name="username"
           label="User name"
          required="required"
          placeholder="+96500002222"
          wrapperClass="max-w-full mb-4"
          labelClass="text-base h-5"
        />
        <InputC
          id="password"
          name="password"
          label="password"
          type="password"
          required="required"
          wrapperClass="max-w-full"
          placeholder="•••••••••"
          labelClass="text-base h-5"
        />

        <button class="btn btn-fill my-5 text-base">
          <span v-if="!isLoading">Login</span>
          <ButtonLoader v-else />
        </button>
      </form>

      <router-link to="register">
        Register Here
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
 import MngHead from '@/components/mng/MngHead.vue';
import { toast } from '@/utils/toast';
import { setCookie, getCookie } from '@/utils/cookie';
import ButtonLoader from '@/layout/ButtonLoader.vue';
 import GuestHeader from '@/layout/GuestHeader.vue';
import InputC from '@/components/elements/InputC.vue';

export default {
  components: {

    ButtonLoader,InputC
  },
  data() {
    return {
      form: {

        password: null,
        username: null,
      },
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
      const username = this.$refs.form.username.value;
      const password = this.$refs.form.password.value;
      let formData = new FormData();
      formData.append('username', username);
      formData.append('password',password);
      formData.append('_method', 'POST');
      try {
        this.isLoading = true;
        const res = await axios.post('http://task.dot-zerone.com/task/index.php?r=api/login', formData, {
          headers: {
            // remove headers
          }
        });

        if (res.status == 200 && res?.data?.token) {
          toast('success', 'success');
          await setCookie('token', res.data.token);
           axios.defaults.headers.token = `${getCookie(
            'token'
          )}`;
          this.$router.push(`/blogs`);
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
