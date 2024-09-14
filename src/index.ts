import { StudentServices } from "./services/student.services";

async function exampleController(){
    const studentServices = new StudentServices()
    
    const create = await studentServices.create({ phone: 83994150824, address: "Antonio Francisco"})

    const createMany = await studentServices.createMany([{}])
}

