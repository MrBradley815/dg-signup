<template>
  <h2 class="title">Contact List</h2>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-if="documents">
    <table id="contacts">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone #</th>
          <th>Email</th>
          <th>Signup Date</th>
          <th>Contact Pref</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doc in documents" :key="doc.id" :class="{ 'green-bkg': doc.completed, 'yellow-bkg': doc.followUp, 'red-bkg': doc.remove }">
          <td>{{ doc.firstName }}</td>
          <td>{{ doc.lastName }}</td>
          <td>{{ doc.phone }}</td>
          <td>{{ doc.email }}</td>
          <td>{{ doc.createdAt.toDate().toLocaleDateString('en-US') }}</td>
          <td>{{ doc.pref }}</td>
          <ContactActions :doc="doc" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue'
import getCollection from '../composables/getCollection'
import useDocument from '../composables/useDocument'
import ContactActions from '../components/ContactActions'

export default {
  components: { ContactActions },
  setup() {
    const { documents, error } = getCollection('contacts')

    return { error, documents }
  }
}
</script>

<style>
  .green-bkg {
    background: #87d5ac !important;
  }
  .yellow-bkg {
    background: #ffffaf !important;
  }
  .red-bkg {
    background: #ffb2b2 !important;
  }
  #contacts {
    width: 100%;
    border-collapse: collapse;
  }
  #contacts td, #contacts th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  #contacts th {
    background: #222;
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  #contacts tbody tr:nth-child(even) {
    background: #f9f9f9;
  }
  #contacts tbody tr:hover {
    background: #eee;
  }
</style>