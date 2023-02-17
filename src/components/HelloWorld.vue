<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 >EMPLOYEE DETAILS</h2>
    <table class="employee-table" style="font-family: Verdana, Geneva, Tahoma, sans-serif; color: black;">
      <tr>
        <th>Name</th>
        <th>Job Title</th>
        <th>Department</th>
        <th>Start Date</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      <tr v-for="employee in employees" :key="employee.id">
        <td> {{ employee.name }}</td>
        <td>{{ employee.jobTitle }}</td>
        <td>{{ employee.department }}</td>
        <td>{{ employee.startDate }}</td>
        <td>
          <button class="update" @click="updateEmployee(employee.id, employee)">Update</button>
        </td>
        <td><button class="delete" @click="deleteData(employee.id)">Delete</button></td>
      </tr>
    </table>
    <form @submit="submitForm" class="employee-form">
      <span>Employee Name</span><br>
      <input v-model="info.name" type="text" placeholder="Enter your name" /><br>
      <span>Job Title</span><br>
      <input v-model="info.jobTitle" type="text" placeholder="Enter your job title" /><br>
      <span>Department</span><br>
      <input v-model="info.department" type="text" placeholder="Enter your department" /><br>
      <span>Start Date</span><br>
      <input type="date" v-model="info.startDate" /><br>
      <br>
      <div v-if="!submit">

        <button class="submit" type="submit" @click="submitForm">Submit</button>
      </div>
      <div v-else>
        <button class="edit" type="submit" @click="editDetails">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      employees: [],
      info: {
        name: '',
        jobTitle: '',
        department: '',
        startDate: ''
      },
      submit: false,index:0
    }
  },
  methods: {
    async getEmployeeData() {
      const response = await axios.get("http://127.0.0.1:3333/employee")
      console.log("reponse", response)
      this.employees = response.data
    },
    async submitForm() {
      console.log("postbefore");
      const response = await axios.post("http://127.0.0.1:3333/employee", this.info)
      this.employees = response.data
      console.log("post", response);
      this.$toasted.show("Submitted Sucessfully")
    },
    async deleteData(id) {
      if (confirm("confirm to delete employee details")) {
        const deleteResponse = await axios.delete("http://127.0.0.1:3333/employee/" + id)
        console.log(deleteResponse);

      }
      else
        throw new Error("Cancelled")
      this.getEmployeeData()
      this.$toasted.show("Deleted Sucessfully")

    },
     updateEmployee(id,val) {
      if(confirm("confirm to update employee details")){
        
        console.log(this.employees);
        
      this.employees=val
        this.index=id
      this.submit=true
      }
      else 
       this.$toasted.show("you clicked cancel")
    },
    async editDetails(){
      console.log(this.employees.id);
       const result =await axios.put('http://127.0.0.1:3333/employee/' + this.index, this.info).then((res) => {
                if (result.status == 200)
                    this.employees = res.data;
            });
            this.submit=false
    }
  },

  async mounted() {
    console.log("asda");
    await this.getEmployeeData()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.employee-form {
  position: absolute;
  left: 0px;
  height: 40%;
  width: 30%;

  margin-left: 13%;
  background-color: rgb(202, 202, 198);
}

.hello {
  background-color: cadetblue;
}

.employee-table {
  position: absolute;
  right: 0px;
  width: 50%;

}

.table {
  border: 1px;
}

th,
td {
  border: 2px solid rgb(12, 12, 12) !important;
}
</style>
