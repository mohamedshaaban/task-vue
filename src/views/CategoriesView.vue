<template>
  <div id="page">
    <MngHead   />
     <div >
      <div class="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4">
        <!-- USER MAIN INFO --><center>
        <div class="panel-card" style="width: 50%;">

          <div data-v-7a7a37b1="" class="wrapper">
            <nav data-v-7a7a37b1="">
              <div v-for="item in categories">
                <router-link :to="{name: 'blogs', params: {cat_id: item.id}}"   >
                  {{ item.title}}
                </router-link>
              </div>
            </nav></div>

         </div>
        <!-- PROFILE IMG -->
       </center>
      </div>


    </div>
  </div>
</template>

<script>
import MngHead from '@/components/mng/MngHead.vue';
import { toast } from '@/utils/toast';

import axios from 'axios';
import { getCookie } from '@/utils/cookie.js'

export default {
  components: {

    MngHead,

  },
  setup() {
     return {  };
  },
  data() {
    return {
      categories: null,

    };
  },
  methods: {
    async getCategoriesData() {
       this.isLoading = true;

      try {
         const res = await axios.get('http://task.dot-zerone.com/task/index.php?r=/api/blogCategories',{headers: {"token": getCookie('token')}});
        return res.data.list;
      } catch (error) {
        toast('error');
      } finally {
        this.isLoading = false;
      }
    }
  },
  async mounted() {
    this.categories = await this.getCategoriesData();

  },
};
</script>
