<template>
  <div class="profile-container">
    <div class="profile-card">
      <h2>User Profile</h2>
      <p v-if="loading">Loading...</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="!loading && user">
        <strong>Name:</strong> {{ user.name }}
      </p>
      <p v-if="!loading && user">
        <strong>Email:</strong> {{ user.email }}
      </p>
      <button @click="logoutUser">Logout</button>
    </div>
  </div>
</template>

<script>
import apiClient from "@/utils/api";

export default {
  name: "UserProfile",
  data() {
    return {
      user: null,
      loading: true,
      errorMessage: "",
    };
  },
  created() {
    // Fetch user data from the backend on component mount
    this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      try {
        const token = localStorage.getItem("authToken"); // Retrieve the auth token
        if (!token) {
          this.errorMessage = "No token found. Please log in again.";
          this.loading = false;
          return;
        }

        // Make an API call to fetch the user profile
        const response = await apiClient.post("/users/me", {
          email: localStorage.getItem("email"),
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Update the user data with the response from the API
        this.user = response.data.user;
      } catch (error) {
        this.errorMessage = "Failed to fetch user profile.";
        this.logoutUser();
      } finally {
        this.loading = false;
      }
    },
    logoutUser() {
      localStorage.removeItem("authToken"); // Remove the auth token on logout
      this.$emit("logout");
      this.$router.push("/login"); // Redirect to the login page
    },
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.profile-card {
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.profile-card h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.profile-card p {
  margin: 0.5rem 0;
  color: #555;
}

.profile-card button {
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

.profile-card button:hover {
  background-color: #357abd;
}

.error {
  color: #e74c3c;
  margin-top: 1rem;
}
</style>
