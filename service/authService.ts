import firebase from "firebase"
export class AuthService {
  protected $fb: any

  constructor ($fb: any) {
    this.$fb = $fb
  }

  providor = () => {
    return new this.$fb.auth.TwitterAuthProvider()
  }

  signup = async () => {
    await this.$fb.auth().signInWithRedirect(new this.$fb.auth.TwitterAuthProvider())
  }
}
