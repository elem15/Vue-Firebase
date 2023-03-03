import { projectAuth } from '../Firebase/config';
import { ref } from 'vue';

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged((_user) => {
  user.value = _user
})

const getUser = () => {
  return { user }
}
export default getUser