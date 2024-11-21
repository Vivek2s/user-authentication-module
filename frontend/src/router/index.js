import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../components/Login.vue'
import UserSignup from '../components/Signup.vue'
import UserProfile from '../components/Profile.vue'

// Simulated authentication check (replace with your actual authentication logic)
function isAuthenticated() {
  return !!localStorage.getItem('authToken'); // Example: check if a token exists
}

const routes = [
  {path: '/', redirect: '/login'},
  { path: '/login', component: UserLogin },
  { path: '/signup', component: UserSignup },
  { path: '/profile', component: UserProfile, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login'); // Redirect to login if not authenticated
  } else {
    next(); // Proceed to the route
  }
});

export default router
