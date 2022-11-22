<template>
  <div class="employee-list">
    <div class="employee-header">
      <h2>Employees</h2>
      <button class="btn" @click="$router.push({ path: '/create' })">Add employee</button>
    </div>
    <div class="employee-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Middle</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Nationality</th>
            <th scope="col">Birth place</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in EmployeeList" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.middleName }}</td>
            <td>{{ item.birthdate }}</td>
            <td>{{ item.nationality }}</td>
            <td>{{ item.birthPlace }}</td>
            <td>
              <div class="table-buttons">
                <i class="fas fa-edit" @click="
                  $router.push({
                    path: `/update/${item.id}/`,
                  })
                "></i>

                <i class="fas fa-trash-alt"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="employee-footer"></div>
  </div>
</template>

<script>
export default {
  computed: {
    EmployeeList() {
      return this.$store.getters["employee/getEmployeeList"];
    },
  },
};
</script>

<style>

</style>