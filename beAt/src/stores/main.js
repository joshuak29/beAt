import { ref } from 'vue'
import { defineStore } from 'pinia'

import axios from "axios";

export const useMainStore = defineStore('main', () => {
  const users = ref([]);

  const fetchUsers = async () => {
    let results = await axios.get('http://localhost:3000/users')
    users.value = results.data
  }

  return { users, fetchUsers }
})
