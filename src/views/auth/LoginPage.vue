<template>
  <v-col cols="12" class="d-flex justify-center">
    <v-card :width="600" elevation="4" rounded="xl">
      <div class="py-8 px-8">
        <v-row>
          <v-col cols="12" class="text-center">
            <v-card-title>
              <p>Login Example</p>
              <p>Lorem ipsum dolor iste quisquam placeat.</p>
            </v-card-title>
          </v-col>
          <v-col cols="12">
            <v-card-text class="pa-0">
              <v-form ref="form">
                <v-col cols="12">
                  <v-text-field
                    v-model="form.username"
                    label="Username"
                    prepend-inner-icon="mdi-account"
                    hide-details="auto"
                    @keypress.enter.prevent="onSubmit"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.password"
                    label="Password"
                    hide-details="auto"
                    autocomplete="off"
                    @keypress.enter.prevent="onSubmit"
                  />
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-btn
                    :loading="isLoading"
                    block
                    height="40"
                    class="mt-4"
                    color="primary"
                    @click="onSubmit"
                  >
                    Login
                  </v-btn>
                </v-col>
              </v-form>
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteName } from '@/constants'

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit() {
      await this.onLogin()
    },
    async onLogin() {
      const res = await this.$service.auth.login(this.form)
      console.log('>>>res;::', res)
      if (res) {
        this.$service.auth.saveToken(res.data.token)
        this.$router.push({ name: RouteName.DASHBOARD.INDEX })
      }
    }
  }
})
</script>
