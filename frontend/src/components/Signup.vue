<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSignup">
        <input v-model="name" type="text" placeholder="Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import apiClient from "@/utils/api";
export default {
  name: "UserSignup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleSignup() {
      try {
        // Make POST request to backend API
        const response = await apiClient.post("/auth/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        // If signup is successful, emit success event or navigate to login
        if (response.status === 201) {
          localStorage.setItem("authToken", response.data.access_token);
            localStorage.setItem("email", this.email);
  
            // Emit success event
            this.$emit("authSuccess");
            
            console.log("Login successful");
            // Redirect to profile page
            this.$router.push("/profile");
        }
      } catch (error) {
        // Handle errors (e.g., invalid email, password issues)
        this.errorMessage = error.response?.data?.message || "Error creating account.";
      }
    },
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.auth-card {
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.auth-card h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.auth-card form input {
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
}

.auth-card button {
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  border: none;
  background-color: #4a90e2;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.auth-card button:hover {
  background-color: #357abd;
}

.error {
  color: #e74c3c;
  margin-top: 1rem;
}
</style>
