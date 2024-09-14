import { StudentServices } from "./services/student.services";

async function exampleController(){
    const studentServices = new StudentServices()
    
    const create = await studentServices.create({
         name: "Lucas",
         email: "lucasKenzie@kenzie.com.br"})

         console.log(create)

    const createMany = await studentServices.createMany([
        { name: "Carlos", email: "Carlos@email.com"}, 
        { name: "Sales", email: "Sales@email.com"}])

        console.log(createMany)
}

exampleController()

