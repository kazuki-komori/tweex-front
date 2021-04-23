import { createNamespacedHelpers } from "vuex"
import { AuthService } from "@/service/authService"

export const authMapper = createNamespacedHelpers("auth")

export const state = () => {
  return {
    profile: null
  }
}

export const getters = {
}

export const mutations = {
  async SET_PROFILE (state, {profile}) {
    state.profile = { ...profile }
  }
}

export const actions = {
  async Login () {
    const auth = new AuthService(this.$fb)
    await auth.signup()
  },

  async SetProfile ({commit}) {
    const res = await this.$fb.auth().getRedirectResult()
    console.log(res)
    if (!res?.user?.uid) {
      return
    }
    const user = res?.user
    const profile = {}
    profile["display_name"] = user.displayName
    profile["uid"] = user.uid
    commit("SET_PROFILE", { profile })
  }
}
